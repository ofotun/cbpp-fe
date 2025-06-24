// Contractor User Profile
export const mockContractorUser = {
  id: 'contractor-001',
  firstName: 'Adebayo',
  surname: 'Okeowo',
  email: 'adebayo.okeowo@contractor.com',
  phone: '08012345678',
  userType: 'contractor',
  companyName: 'Okeowo Construction Ltd',
  registrationNumber: 'CON/2024/001',
  bvn: '12345678901',
  state: 'Lagos',
  lga: 'Ikeja',
  ward: 'Alausa',
  address: '123 Construction Avenue, Ikeja, Lagos',
  registrationDate: '2024-01-15',
  lastLogin: new Date().toISOString(),
};

// Verification Status
export const mockVerificationStatus = {
  bvn: {
    verified: true,
    verifiedDate: '2024-01-20',
    status: 'completed',
  },
  bankDetails: {
    verified: true,
    verifiedDate: '2024-01-22',
    status: 'completed',
    bankName: 'First Bank of Nigeria',
    accountNumber: '1234567890',
    accountName: 'Okeowo Construction Ltd',
  },
  ward: {
    verified: true,
    verifiedDate: '2024-01-25',
    status: 'completed',
  },
  cboMembership: {
    verified: true,
    verifiedDate: '2024-01-28',
    status: 'completed',
    cboName: 'Community Development Association of Lagos',
    cboId: 'cbo-001',
  },
  documents: {
    verified: false,
    status: 'pending',
    required: ['Tax Clearance Certificate', 'Company Registration', 'Insurance Certificate'],
    submitted: ['Tax Clearance Certificate'],
  },
  overallCompletion: 85,
};

// Active Contracts
export const mockActiveContracts = [
  {
    id: 'contract-001',
    title: 'Primary School Renovation',
    description: 'Renovation of community primary school facilities',
    value: 5000000,
    status: 'active',
    startDate: '2024-02-01',
    endDate: '2024-07-31',
    progress: 45,
    location: 'Lagos State',
    milestones: [
      { id: 'mil-001', title: 'Planning Phase', status: 'completed', dueDate: '2024-02-15' },
      { id: 'mil-002', title: 'Construction Phase', status: 'in-progress', dueDate: '2024-04-30' },
      { id: 'mil-003', title: 'Final Inspection', status: 'pending', dueDate: '2024-07-15' },
    ],
    payments: [
      { id: 'pay-001', amount: 1000000, status: 'paid', date: '2024-02-01' },
      { id: 'pay-002', amount: 1500000, status: 'pending', date: '2024-04-01' },
    ],
  },
  {
    id: 'contract-002',
    title: 'Community Health Center Construction',
    description: 'Construction of primary healthcare center',
    value: 7500000,
    status: 'active',
    startDate: '2024-03-01',
    endDate: '2024-09-30',
    progress: 25,
    location: 'Federal Capital Territory',
    milestones: [
      { id: 'mil-004', title: 'Site Survey', status: 'completed', dueDate: '2024-03-15' },
      { id: 'mil-005', title: 'Design Approval', status: 'in-progress', dueDate: '2024-04-15' },
      { id: 'mil-006', title: 'Construction', status: 'pending', dueDate: '2024-07-30' },
    ],
    payments: [
      { id: 'pay-003', amount: 1500000, status: 'paid', date: '2024-03-01' },
      { id: 'pay-004', amount: 2000000, status: 'pending', date: '2024-05-01' },
    ],
  },
];

// Pending Applications
export const mockPendingApplications = [
  {
    id: 'app-001',
    tenderId: 'tender-001',
    tenderTitle: 'School Furniture Procurement',
    submittedDate: '2024-03-15',
    status: 'under-review',
    value: 1500000,
    location: 'Lagos State',
  },
  {
    id: 'app-002',
    tenderId: 'tender-002',
    tenderTitle: 'Medical Equipment Supply',
    submittedDate: '2024-03-20',
    status: 'shortlisted',
    value: 3000000,
    location: 'Federal Capital Territory',
  },
];

