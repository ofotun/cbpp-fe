# Contractor Dashboard Implementation Plan
## Feature: Unique User Role Login Dashboard Experience

### Project Overview
Implementing role-based dashboard experiences for the Community-Based Procurement Platform (CBPP). This document outlines the plan for implementing the Contractor role dashboard and navigation system.

### Goal
- Role-based routing (`/contractor/...`, `/admin/...`, etc.)
- Unique dashboard experiences for each user role
- Role-specific navigation menus and page access
- Personalized user experience based on role requirements

---

## Contractor Registration and Access Workflow

### Self-Registration Process
1. **Contractor Self-Registration:** Contractors can register themselves through the public signup portal
2. **Account Creation:** System creates contractor account with "pending_approval" status
3. **Login Access:** Contractors can login immediately after self-registration
4. **Limited Dashboard:** Pending contractors see verification status and approval progress
5. **Admin Review:** Super Admin, BPP Admin, or PCO reviews and approves contractor accounts
6. **Full Access:** Upon approval, contractors gain full access to all features

### Account Status Types
- **pending_approval:** Self-registered, awaiting admin review
- **pending_verification:** Admin-created, awaiting document verification
- **approved:** Fully verified and approved
- **rejected:** Application rejected by admin
- **suspended:** Temporarily suspended

---

## Contractor Role Implementation

### Route Structure
```
/contractor/
├── dashboard          # Contractor dashboard (status-dependent)
├── profile           # Profile management
├── procurement/
│   ├── tenders       # View and apply for tenders (approved only)
│   └── contracts     # Manage awarded contracts (approved only)
├── payments/
│   ├── platform      # Platform-related payments
│   └── contracts     # Contract-related payments (approved only)
├── reports           # Contractor-specific reports (approved only)
├── training          # Training materials
├── notifications     # System notifications
└── settings          # Account settings
```

---

## Features and User Stories

### 1. Dashboard
**Feature Description:** Contractor dashboard showing registration status, verification progress, and key metrics. Content varies based on account approval status.

#### User Stories:
- **US-001:** As a self-registered contractor, I want to see my approval status so that I know if my account is being reviewed
- **US-002:** As a contractor, I want to see my registration status so that I know if my account is fully verified
- **US-003:** As a contractor, I want to see my BVN verification status so that I know if my financial details are confirmed
- **US-004:** As a contractor, I want to see my bank details verification status so that I can ensure payment information is correct
- **US-005:** As a contractor, I want to see my ward verification status so that I know my geographic eligibility
- **US-006:** As a contractor, I want to see my CBO membership status so that I understand my community organization affiliation
- **US-007:** As an approved contractor, I want to see a summary of my active contracts so that I can track my current work
- **US-008:** As an approved contractor, I want to see pending applications so that I can track my tender submissions
- **US-009:** As a contractor, I want to see recent notifications so that I stay informed about important updates
- **US-010:** As a pending contractor, I want to see what features will be available after approval so that I understand the platform benefits

#### Acceptance Criteria:
- Dashboard displays different content based on account status
- Pending contractors see approval progress and estimated timeline
- Approved contractors see full dashboard with all metrics
- Progress indicators show completion percentage for verification steps
- Quick access to incomplete verification steps
- Summary cards for key metrics (active contracts, pending applications, etc.) - approved only
- Recent activity feed
- Notification center integration
- Clear messaging about account status and next steps

---

### 2. Profile Management
**Feature Description:** Contractor profile management with role-based field restrictions and status-dependent access.

#### User Stories:
- **US-011:** As a contractor, I want to view my profile information so that I can see all my details
- **US-012:** As a pending contractor, I want to update my profile information so that I can provide additional details while waiting for approval
- **US-013:** As an approved contractor, I want to update my company name so that it reflects current business information
- **US-014:** As an approved contractor, I want to add or update bank details so that I can receive payments
- **US-015:** As a contractor, I want to change my password so that I can maintain account security
- **US-016:** As a contractor, I want to update my contact information so that I can be reached for important matters
- **US-017:** As a contractor, I want to see which fields are locked due to BVN verification so that I understand what cannot be changed
- **US-018:** As a contractor, I want to upload supporting documents so that I can complete my profile
- **US-019:** As a pending contractor, I want to see what additional information is needed for approval so that I can prepare accordingly

#### Acceptance Criteria:
- Profile access varies based on account status
- Pending contractors can update basic information and upload documents
- BVN-verified fields are clearly marked as read-only
- Form validation prevents changes to verified data
- File upload functionality for documents
- Password change with security requirements
- Contact information update capabilities
- Profile completion percentage indicator
- Clear indication of approval requirements and timeline

---

### 3. Procurement Management

#### 3.1 Tenders
**Feature Description:** View eligible procurement requests and manage applications (approved contractors only).

