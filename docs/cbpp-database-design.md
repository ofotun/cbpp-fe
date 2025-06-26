# CBPP Database Design Specification

## Document Information
- **Project:** Community-Based Procurement Platform (CBPP) Database Design
- **Document Version:** 1.0
- **Date:** December 2024
- **Prepared By:** ASOS Consulting Development Team
- **Document Type:** Database Design Specification

---

## 1. Database Architecture Overview

### 1.1 Multi-Database Strategy
The CBPP platform uses a multi-database architecture to optimize performance and data management:

- **PostgreSQL (Primary Database):** Relational data, transactions, user management, business logic
- **MongoDB (Document Store):** Unstructured data, documents, audit logs, system configurations
- **Redis (Cache & Sessions):** Session management, caching, real-time data

### 1.2 Database Connection Strategy
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Application   │    │   PostgreSQL    │    │   MongoDB       │
│   Layer         │◄──►│   (Primary)     │    │   (Documents)   │
│                 │    │                 │    │                 │
│   - Users       │    │   - Users       │    │   - Documents   │
│   - Profiles    │    │   - Profiles    │    │   - Audit Logs  │
│   - Contracts   │    │   - Contracts   │    │   - Configs     │
│   - Payments    │    │   - Payments    │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │
         ▼
┌─────────────────┐
│   Redis         │
│   (Cache)       │
│                 │
│   - Sessions    │
│   - Cache       │
│   - Real-time   │
└─────────────────┘
```

---

## 2. PostgreSQL Database Schema

### 2.1 Core Tables

#### 2.1.1 Users Table
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL CHECK (role IN (
        'super_admin', 'bpp_admin', 'procurement_officer', 
        'cbo_manager', 'project_manager', 'contractor', 
        'evaluator', 'regulator'
    )),
    status VARCHAR(20) NOT NULL DEFAULT 'pending' CHECK (status IN (
        'active', 'inactive', 'pending', 'suspended'
    )),
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone_number VARCHAR(20),
    email_verified BOOLEAN DEFAULT FALSE,
    phone_verified BOOLEAN DEFAULT FALSE,
    last_login_at TIMESTAMP,
    failed_login_attempts INTEGER DEFAULT 0,
    locked_until TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by UUID REFERENCES users(id),
    updated_by UUID REFERENCES users(id)
);

-- Indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_status ON users(status);
CREATE INDEX idx_users_created_at ON users(created_at);
```

#### 2.1.2 User Sessions Table
```sql
CREATE TABLE user_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    refresh_token VARCHAR(500) NOT NULL,
    access_token_hash VARCHAR(255) NOT NULL,
    ip_address INET,
    user_agent TEXT,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_used_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE
);

-- Indexes
CREATE INDEX idx_user_sessions_user_id ON user_sessions(user_id);
CREATE INDEX idx_user_sessions_refresh_token ON user_sessions(refresh_token);
CREATE INDEX idx_user_sessions_expires_at ON user_sessions(expires_at);
```

#### 2.1.3 User Profiles Table
```sql
CREATE TABLE user_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    address TEXT,
    city VARCHAR(100),
    state VARCHAR(100),
    lga VARCHAR(100),
    postal_code VARCHAR(20),
    country VARCHAR(100) DEFAULT 'Nigeria',
    profile_picture_url VARCHAR(500),
    bio TEXT,
    date_of_birth DATE,
    gender VARCHAR(20) CHECK (gender IN ('Male', 'Female', 'Prefer not to say')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes
CREATE INDEX idx_user_profiles_user_id ON user_profiles(user_id);
CREATE INDEX idx_user_profiles_state ON user_profiles(state);
CREATE INDEX idx_user_profiles_lga ON user_profiles(lga);
```

### 2.2 Contractor-Specific Tables