// Available Tenders
export const mockAvailableTenders = [
  {
    id: 'tender-003',
    title: 'Road Construction Project',
    description: 'Construction of 2km community road',
    budget: 25000000,
    status: 'open',
    deadline: '2024-04-30',
    location: 'Oyo State',
    category: 'Infrastructure',
    requirements: [
      'Minimum 5 years experience',
      'Valid tax clearance',
      'Insurance certificate',
    ],
  },
  {
    id: 'tender-004',
    title: 'Water Supply System',
    description: 'Installation of borehole and water distribution system',
    budget: 8000000,
    status: 'open',
    deadline: '2024-05-15',
    location: 'Kano State',
    category: 'Infrastructure',
    requirements: [
      'Minimum 3 years experience',
      'Valid tax clearance',
      'Technical expertise in water systems',
    ],
  },
];

// Platform Payments
export const mockPlatformPayments = [
  {
    id: 'plat-pay-001',
    type: 'registration-fee',
    amount: 50000,
    status: 'paid',
    date: '2024-01-15',
    description: 'Contractor Registration Fee',
  },
  {
    id: 'plat-pay-002',
    type: 'annual-subscription',
    amount: 25000,
    status: 'pending',
    date: '2024-01-15',
    description: 'Annual Platform Subscription',
  },
];

// Contract Payments
export const mockContractPayments = [
  {
    id: 'cont-pay-001',
    contractId: 'contract-001',
    contractTitle: 'Primary School Renovation',
    amount: 1000000,
    status: 'paid',
    date: '2024-02-01',
    type: 'mobilization',
  },
  {
    id: 'cont-pay-002',
    contractId: 'contract-001',
    contractTitle: 'Primary School Renovation',
    amount: 1500000,
    status: 'pending',
    date: '2024-04-01',
    type: 'progress-payment',
  },
  {
    id: 'cont-pay-003',
    contractId: 'contract-002',
    contractTitle: 'Community Health Center Construction',
    amount: 1500000,
    status: 'paid',
    date: '2024-03-01',
    type: 'mobilization',
  },
];

// Recent Notifications
export const mockNotifications = [
  {
    id: 'notif-001',
    title: 'Contract Award Notification',
    message: 'Your bid for "Primary School Renovation" has been accepted.',
    type: 'success',
    date: '2024-02-01',
    read: false,
  },
  {
    id: 'notif-002',
    title: 'Payment Received',
    message: 'Payment of ₦1,000,000 has been processed for Contract #001.',
    type: 'info',
    date: '2024-02-01',
    read: false,
  },
  {
    id: 'notif-003',
    title: 'Document Verification Required',
    message: 'Please upload your Insurance Certificate to complete verification.',
    type: 'warning',
    date: '2024-01-30',
    read: true,
  },
  {
    id: 'notif-004',
    title: 'New Tender Available',
    message: 'New tender "Road Construction Project" is now available.',
    type: 'info',
    date: '2024-01-28',
    read: true,
  },
];

// Dashboard Metrics
export const mockDashboardMetrics = {
  totalContracts: 2,
  activeContracts: 2,
  completedContracts: 0,
  totalContractValue: 12500000,
  totalEarnings: 2500000,
  pendingPayments: 3500000,
  applicationsSubmitted: 2,
  applicationsPending: 1,
  applicationsApproved: 1,
  verificationCompletion: 85,
  profileCompletion: 90,
};

// Training Courses
export const mockTrainingCourses = [
  {
    id: 'course-001',
    title: 'Procurement Best Practices',
    description: 'Learn about procurement processes and best practices',
    duration: '2 hours',
    status: 'completed',
    completionDate: '2024-01-20',
    certificate: 'available',
  },
  {
    id: 'course-002',
    title: 'Contract Management',
    description: 'Understanding contract terms and management',
    duration: '3 hours',
    status: 'in-progress',
    progress: 60,
    certificate: 'pending',
  },
  {
    id: 'course-003',
    title: 'Financial Reporting',
    description: 'How to prepare and submit financial reports',
    duration: '1.5 hours',
    status: 'not-started',
    progress: 0,
    certificate: 'not-available',
  },
];

// Reports Data
export const mockReportsData = {
  procurementActivity: {
    totalBids: 15,
    successfulBids: 8,
    successRate: 53.3,
    totalValue: 45000000,
    averageBidValue: 3000000,
  },
  contractPerformance: {
    onTimeDelivery: 85,
    qualityRating: 4.2,
    clientSatisfaction: 4.5,
    averageCompletionTime: '95%',
  },
  financialReport: {
    totalRevenue: 25000000,
    totalExpenses: 18000000,
    netProfit: 7000000,
    profitMargin: 28,
    outstandingReceivables: 3500000,
  },
}; 