#### User Stories:
- **US-020:** As an approved contractor, I want to see eligible procurement requests so that I can identify opportunities
- **US-021:** As an approved contractor, I want to filter tenders by location so that I can find local opportunities
- **US-022:** As an approved contractor, I want to filter tenders by value range so that I can focus on suitable projects
- **US-023:** As an approved contractor, I want to view tender details so that I can understand project requirements
- **US-024:** As an approved contractor, I want to apply for tenders so that I can participate in procurement
- **US-025:** As an approved contractor, I want to track my application status so that I know if I'm being considered
- **US-026:** As an approved contractor, I want to withdraw my application so that I can remove myself from consideration
- **US-027:** As an approved contractor, I want to see application history so that I can track my participation
- **US-028:** As a pending contractor, I want to see a preview of available tenders so that I understand what opportunities await after approval

#### Acceptance Criteria:
- Tender access restricted to approved contractors only
- Pending contractors see preview/placeholder content
- List of eligible tenders with filtering options
- Detailed tender view with all requirements
- Application submission workflow
- Status tracking for submitted applications
- Application history with outcomes
- Withdrawal functionality with confirmation
- Clear messaging about approval requirement for tender access

#### 3.2 Contracts
**Feature Description:** Manage awarded contracts and project execution (approved contractors only).

#### User Stories:
- **US-029:** As an approved contractor, I want to see my awarded contracts so that I can track my projects
- **US-030:** As an approved contractor, I want to accept contract awards so that I can begin work
- **US-031:** As an approved contractor, I want to view contract details so that I understand my obligations
- **US-032:** As an approved contractor, I want to submit progress reports so that I can update on project status
- **US-033:** As an approved contractor, I want to request contract variations so that I can address changes
- **US-034:** As an approved contractor, I want to mark contracts as completed so that I can finalize projects
- **US-035:** As an approved contractor, I want to view contract milestones so that I can track progress

#### Acceptance Criteria:
- Contract access restricted to approved contractors only
- List of awarded contracts with status
- Contract acceptance workflow
- Progress reporting interface
- Variation request system
- Milestone tracking
- Completion submission process

---

### 4. Payment & Financials

#### 4.1 Platform Payments
**Feature Description:** Manage platform-related payments and fees (available to all contractors).

#### User Stories:
- **US-036:** As a contractor, I want to view platform fees so that I understand costs
- **US-037:** As a contractor, I want to make platform payments so that I can access services
- **US-038:** As a contractor, I want to view payment history so that I can track expenses
- **US-039:** As a contractor, I want to download payment receipts so that I can maintain records
- **US-040:** As a contractor, I want to set up payment methods so that I can easily make payments

#### Acceptance Criteria:
- Platform fee structure display
- Payment processing integration
- Payment history with search/filter
- Receipt generation and download
- Payment method management

#### 4.2 Contract Payments
**Feature Description:** Manage payments related to awarded contracts (approved contractors only).

#### User Stories:
- **US-041:** As an approved contractor, I want to view contract payment schedules so that I know when to expect payments
- **US-042:** As an approved contractor, I want to track payment status so that I can follow up on overdue payments
- **US-043:** As an approved contractor, I want to submit payment requests so that I can request disbursements
- **US-044:** As an approved contractor, I want to view payment history so that I can track all transactions
- **US-045:** As an approved contractor, I want to download payment certificates so that I can provide documentation

#### Acceptance Criteria:
- Contract payment access restricted to approved contractors only
- Payment schedule display
- Payment status tracking
- Payment request submission
- Transaction history
- Certificate generation

---

### 5. Reports
**Feature Description:** Contractor-specific reports and analytics (approved contractors only).

#### User Stories:
- **US-046:** As an approved contractor, I want to view my procurement activity report so that I can analyze my participation
- **US-047:** As an approved contractor, I want to view my contract performance report so that I can assess my delivery
- **US-048:** As an approved contractor, I want to view my financial report so that I can track my earnings
- **US-049:** As an approved contractor, I want to export reports so that I can share with stakeholders
- **US-050:** As an approved contractor, I want to filter reports by date range so that I can focus on specific periods

#### Acceptance Criteria:
- Report access restricted to approved contractors only
- Role-specific report generation
- Export functionality (PDF, Excel)
- Date range filtering
- Visual charts and graphs
- Performance metrics

---

### 6. Training
**Feature Description:** Access to contractor-specific training materials (available to all contractors).

#### User Stories:
- **US-051:** As a contractor, I want to view available training courses so that I can improve my skills
- **US-052:** As a contractor, I want to enroll in training courses so that I can participate in learning
- **US-053:** As a contractor, I want to track my training progress so that I can monitor completion
- **US-054:** As a contractor, I want to download training materials so that I can study offline
- **US-055:** As a contractor, I want to take assessments so that I can demonstrate knowledge

#### Acceptance Criteria:
- Training access available to all contractors regardless of approval status
- Course catalog with descriptions
- Enrollment system
- Progress tracking
- Material download
- Assessment system

---

### 7. Notifications
**Feature Description:** System notifications and alerts (available to all contractors).