#### 2.2.1 Contractor Profiles Table
```sql
CREATE TABLE contractor_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    registration_type VARCHAR(20) NOT NULL DEFAULT 'self_registered' CHECK (registration_type IN ('self_registered', 'admin_created')),
    approval_status VARCHAR(20) NOT NULL DEFAULT 'pending_approval' CHECK (approval_status IN (
        'pending_approval', 'pending_verification', 'approved', 'rejected', 'suspended'
    )),
    business_name VARCHAR(255) NOT NULL,
    cac_number VARCHAR(50) NOT NULL,
    date_of_incorporation DATE NOT NULL,
    sector VARCHAR(100) NOT NULL,
    bvn VARCHAR(11) NOT NULL,
    bvn_verified BOOLEAN DEFAULT FALSE,
    tin VARCHAR(20),
    state VARCHAR(100) NOT NULL,
    lga VARCHAR(100) NOT NULL,
    address TEXT,
    bank_name VARCHAR(100),
    account_number VARCHAR(20),
    account_name VARCHAR(255),
    bank_verified BOOLEAN DEFAULT FALSE,
    insurance_policy_number VARCHAR(100),
    insurance_expiry_date DATE,
    tax_clearance_number VARCHAR(100),
    tax_clearance_expiry_date DATE,
    annual_revenue DECIMAL(15,2),
    employee_count INTEGER,
    years_of_experience INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    approved_at TIMESTAMP,
    approved_by UUID REFERENCES users(id),
    rejection_reason TEXT
);

-- Indexes
CREATE INDEX idx_contractor_profiles_user_id ON contractor_profiles(user_id);
CREATE INDEX idx_contractor_profiles_approval_status ON contractor_profiles(approval_status);
CREATE INDEX idx_contractor_profiles_business_name ON contractor_profiles(business_name);
CREATE INDEX idx_contractor_profiles_cac_number ON contractor_profiles(cac_number);
CREATE INDEX idx_contractor_profiles_bvn ON contractor_profiles(bvn);
CREATE INDEX idx_contractor_profiles_state ON contractor_profiles(state);
CREATE INDEX idx_contractor_profiles_sector ON contractor_profiles(sector);
```

#### 2.2.2 Contractor Status History Table
```sql
CREATE TABLE contractor_status_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    contractor_id UUID NOT NULL REFERENCES contractor_profiles(id) ON DELETE CASCADE,
    previous_status VARCHAR(20),
    new_status VARCHAR(20) NOT NULL,
    reason TEXT,
    changed_by UUID NOT NULL REFERENCES users(id),
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes
CREATE INDEX idx_contractor_status_history_contractor_id ON contractor_status_history(contractor_id);
CREATE INDEX idx_contractor_status_history_changed_at ON contractor_status_history(changed_at);
```

### 2.3 Document Management Tables

#### 2.3.1 Documents Table
```sql
CREATE TABLE documents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    document_type VARCHAR(50) NOT NULL CHECK (document_type IN (
        'profile_picture', 'identification', 'business_registration', 
        'tax_clearance', 'insurance', 'other'
    )),
    file_name VARCHAR(255) NOT NULL,
    original_file_name VARCHAR(255) NOT NULL,
    file_size BIGINT NOT NULL,
    mime_type VARCHAR(100) NOT NULL,
    file_url VARCHAR(500) NOT NULL,
    description TEXT,
    verification_status VARCHAR(20) DEFAULT 'pending' CHECK (verification_status IN ('pending', 'verified', 'rejected')),
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    verified_at TIMESTAMP,
    verified_by UUID REFERENCES users(id),
    rejection_reason TEXT
);

-- Indexes
CREATE INDEX idx_documents_user_id ON documents(user_id);
CREATE INDEX idx_documents_document_type ON documents(document_type);
CREATE INDEX idx_documents_verification_status ON documents(verification_status);
CREATE INDEX idx_documents_uploaded_at ON documents(uploaded_at);
```

### 2.4 System Management Tables

#### 2.4.1 Audit Logs Table
```sql
CREATE TABLE audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    action VARCHAR(100) NOT NULL,
    resource_type VARCHAR(50),
    resource_id UUID,
    old_values JSONB,
    new_values JSONB,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes
CREATE INDEX idx_audit_logs_user_id ON audit_logs(user_id);
CREATE INDEX idx_audit_logs_action ON audit_logs(action);
CREATE INDEX idx_audit_logs_resource_type ON audit_logs(resource_type);
CREATE INDEX idx_audit_logs_created_at ON audit_logs(created_at);
```

#### 2.4.2 System Metrics Table
```sql
CREATE TABLE system_metrics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    metric_name VARCHAR(100) NOT NULL,
    metric_value DECIMAL(15,2) NOT NULL,
    metric_unit VARCHAR(20),
    tags JSONB,
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes
CREATE INDEX idx_system_metrics_metric_name ON system_metrics(metric_name);
CREATE INDEX idx_system_metrics_recorded_at ON system_metrics(recorded_at);
```