#### User Stories:
- **US-056:** As a contractor, I want to receive notifications about my approval status so that I know when I can access full features
- **US-057:** As an approved contractor, I want to receive notifications about tender opportunities so that I don't miss deadlines
- **US-058:** As an approved contractor, I want to receive notifications about contract awards so that I can respond quickly
- **US-059:** As a contractor, I want to receive notifications about payments so that I can track financial transactions
- **US-060:** As a contractor, I want to manage notification preferences so that I control what I receive
- **US-061:** As a contractor, I want to mark notifications as read so that I can track what I've seen

#### Acceptance Criteria:
- Notification access available to all contractors
- Real-time notification delivery
- Approval status notifications for pending contractors
- Notification preferences management
- Read/unread status tracking
- Notification history
- Email/SMS integration

---

### 8. Settings
**Feature Description:** Account and system settings management (available to all contractors).

#### User Stories:
- **US-062:** As a contractor, I want to update my account settings so that I can customize my experience
- **US-063:** As a contractor, I want to manage my notification preferences so that I control communications
- **US-064:** As a contractor, I want to update my security settings so that I can protect my account
- **US-065:** As a contractor, I want to manage my privacy settings so that I control data sharing
- **US-066:** As a contractor, I want to export my data so that I can have a backup

#### Acceptance Criteria:
- Settings access available to all contractors
- Account settings management
- Notification preferences
- Security settings (2FA, password policies)
- Privacy controls
- Data export functionality

---

## Technical Implementation Plan

### Phase 1: Foundation (Week 1-2)
1. **Route Structure Setup**
   - Implement role-based routing (`/contractor/...`)
   - Create contractor layout component
   - Set up route guards for contractor access
   - Implement status-based access control

2. **Authentication & Authorization**
   - Update login flow to redirect to role-specific routes
   - Implement role-based access control with status checking
   - Create contractor user context with approval status
   - Add status-based feature restrictions

### Phase 2: Core Dashboard (Week 3-4)
1. **Contractor Dashboard**
   - Implement status-dependent dashboard layout
   - Create verification status components
   - Build summary cards and metrics (approved only)
   - Add approval progress tracking for pending contractors

2. **Profile Management**
   - Create profile form with status-based field restrictions
   - Implement BVN-verified field locking
   - Add document upload functionality
   - Add approval requirement messaging

### Phase 3: Procurement Features (Week 5-7)
1. **Tender Management**
   - Build tender listing and filtering (approved only)
   - Implement application workflow
   - Create status tracking system
   - Add preview content for pending contractors

2. **Contract Management**
   - Develop contract listing and details (approved only)
   - Implement progress reporting
   - Create milestone tracking

### Phase 4: Financial & Reports (Week 8-9)
1. **Payment Management**
   - Implement platform payment system (all contractors)
   - Create contract payment tracking (approved only)
   - Build payment history and receipts

2. **Reporting System**
   - Develop contractor-specific reports (approved only)
   - Implement export functionality
   - Create analytics dashboard

### Phase 5: Training & Notifications (Week 10-11)
1. **Training Platform**
   - Build course catalog (all contractors)
   - Implement enrollment system
   - Create progress tracking

2. **Notification System**
   - Implement real-time notifications (all contractors)
   - Create preference management
   - Build notification history
   - Add approval status notifications

### Phase 6: Settings & Polish (Week 12)
1. **Settings Management**
   - Create account settings interface (all contractors)
   - Implement security settings
   - Build data export functionality

2. **Testing & Optimization**
   - End-to-end testing with different approval statuses
   - Performance optimization
   - User acceptance testing

---

## Success Metrics

### Functional Metrics
- All user stories implemented and tested
- Role-based routing working correctly
- Status-based access control functioning properly
- Contractor-specific features fully functional
- Integration with existing systems complete

### User Experience Metrics
- Dashboard load time < 3 seconds
- Form submission success rate > 95%
- User satisfaction score > 4.0/5.0
- Training completion rate > 80%
- Approval process completion rate > 90%

### Technical Metrics
- Code coverage > 80%
- Zero critical security vulnerabilities
- Mobile responsiveness score > 90%
- Accessibility compliance (WCAG 2.1 AA)

---

## Risk Mitigation

### Technical Risks
- **Risk:** Complex status-based access control implementation
- **Mitigation:** Start with simple status checks and iterate

- **Risk:** Integration with existing authentication system
- **Mitigation:** Create abstraction layer for authentication and status

### User Experience Risks
- **Risk:** Confusion about approval status and timeline
- **Mitigation:** Clear messaging and progress indicators

- **Risk:** Performance issues with status-based content loading
- **Mitigation:** Implement efficient status checking and caching

### Timeline Risks
- **Risk:** Scope creep during implementation
- **Mitigation:** Strict adherence to user stories and acceptance criteria

- **Risk:** Integration delays with approval workflow
- **Mitigation:** Parallel development and mock APIs

---

## Next Steps

1. **Review and approve** this implementation plan
2. **Set up development environment** for contractor features
3. **Begin Phase 1** implementation
4. **Schedule regular reviews** to track progress
5. **Plan user testing** sessions for each phase

---

*Document Version: 2.0*  
*Last Updated: December 2024*  
*Prepared by: Development Team* 