#### 2.4.3 Email Notifications Table
```sql
CREATE TABLE email_notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    email_type VARCHAR(50) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'sent', 'failed')),
    sent_at TIMESTAMP,
    error_message TEXT,
    retry_count INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes
CREATE INDEX idx_email_notifications_user_id ON email_notifications(user_id);
CREATE INDEX idx_email_notifications_status ON email_notifications(status);
CREATE INDEX idx_email_notifications_created_at ON email_notifications(created_at);
```

### 2.5 Future Tables (For Later Implementation)

#### 2.5.1 Contracts Table
```sql
CREATE TABLE contracts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    contract_number VARCHAR(100) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    contractor_id UUID NOT NULL REFERENCES contractor_profiles(id),
    project_manager_id UUID REFERENCES users(id),
    procurement_officer_id UUID REFERENCES users(id),
    contract_value DECIMAL(15,2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'NGN',
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'active', 'completed', 'suspended', 'terminated')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### 2.5.2 Payments Table
```sql
CREATE TABLE payments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    contract_id UUID NOT NULL REFERENCES contracts(id),
    payment_number VARCHAR(100) UNIQUE NOT NULL,
    amount DECIMAL(15,2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'NGN',
    payment_type VARCHAR(20) NOT NULL CHECK (payment_type IN ('advance', 'milestone', 'final')),
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'processed', 'completed', 'failed')),
    processed_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 3. MongoDB Collections

### 3.1 Documents Collection
```javascript
// documents collection
{
  _id: ObjectId,
  userId: UUID,
  documentId: UUID, // Reference to PostgreSQL documents table
  fileData: Binary, // Actual file content
  metadata: {
    originalName: String,
    mimeType: String,
    size: Number,
    uploadedAt: Date,
    checksum: String
  },
  createdAt: Date,
  updatedAt: Date
}
```

### 3.2 Audit Logs Collection
```javascript
// audit_logs collection
{
  _id: ObjectId,
  userId: UUID,
  action: String,
  resourceType: String,
  resourceId: UUID,
  oldValues: Object,
  newValues: Object,
  ipAddress: String,
  userAgent: String,
  timestamp: Date,
  sessionId: String
}
```

### 3.3 System Configurations Collection
```javascript
// system_configurations collection
{
  _id: ObjectId,
  key: String,
  value: Mixed,
  description: String,
  category: String,
  isPublic: Boolean,
  updatedBy: UUID,
  updatedAt: Date,
  version: Number
}
```

### 3.4 Notifications Collection
```javascript
// notifications collection
{
  _id: ObjectId,
  userId: UUID,
  title: String,
  message: String,
  type: String, // 'info', 'success', 'warning', 'error'
  read: Boolean,
  data: Object, // Additional notification data
  createdAt: Date,
  readAt: Date
}
```

---

## 4. Redis Data Structures

### 4.1 Session Management
```
Key: session:{sessionId}
Value: {
  userId: UUID,
  role: String,
  permissions: Array,
  lastActivity: Timestamp,
  expiresAt: Timestamp
}
TTL: 24 hours
```

### 4.2 User Cache
```
Key: user:{userId}
Value: {
  id: UUID,
  email: String,
  role: String,
  status: String,
  firstName: String,
  lastName: String,
  permissions: Array
}
TTL: 1 hour
```

### 4.3 Rate Limiting
```
Key: rate_limit:{userId}:{endpoint}
Value: Number (request count)
TTL: 1 hour
```

### 4.4 System Cache
```
Key: system:metrics
Value: {
  totalUsers: Number,
  activeUsers: Number,
  pendingApprovals: Number,
  systemHealth: String,
  lastUpdated: Timestamp
}
TTL: 5 minutes
```

---

## 5. Database Migrations

### 5.1 Initial Migration
```sql
-- 001_initial_schema.sql
BEGIN;

-- Create extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create users table
CREATE TABLE users (
    -- ... (as defined above)
);

-- Create user_sessions table
CREATE TABLE user_sessions (
    -- ... (as defined above)
);

-- Create user_profiles table
CREATE TABLE user_profiles (
    -- ... (as defined above)
);

-- Create contractor_profiles table
CREATE TABLE contractor_profiles (
    -- ... (as defined above)
);

-- Create contractor_status_history table
CREATE TABLE contractor_status_history (
    -- ... (as defined above)
);

-- Create documents table
CREATE TABLE documents (
    -- ... (as defined above)
);

-- Create audit_logs table
CREATE TABLE audit_logs (
    -- ... (as defined above)
);

-- Create system_metrics table
CREATE TABLE system_metrics (
    -- ... (as defined above)
);

-- Create email_notifications table
CREATE TABLE email_notifications (
    -- ... (as defined above)
);

COMMIT;
```

### 5.2 Future Migrations
```sql
-- 002_add_contracts_table.sql
-- 003_add_payments_table.sql
-- 004_add_tenders_table.sql
-- 005_add_evaluations_table.sql
-- etc.
```

---

## 6. Database Security

### 6.1 Row Level Security (RLS)
```sql
-- Enable RLS on sensitive tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE contractor_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY users_own_data ON users
    FOR ALL USING (auth.uid() = id);

CREATE POLICY contractors_own_data ON contractor_profiles
    FOR ALL USING (auth.uid() = user_id);
```

### 6.2 Data Encryption
```sql
-- Encrypt sensitive columns
ALTER TABLE users 
ADD COLUMN email_encrypted BYTEA,
ADD COLUMN phone_encrypted BYTEA;

-- Use pgcrypto for encryption
UPDATE users SET 
    email_encrypted = pgp_sym_encrypt(email, 'encryption_key'),
    phone_encrypted = pgp_sym_encrypt(phone_number, 'encryption_key');
```

### 6.3 Backup Strategy
- **Full Backup:** Daily automated backups
- **Incremental Backup:** Every 4 hours
- **Point-in-Time Recovery:** Continuous WAL archiving
- **Cross-Region Replication:** For disaster recovery

---

## 7. Performance Optimization

### 7.1 Indexing Strategy
- **Primary Keys:** UUID with gen_random_uuid()
- **Foreign Keys:** Indexed for join performance
- **Search Fields:** Composite indexes for common queries
- **Time-based Queries:** Indexed on created_at, updated_at

### 7.2 Query Optimization
```sql
-- Example optimized query for contractor dashboard
SELECT 
    cp.*,
    u.email,
    u.status as user_status,
    COUNT(d.id) as document_count,
    COUNT(CASE WHEN d.verification_status = 'verified' THEN 1 END) as verified_documents
FROM contractor_profiles cp
JOIN users u ON cp.user_id = u.id
LEFT JOIN documents d ON u.id = d.user_id
WHERE cp.approval_status = 'pending_approval'
GROUP BY cp.id, u.email, u.status;
```

### 7.3 Connection Pooling
- **Max Connections:** 100
- **Min Connections:** 10
- **Connection Timeout:** 30 seconds
- **Idle Timeout:** 10 minutes

---

## 8. Data Validation and Constraints

### 8.1 Check Constraints
```sql
-- Email format validation
ALTER TABLE users 
ADD CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

-- Phone number validation (Nigerian format)
ALTER TABLE users 
ADD CONSTRAINT valid_phone CHECK (phone_number ~* '^\+234[0-9]{10}$');

-- BVN validation (11 digits)
ALTER TABLE contractor_profiles 
ADD CONSTRAINT valid_bvn CHECK (bvn ~* '^[0-9]{11}$');
```

### 8.2 Triggers for Data Integrity
```sql
-- Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at 
    BEFORE UPDATE ON users 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

---

## 9. Monitoring and Maintenance

### 9.1 Database Monitoring
- **Query Performance:** pg_stat_statements
- **Table Statistics:** pg_stat_user_tables
- **Index Usage:** pg_stat_user_indexes
- **Connection Monitoring:** pg_stat_activity

### 9.2 Maintenance Tasks
```sql
-- Daily maintenance
VACUUM ANALYZE;
REINDEX DATABASE cbpp;

-- Weekly maintenance
VACUUM FULL;
ANALYZE;
```

---

## 10. Implementation Plan

### 10.1 Phase 1: Core Tables (Week 1)
- [ ] Users table
- [ ] User sessions table
- [ ] User profiles table
- [ ] Basic indexes and constraints

### 10.2 Phase 2: Contractor Tables (Week 2)
- [ ] Contractor profiles table
- [ ] Contractor status history table
- [ ] Documents table
- [ ] Related indexes

### 10.3 Phase 3: System Tables (Week 3)
- [ ] Audit logs table
- [ ] System metrics table
- [ ] Email notifications table
- [ ] Security policies

### 10.4 Phase 4: Optimization (Week 4)
- [ ] Performance tuning
- [ ] Additional indexes
- [ ] Monitoring setup
- [ ] Backup configuration

---

*Document Version: 1.0*  
*Last Updated: December 2024*  
*Prepared by: ASOS Consulting Development Team*
