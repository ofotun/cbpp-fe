// Mock user data
export const mockUser = {
  id: 'admin',
  name: 'John Doe',
  email: 'john.doe@cbpp.gov.ng',
  role: 'Procurement Officer',
  organization: 'Bureau of Public Procurement',
  department: 'Procurement Department',
  lastLogin: new Date().toISOString(),
};

// Mock CBOs (Community-Based Organizations)
export const mockCBOs = [
  {
    id: 'cbo1',
    name: 'Community Development Association of Lagos',
    type: 'association',
    registrationNumber: 'CBO/2024/001',
    contactPerson: {
      name: 'John Adebayo',
      position: 'Chairman',
      email: 'john.adebayo@cdal.org',
      phone: '08012345678',
    },
    address: {
      street: '123 Community Road',
      city: 'Lagos',
      lga: 'Ikeja',
      state: 'Lagos',
    },
    status: 'active',
  },
  {
    id: 'cbo2',
    name: 'Rural Empowerment Initiative',
    type: 'ngo',
    registrationNumber: 'CBO/2024/002',
    contactPerson: {
      name: 'Sarah Okonkwo',
      position: 'Executive Director',
      email: 'sarah.okonkwo@rei.org',
      phone: '08023456789',
    },
    address: {
      street: '45 Empowerment Street',
      city: 'Abuja',
      lga: 'Abuja Municipal',
      state: 'Federal Capital Territory',
    },
    status: 'active',
  },
  {
    id: 'cbo3',
    name: 'Youth Development Cooperative',
    type: 'cooperative',
    registrationNumber: 'CBO/2024/003',
    contactPerson: {
      name: 'Michael Ojo',
      position: 'Coordinator',
      email: 'michael.ojo@ydc.org',
      phone: '08034567890',
    },
    address: {
      street: '78 Youth Avenue',
      city: 'Port Harcourt',
      lga: 'Port Harcourt',
      state: 'Rivers',
    },
    status: 'active',
  },
  {
    id: 'cbo4',
    name: 'Women Empowerment Network',
    type: 'association',
    registrationNumber: 'CBO/2024/004',
    contactPerson: {
      name: 'Grace Williams',
      position: 'President',
      email: 'grace.williams@wen.org',
      phone: '08045678901',
    },
    address: {
      street: '90 Empowerment Road',
      city: 'Ibadan',
      lga: 'Ibadan North',
      state: 'Oyo',
    },
    status: 'active',
  },
  {
    id: 'cbo5',
    name: 'Community Health Initiative',
    type: 'ngo',
    registrationNumber: 'CBO/2024/005',
    contactPerson: {
      name: 'Dr. James Okonkwo',
      position: 'Medical Director',
      email: 'james.okonkwo@chi.org',
      phone: '08056789012',
    },
    address: {
      street: '34 Health Street',
      city: 'Enugu',
      lga: 'Enugu North',
      state: 'Enugu',
    },
    status: 'active',
  },
];

// Mock Projects
export const mockProjects = {
  items: [
    {
      id: 'proj-001',
      title: 'Primary School Renovation',
      description: 'Renovation of community primary school facilities',
      budget: 5000000,
      status: 'In Progress',
      location: 'Lagos State',
      startDate: '2023-01-15',
      endDate: '2023-06-30',
      milestones: [
        { id: 'mil-001', title: 'Planning Phase', status: 'Completed', dueDate: '2023-02-15' },
        { id: 'mil-002', title: 'Construction Phase', status: 'In Progress', dueDate: '2023-04-30' },
        { id: 'mil-003', title: 'Final Inspection', status: 'Pending', dueDate: '2023-06-15' },
      ],
      assignedCBO: 'cbo-001',
      progress: 45,
      documents: [
        { id: 'doc-001', name: 'Project Proposal', type: 'PDF', uploaded: '2023-01-10' },
        { id: 'doc-002', name: 'Budget Breakdown', type: 'Excel', uploaded: '2023-01-12' },
      ],
    },
    {
      id: 'proj-002',
      title: 'Community Health Center',
      description: 'Construction of primary healthcare center',
      budget: 7500000,
      status: 'Planning',
      location: 'Federal Capital Territory',
      startDate: '2023-03-01',
      endDate: '2023-09-30',
      milestones: [
        { id: 'mil-004', title: 'Site Survey', status: 'Completed', dueDate: '2023-03-15' },
        { id: 'mil-005', title: 'Design Approval', status: 'In Progress', dueDate: '2023-04-15' },
        { id: 'mil-006', title: 'Construction', status: 'Pending', dueDate: '2023-07-30' },
      ],
      assignedCBO: 'cbo-002',
      progress: 25,
      documents: [
        { id: 'doc-003', name: 'Health Center Design', type: 'PDF', uploaded: '2023-02-20' },
        { id: 'doc-004', name: 'Medical Equipment List', type: 'Excel', uploaded: '2023-02-25' },
      ],
    },
  ],
};

// Mock Procurements
export const mockProcurements = {
  items: [
    {
      id: 'proc-001',
      title: 'School Furniture Procurement',
      description: 'Procurement of desks, chairs, and tables for primary school',
      budget: 1500000,
      status: 'Open',
      type: 'Goods',
      category: 'Furniture',
      deadline: '2023-04-15',
      documents: [
        { id: 'doc-005', name: 'Technical Specifications', type: 'PDF', uploaded: '2023-03-01' },
        { id: 'doc-006', name: 'Bidding Documents', type: 'PDF', uploaded: '2023-03-05' },
      ],
      bids: [
        {
          id: 'bid-001',
          vendor: 'Furniture Solutions Ltd',
          amount: 1450000,
          status: 'Submitted',
          submitted: '2023-03-20',
        },
        {
          id: 'bid-002',
          vendor: 'Classroom Equipment Co.',
          amount: 1480000,
          status: 'Submitted',
          submitted: '2023-03-22',
        },
      ],
    },
    {
      id: 'proc-002',
      title: 'Medical Equipment Supply',
      description: 'Procurement of medical equipment for health center',
      budget: 3000000,
      status: 'Evaluation',
      type: 'Goods',
      category: 'Medical Equipment',
      deadline: '2023-05-01',
      documents: [
        { id: 'doc-007', name: 'Equipment Specifications', type: 'PDF', uploaded: '2023-03-15' },
        { id: 'doc-008', name: 'Bidding Requirements', type: 'PDF', uploaded: '2023-03-20' },
      ],
      bids: [
        {
          id: 'bid-003',
          vendor: 'Medical Supplies Ltd',
          amount: 2950000,
          status: 'Submitted',
          submitted: '2023-04-01',
        },
        {
          id: 'bid-004',
          vendor: 'Healthcare Equipment Co.',
          amount: 2850000,
          status: 'Submitted',
          submitted: '2023-04-05',
        },
      ],
    },
  ],
};

// Mock system settings
export const mockSettings = {
  notifications: {
    email: true,
    sms: true,
    push: true,
  },
  security: {
    twoFactorAuth: true,
    sessionTimeout: 30,
    passwordPolicy: {
      minLength: 8,
      requireNumbers: true,
      requireSpecialChars: true,
    },
  },
  preferences: {
    language: 'en',
    timezone: 'Africa/Lagos',
    dateFormat: 'DD/MM/YYYY',
    theme: 'light',
  },
};

// Dashboard Mock Data
export const mockDashboardData = {
  presidency: {
    overview: {
      totalProjects: 1250,
      totalBudget: 62500000000, // ₦62.5 billion
      completedProjects: 450,
      inProgressProjects: 650,
      pendingProjects: 150,
      averageProjectValue: 50000000, // ₦50 million
    },
    performance: {
      completionRate: 85,
      budgetUtilization: 78,
      timelineAdherence: 82,
      qualityScore: 88,
    },
    regionalDistribution: [
      { region: 'North West', projects: 250, budget: 12500000000 },
      { region: 'North East', projects: 200, budget: 10000000000 },
      { region: 'North Central', projects: 180, budget: 9000000000 },
      { region: 'South West', projects: 220, budget: 11000000000 },
      { region: 'South East', projects: 200, budget: 10000000000 },
      { region: 'South South', projects: 200, budget: 10000000000 },
    ],
    sectorDistribution: [
      { sector: 'Education', projects: 300, budget: 15000000000 },
      { sector: 'Healthcare', projects: 250, budget: 12500000000 },
      { sector: 'Infrastructure', projects: 400, budget: 20000000000 },
      { sector: 'Agriculture', projects: 200, budget: 10000000000 },
      { sector: 'Social Services', projects: 100, budget: 5000000000 },
    ],
  },
  state: {
    overview: {
      totalProjects: 850,
      totalBudget: 42500000000, // ₦42.5 billion
      completedProjects: 300,
      inProgressProjects: 450,
      pendingProjects: 100,
      averageProjectValue: 50000000, // ₦50 million
    },
    performance: {
      completionRate: 80,
      budgetUtilization: 75,
      timelineAdherence: 78,
      qualityScore: 85,
    },
    stateDistribution: [
      { state: 'Lagos', projects: 120, budget: 6000000000 },
      { state: 'Kano', projects: 100, budget: 5000000000 },
      { state: 'Rivers', projects: 90, budget: 4500000000 },
      { state: 'Oyo', projects: 80, budget: 4000000000 },
      { state: 'Edo', projects: 70, budget: 3500000000 },
      { state: 'Others', projects: 390, budget: 19500000000 },
    ],
    sectorPerformance: [
      { sector: 'Education', completionRate: 85, budgetUtilization: 80 },
      { sector: 'Healthcare', completionRate: 82, budgetUtilization: 78 },
      { sector: 'Infrastructure', completionRate: 78, budgetUtilization: 75 },
      { sector: 'Agriculture', completionRate: 80, budgetUtilization: 77 },
    ],
  },
  localGovernment: {
    overview: {
      totalProjects: 2500,
      totalBudget: 125000000000, // ₦125 billion
      completedProjects: 900,
      inProgressProjects: 1300,
      pendingProjects: 300,
      averageProjectValue: 50000000, // ₦50 million
    },
    performance: {
      completionRate: 75,
      budgetUtilization: 72,
      timelineAdherence: 70,
      qualityScore: 80,
    },
    projectTypes: [
      { type: 'Community Infrastructure', count: 800, budget: 40000000000 },
      { type: 'Social Services', count: 700, budget: 35000000000 },
      { type: 'Economic Development', count: 500, budget: 25000000000 },
      { type: 'Environmental Projects', count: 500, budget: 25000000000 },
    ],
    cboPerformance: [
      { cbo: 'Lagos CDA', projects: 15, completionRate: 90, rating: 4.8 },
      { cbo: 'Abuja Youth Initiative', projects: 12, completionRate: 85, rating: 4.5 },
      { cbo: 'Kano Development Group', projects: 10, completionRate: 88, rating: 4.6 },
      { cbo: 'Port Harcourt CBO', projects: 8, completionRate: 82, rating: 4.3 },
    ],
  },
  regulators: {
    overview: {
      totalInspections: 1500,
      totalComplianceChecks: 2000,
      violationsDetected: 45,
      resolvedViolations: 40,
      pendingInvestigations: 15,
    },
    complianceMetrics: {
      overallCompliance: 92,
      financialCompliance: 90,
      proceduralCompliance: 93,
      documentationCompliance: 94,
    },
    inspectionResults: [
      { category: 'Financial Records', passed: 95, failed: 5 },
      { category: 'Project Documentation', passed: 93, failed: 7 },
      { category: 'Quality Standards', passed: 90, failed: 10 },
      { category: 'Timeline Adherence', passed: 88, failed: 12 },
    ],
    regulatoryActions: [
      { type: 'Warnings Issued', count: 25, resolved: 20 },
      { type: 'Fines Imposed', count: 15, collected: 12 },
      { type: 'Suspensions', count: 5, lifted: 3 },
      { type: 'Investigations', count: 10, completed: 8 },
    ],
  },
  budgetAnalysis: {
    overview: {
      totalAllocated: 62500000000,
      totalSpent: 48750000000,
      utilizationRate: 78,
      variance: 13750000000
    },
    regionalBudget: [
      { region: 'North West', allocated: 12500000000, spent: 9750000000, utilization: 78 },
      { region: 'North East', allocated: 10000000000, spent: 7800000000, utilization: 78 },
      { region: 'North Central', allocated: 9000000000, spent: 7020000000, utilization: 78 },
      { region: 'South West', allocated: 11000000000, spent: 8580000000, utilization: 78 },
      { region: 'South East', allocated: 10000000000, spent: 7800000000, utilization: 78 },
      { region: 'South South', allocated: 10000000000, spent: 7800000000, utilization: 78 }
    ],
    sectorBudget: [
      { sector: 'Education', allocated: 15000000000, spent: 11700000000, utilization: 78 },
      { sector: 'Healthcare', allocated: 12500000000, spent: 9750000000, utilization: 78 },
      { sector: 'Infrastructure', allocated: 20000000000, spent: 15600000000, utilization: 78 },
      { sector: 'Agriculture', allocated: 10000000000, spent: 7800000000, utilization: 78 },
      { sector: 'Social Services', allocated: 5000000000, spent: 3900000000, utilization: 78 }
    ],
    monthlyTrends: [
      { month: 'Jan', allocated: 5208333333, spent: 4062500000, utilization: 78 },
      { month: 'Feb', allocated: 5208333333, spent: 4062500000, utilization: 78 },
      { month: 'Mar', allocated: 5208333333, spent: 4062500000, utilization: 78 },
      { month: 'Apr', allocated: 5208333333, spent: 4062500000, utilization: 78 },
      { month: 'May', allocated: 5208333333, spent: 4062500000, utilization: 78 },
      { month: 'Jun', allocated: 5208333333, spent: 4062500000, utilization: 78 },
      { month: 'Jul', allocated: 5208333333, spent: 4062500000, utilization: 78 },
      { month: 'Aug', allocated: 5208333333, spent: 4062500000, utilization: 78 },
      { month: 'Sep', allocated: 5208333333, spent: 4062500000, utilization: 78 },
      { month: 'Oct', allocated: 5208333333, spent: 4062500000, utilization: 78 },
      { month: 'Nov', allocated: 5208333333, spent: 4062500000, utilization: 78 },
      { month: 'Dec', allocated: 5208333333, spent: 4062500000, utilization: 78 }
    ],
    regions: [
      {
        name: 'North West',
        overview: { totalAllocated: 12500000000, totalSpent: 9750000000, utilizationRate: 78, variance: 2750000000 },
        sectorBudget: [
          { sector: 'Education', allocated: 3000000000, spent: 2340000000, utilization: 78 },
          { sector: 'Healthcare', allocated: 2500000000, spent: 1950000000, utilization: 78 },
          { sector: 'Infrastructure', allocated: 4000000000, spent: 3120000000, utilization: 78 },
          { sector: 'Agriculture', allocated: 2000000000, spent: 1560000000, utilization: 78 },
        ],
        monthlyTrends: [
          { month: 'Jan', allocated: 1041666667, spent: 812500000, utilization: 78 },
          { month: 'Feb', allocated: 1041666667, spent: 812500000, utilization: 78 },
          { month: 'Mar', allocated: 1041666667, spent: 812500000, utilization: 78 },
          { month: 'Apr', allocated: 1041666667, spent: 812500000, utilization: 78 },
          { month: 'May', allocated: 1041666667, spent: 812500000, utilization: 78 },
          { month: 'Jun', allocated: 1041666667, spent: 812500000, utilization: 78 },
          { month: 'Jul', allocated: 1041666667, spent: 812500000, utilization: 78 },
          { month: 'Aug', allocated: 1041666667, spent: 812500000, utilization: 78 },
          { month: 'Sep', allocated: 1041666667, spent: 812500000, utilization: 78 },
          { month: 'Oct', allocated: 1041666667, spent: 812500000, utilization: 78 },
          { month: 'Nov', allocated: 1041666667, spent: 812500000, utilization: 78 },
          { month: 'Dec', allocated: 1041666667, spent: 812500000, utilization: 78 }
        ],
        states: [
          {
            name: 'Kano',
            overview: { totalAllocated: 5000000000, totalSpent: 3900000000, utilizationRate: 78, variance: 1100000000 },
            sectorBudget: [
              { sector: 'Education', allocated: 1200000000, spent: 936000000, utilization: 78 },
              { sector: 'Healthcare', allocated: 1000000000, spent: 780000000, utilization: 78 },
              { sector: 'Infrastructure', allocated: 1800000000, spent: 1404000000, utilization: 78 },
              { sector: 'Agriculture', allocated: 1000000000, spent: 780000000, utilization: 78 },
            ],
            monthlyTrends: [
              { month: 'Jan', allocated: 416666667, spent: 325000000, utilization: 78 },
              { month: 'Feb', allocated: 416666667, spent: 325000000, utilization: 78 },
              { month: 'Mar', allocated: 416666667, spent: 325000000, utilization: 78 },
              { month: 'Apr', allocated: 416666667, spent: 325000000, utilization: 78 },
              { month: 'May', allocated: 416666667, spent: 325000000, utilization: 78 },
              { month: 'Jun', allocated: 416666667, spent: 325000000, utilization: 78 },
              { month: 'Jul', allocated: 416666667, spent: 325000000, utilization: 78 },
              { month: 'Aug', allocated: 416666667, spent: 325000000, utilization: 78 },
              { month: 'Sep', allocated: 416666667, spent: 325000000, utilization: 78 },
              { month: 'Oct', allocated: 416666667, spent: 325000000, utilization: 78 },
              { month: 'Nov', allocated: 416666667, spent: 325000000, utilization: 78 },
              { month: 'Dec', allocated: 416666667, spent: 325000000, utilization: 78 }
            ],
            lgas: [
              {
                name: 'Kano Municipal',
                overview: { totalAllocated: 2000000000, totalSpent: 1560000000, utilizationRate: 78, variance: 440000000 },
                sectorBudget: [
                  { sector: 'Education', allocated: 500000000, spent: 390000000, utilization: 78 },
                  { sector: 'Healthcare', allocated: 400000000, spent: 312000000, utilization: 78 },
                  { sector: 'Infrastructure', allocated: 700000000, spent: 546000000, utilization: 78 },
                  { sector: 'Agriculture', allocated: 400000000, spent: 312000000, utilization: 78 },
                ],
                monthlyTrends: [
                  { month: 'Jan', allocated: 166666667, spent: 130000000, utilization: 78 },
                  { month: 'Feb', allocated: 166666667, spent: 130000000, utilization: 78 },
                  { month: 'Mar', allocated: 166666667, spent: 130000000, utilization: 78 },
                  { month: 'Apr', allocated: 166666667, spent: 130000000, utilization: 78 },
                  { month: 'May', allocated: 166666667, spent: 130000000, utilization: 78 },
                  { month: 'Jun', allocated: 166666667, spent: 130000000, utilization: 78 },
                  { month: 'Jul', allocated: 166666667, spent: 130000000, utilization: 78 },
                  { month: 'Aug', allocated: 166666667, spent: 130000000, utilization: 78 },
                  { month: 'Sep', allocated: 166666667, spent: 130000000, utilization: 78 },
                  { month: 'Oct', allocated: 166666667, spent: 130000000, utilization: 78 },
                  { month: 'Nov', allocated: 166666667, spent: 130000000, utilization: 78 },
                  { month: 'Dec', allocated: 166666667, spent: 130000000, utilization: 78 }
                ]
              },
              {
                name: 'Nasarawa',
                overview: { totalAllocated: 1000000000, totalSpent: 780000000, utilizationRate: 78, variance: 220000000 },
                sectorBudget: [
                  { sector: 'Education', allocated: 250000000, spent: 195000000, utilization: 78 },
                  { sector: 'Healthcare', allocated: 200000000, spent: 156000000, utilization: 78 },
                  { sector: 'Infrastructure', allocated: 350000000, spent: 273000000, utilization: 78 },
                  { sector: 'Agriculture', allocated: 200000000, spent: 156000000, utilization: 78 },
                ],
                monthlyTrends: [
                  { month: 'Jan', allocated: 83333333, spent: 65000000, utilization: 78 },
                  { month: 'Feb', allocated: 83333333, spent: 65000000, utilization: 78 },
                  { month: 'Mar', allocated: 83333333, spent: 65000000, utilization: 78 },
                  { month: 'Apr', allocated: 83333333, spent: 65000000, utilization: 78 },
                  { month: 'May', allocated: 83333333, spent: 65000000, utilization: 78 },
                  { month: 'Jun', allocated: 83333333, spent: 65000000, utilization: 78 },
                  { month: 'Jul', allocated: 83333333, spent: 65000000, utilization: 78 },
                  { month: 'Aug', allocated: 83333333, spent: 65000000, utilization: 78 },
                  { month: 'Sep', allocated: 83333333, spent: 65000000, utilization: 78 },
                  { month: 'Oct', allocated: 83333333, spent: 65000000, utilization: 78 },
                  { month: 'Nov', allocated: 83333333, spent: 65000000, utilization: 78 },
                  { month: 'Dec', allocated: 83333333, spent: 65000000, utilization: 78 }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'North East',
        overview: { totalAllocated: 10000000000, totalSpent: 8000000000, utilizationRate: 80, variance: 2000000000 },
        sectorBudget: [
          { sector: 'Education', allocated: 2500000000, spent: 2000000000, utilization: 80 },
          { sector: 'Healthcare', allocated: 2000000000, spent: 1600000000, utilization: 80 },
          { sector: 'Infrastructure', allocated: 3500000000, spent: 2800000000, utilization: 80 },
          { sector: 'Agriculture', allocated: 2000000000, spent: 1600000000, utilization: 80 },
        ],
        monthlyTrends: [
          { month: 'Jan', allocated: 833333333, spent: 666666667, utilization: 80 },
          { month: 'Feb', allocated: 833333333, spent: 666666667, utilization: 80 },
          { month: 'Mar', allocated: 833333333, spent: 666666667, utilization: 80 },
          { month: 'Apr', allocated: 833333333, spent: 666666667, utilization: 80 },
          { month: 'May', allocated: 833333333, spent: 666666667, utilization: 80 },
          { month: 'Jun', allocated: 833333333, spent: 666666667, utilization: 80 },
          { month: 'Jul', allocated: 833333333, spent: 666666667, utilization: 80 },
          { month: 'Aug', allocated: 833333333, spent: 666666667, utilization: 80 },
          { month: 'Sep', allocated: 833333333, spent: 666666667, utilization: 80 },
          { month: 'Oct', allocated: 833333333, spent: 666666667, utilization: 80 },
          { month: 'Nov', allocated: 833333333, spent: 666666667, utilization: 80 },
          { month: 'Dec', allocated: 833333333, spent: 666666667, utilization: 80 }
        ],
        states: [
          {
            name: 'Borno',
            overview: { totalAllocated: 4000000000, totalSpent: 3200000000, utilizationRate: 80, variance: 800000000 },
            sectorBudget: [
              { sector: 'Education', allocated: 1000000000, spent: 800000000, utilization: 80 },
              { sector: 'Healthcare', allocated: 800000000, spent: 640000000, utilization: 80 },
              { sector: 'Infrastructure', allocated: 1500000000, spent: 1200000000, utilization: 80 },
              { sector: 'Agriculture', allocated: 700000000, spent: 560000000, utilization: 80 },
            ],
            monthlyTrends: [
              { month: 'Jan', allocated: 333333333, spent: 266666667, utilization: 80 },
              { month: 'Feb', allocated: 333333333, spent: 266666667, utilization: 80 },
              { month: 'Mar', allocated: 333333333, spent: 266666667, utilization: 80 },
              { month: 'Apr', allocated: 333333333, spent: 266666667, utilization: 80 },
              { month: 'May', allocated: 333333333, spent: 266666667, utilization: 80 },
              { month: 'Jun', allocated: 333333333, spent: 266666667, utilization: 80 },
              { month: 'Jul', allocated: 333333333, spent: 266666667, utilization: 80 },
              { month: 'Aug', allocated: 333333333, spent: 266666667, utilization: 80 },
              { month: 'Sep', allocated: 333333333, spent: 266666667, utilization: 80 },
              { month: 'Oct', allocated: 333333333, spent: 266666667, utilization: 80 },
              { month: 'Nov', allocated: 333333333, spent: 266666667, utilization: 80 },
              { month: 'Dec', allocated: 333333333, spent: 266666667, utilization: 80 }
            ],
            lgas: [
              {
                name: 'Maiduguri',
                overview: { totalAllocated: 2000000000, totalSpent: 1600000000, utilizationRate: 80, variance: 400000000 },
                sectorBudget: [
                  { sector: 'Education', allocated: 500000000, spent: 400000000, utilization: 80 },
                  { sector: 'Healthcare', allocated: 400000000, spent: 320000000, utilization: 80 },
                  { sector: 'Infrastructure', allocated: 800000000, spent: 640000000, utilization: 80 },
                  { sector: 'Agriculture', allocated: 300000000, spent: 240000000, utilization: 80 },
                ],
                monthlyTrends: [
                  { month: 'Jan', allocated: 166666667, spent: 133333333, utilization: 80 },
                  { month: 'Feb', allocated: 166666667, spent: 133333333, utilization: 80 },
                  { month: 'Mar', allocated: 166666667, spent: 133333333, utilization: 80 },
                  { month: 'Apr', allocated: 166666667, spent: 133333333, utilization: 80 },
                  { month: 'May', allocated: 166666667, spent: 133333333, utilization: 80 },
                  { month: 'Jun', allocated: 166666667, spent: 133333333, utilization: 80 },
                  { month: 'Jul', allocated: 166666667, spent: 133333333, utilization: 80 },
                  { month: 'Aug', allocated: 166666667, spent: 133333333, utilization: 80 },
                  { month: 'Sep', allocated: 166666667, spent: 133333333, utilization: 80 },
                  { month: 'Oct', allocated: 166666667, spent: 133333333, utilization: 80 },
                  { month: 'Nov', allocated: 166666667, spent: 133333333, utilization: 80 },
                  { month: 'Dec', allocated: 166666667, spent: 133333333, utilization: 80 }
                ]
              },
              {
                name: 'Biu',
                overview: { totalAllocated: 1000000000, totalSpent: 800000000, utilizationRate: 80, variance: 200000000 },
                sectorBudget: [
                  { sector: 'Education', allocated: 250000000, spent: 200000000, utilization: 80 },
                  { sector: 'Healthcare', allocated: 200000000, spent: 160000000, utilization: 80 },
                  { sector: 'Infrastructure', allocated: 400000000, spent: 320000000, utilization: 80 },
                  { sector: 'Agriculture', allocated: 150000000, spent: 120000000, utilization: 80 },
                ],
                monthlyTrends: [
                  { month: 'Jan', allocated: 83333333, spent: 66666667, utilization: 80 },
                  { month: 'Feb', allocated: 83333333, spent: 66666667, utilization: 80 },
                  { month: 'Mar', allocated: 83333333, spent: 66666667, utilization: 80 },
                  { month: 'Apr', allocated: 83333333, spent: 66666667, utilization: 80 },
                  { month: 'May', allocated: 83333333, spent: 66666667, utilization: 80 },
                  { month: 'Jun', allocated: 83333333, spent: 66666667, utilization: 80 },
                  { month: 'Jul', allocated: 83333333, spent: 66666667, utilization: 80 },
                  { month: 'Aug', allocated: 83333333, spent: 66666667, utilization: 80 },
                  { month: 'Sep', allocated: 83333333, spent: 66666667, utilization: 80 },
                  { month: 'Oct', allocated: 83333333, spent: 66666667, utilization: 80 },
                  { month: 'Nov', allocated: 83333333, spent: 66666667, utilization: 80 },
                  { month: 'Dec', allocated: 83333333, spent: 66666667, utilization: 80 }
                ]
              }
            ]
          },
          {
            name: 'Adamawa',
            overview: { totalAllocated: 3000000000, totalSpent: 2400000000, utilizationRate: 80, variance: 600000000 },
            sectorBudget: [
              { sector: 'Education', allocated: 800000000, spent: 640000000, utilization: 80 },
              { sector: 'Healthcare', allocated: 600000000, spent: 480000000, utilization: 80 },
              { sector: 'Infrastructure', allocated: 1200000000, spent: 960000000, utilization: 80 },
              { sector: 'Agriculture', allocated: 400000000, spent: 320000000, utilization: 80 },
            ],
            monthlyTrends: [
              { month: 'Jan', allocated: 250000000, spent: 200000000, utilization: 80 },
              { month: 'Feb', allocated: 250000000, spent: 200000000, utilization: 80 },
              { month: 'Mar', allocated: 250000000, spent: 200000000, utilization: 80 },
              { month: 'Apr', allocated: 250000000, spent: 200000000, utilization: 80 },
              { month: 'May', allocated: 250000000, spent: 200000000, utilization: 80 },
              { month: 'Jun', allocated: 250000000, spent: 200000000, utilization: 80 },
              { month: 'Jul', allocated: 250000000, spent: 200000000, utilization: 80 },
              { month: 'Aug', allocated: 250000000, spent: 200000000, utilization: 80 },
              { month: 'Sep', allocated: 250000000, spent: 200000000, utilization: 80 },
              { month: 'Oct', allocated: 250000000, spent: 200000000, utilization: 80 },
              { month: 'Nov', allocated: 250000000, spent: 200000000, utilization: 80 },
              { month: 'Dec', allocated: 250000000, spent: 200000000, utilization: 80 }
            ],
            lgas: [
              {
                name: 'Yola North',
                overview: { totalAllocated: 1500000000, totalSpent: 1200000000, utilizationRate: 80, variance: 300000000 },
                sectorBudget: [
                  { sector: 'Education', allocated: 400000000, spent: 320000000, utilization: 80 },
                  { sector: 'Healthcare', allocated: 300000000, spent: 240000000, utilization: 80 },
                  { sector: 'Infrastructure', allocated: 600000000, spent: 480000000, utilization: 80 },
                  { sector: 'Agriculture', allocated: 200000000, spent: 160000000, utilization: 80 },
                ],
                monthlyTrends: [
                  { month: 'Jan', allocated: 125000000, spent: 100000000, utilization: 80 },
                  { month: 'Feb', allocated: 125000000, spent: 100000000, utilization: 80 },
                  { month: 'Mar', allocated: 125000000, spent: 100000000, utilization: 80 },
                  { month: 'Apr', allocated: 125000000, spent: 100000000, utilization: 80 },
                  { month: 'May', allocated: 125000000, spent: 100000000, utilization: 80 },
                  { month: 'Jun', allocated: 125000000, spent: 100000000, utilization: 80 },
                  { month: 'Jul', allocated: 125000000, spent: 100000000, utilization: 80 },
                  { month: 'Aug', allocated: 125000000, spent: 100000000, utilization: 80 },
                  { month: 'Sep', allocated: 125000000, spent: 100000000, utilization: 80 },
                  { month: 'Oct', allocated: 125000000, spent: 100000000, utilization: 80 },
                  { month: 'Nov', allocated: 125000000, spent: 100000000, utilization: 80 },
                  { month: 'Dec', allocated: 125000000, spent: 100000000, utilization: 80 }
                ]
              },
              {
                name: 'Mubi',
                overview: { totalAllocated: 1000000000, totalSpent: 800000000, utilizationRate: 80, variance: 200000000 },
                sectorBudget: [
                  { sector: 'Education', allocated: 200000000, spent: 160000000, utilization: 80 },
                  { sector: 'Healthcare', allocated: 200000000, spent: 160000000, utilization: 80 },
                  { sector: 'Infrastructure', allocated: 400000000, spent: 320000000, utilization: 80 },
                  { sector: 'Agriculture', allocated: 200000000, spent: 160000000, utilization: 80 },
                ],
                monthlyTrends: [
                  { month: 'Jan', allocated: 83333333, spent: 66666667, utilization: 80 },
                  { month: 'Feb', allocated: 83333333, spent: 66666667, utilization: 80 },
                  { month: 'Mar', allocated: 83333333, spent: 66666667, utilization: 80 },
                  { month: 'Apr', allocated: 83333333, spent: 66666667, utilization: 80 },
                  { month: 'May', allocated: 83333333, spent: 66666667, utilization: 80 },
                  { month: 'Jun', allocated: 83333333, spent: 66666667, utilization: 80 },
                  { month: 'Jul', allocated: 83333333, spent: 66666667, utilization: 80 },
                  { month: 'Aug', allocated: 83333333, spent: 66666667, utilization: 80 },
                  { month: 'Sep', allocated: 83333333, spent: 66666667, utilization: 80 },
                  { month: 'Oct', allocated: 83333333, spent: 66666667, utilization: 80 },
                  { month: 'Nov', allocated: 83333333, spent: 66666667, utilization: 80 },
                  { month: 'Dec', allocated: 83333333, spent: 66666667, utilization: 80 }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'South West',
        overview: { totalAllocated: 11000000000, totalSpent: 9000000000, utilizationRate: 82, variance: 2000000000 },
        sectorBudget: [
          { sector: 'Education', allocated: 3000000000, spent: 2460000000, utilization: 82 },
          { sector: 'Healthcare', allocated: 2500000000, spent: 2050000000, utilization: 82 },
          { sector: 'Infrastructure', allocated: 4000000000, spent: 3280000000, utilization: 82 },
          { sector: 'Agriculture', allocated: 1500000000, spent: 1230000000, utilization: 82 },
        ],
        monthlyTrends: [
          { month: 'Jan', allocated: 916666667, spent: 750000000, utilization: 82 },
          { month: 'Feb', allocated: 916666667, spent: 750000000, utilization: 82 },
          { month: 'Mar', allocated: 916666667, spent: 750000000, utilization: 82 },
          { month: 'Apr', allocated: 916666667, spent: 750000000, utilization: 82 },
          { month: 'May', allocated: 916666667, spent: 750000000, utilization: 82 },
          { month: 'Jun', allocated: 916666667, spent: 750000000, utilization: 82 },
          { month: 'Jul', allocated: 916666667, spent: 750000000, utilization: 82 },
          { month: 'Aug', allocated: 916666667, spent: 750000000, utilization: 82 },
          { month: 'Sep', allocated: 916666667, spent: 750000000, utilization: 82 },
          { month: 'Oct', allocated: 916666667, spent: 750000000, utilization: 82 },
          { month: 'Nov', allocated: 916666667, spent: 750000000, utilization: 82 },
          { month: 'Dec', allocated: 916666667, spent: 750000000, utilization: 82 }
        ],
        states: [
          {
            name: 'Lagos',
            overview: { totalAllocated: 5000000000, totalSpent: 4100000000, utilizationRate: 82, variance: 900000000 },
            sectorBudget: [
              { sector: 'Education', allocated: 1200000000, spent: 984000000, utilization: 82 },
              { sector: 'Healthcare', allocated: 1000000000, spent: 820000000, utilization: 82 },
              { sector: 'Infrastructure', allocated: 2000000000, spent: 1640000000, utilization: 82 },
              { sector: 'Agriculture', allocated: 800000000, spent: 656000000, utilization: 82 },
            ],
            monthlyTrends: [
              { month: 'Jan', allocated: 416666667, spent: 341666667, utilization: 82 },
              { month: 'Feb', allocated: 416666667, spent: 341666667, utilization: 82 },
              { month: 'Mar', allocated: 416666667, spent: 341666667, utilization: 82 },
              { month: 'Apr', allocated: 416666667, spent: 341666667, utilization: 82 },
              { month: 'May', allocated: 416666667, spent: 341666667, utilization: 82 },
              { month: 'Jun', allocated: 416666667, spent: 341666667, utilization: 82 },
              { month: 'Jul', allocated: 416666667, spent: 341666667, utilization: 82 },
              { month: 'Aug', allocated: 416666667, spent: 341666667, utilization: 82 },
              { month: 'Sep', allocated: 416666667, spent: 341666667, utilization: 82 },
              { month: 'Oct', allocated: 416666667, spent: 341666667, utilization: 82 },
              { month: 'Nov', allocated: 416666667, spent: 341666667, utilization: 82 },
              { month: 'Dec', allocated: 416666667, spent: 341666667, utilization: 82 }
            ],
            lgas: [
              {
                name: 'Ikeja',
                overview: { totalAllocated: 2000000000, totalSpent: 1640000000, utilizationRate: 82, variance: 360000000 },
                sectorBudget: [
                  { sector: 'Education', allocated: 500000000, spent: 410000000, utilization: 82 },
                  { sector: 'Healthcare', allocated: 400000000, spent: 328000000, utilization: 82 },
                  { sector: 'Infrastructure', allocated: 800000000, spent: 656000000, utilization: 82 },
                  { sector: 'Agriculture', allocated: 300000000, spent: 246000000, utilization: 82 },
                ],
                monthlyTrends: [
                  { month: 'Jan', allocated: 166666667, spent: 136666667, utilization: 82 },
                  { month: 'Feb', allocated: 166666667, spent: 136666667, utilization: 82 },
                  { month: 'Mar', allocated: 166666667, spent: 136666667, utilization: 82 },
                  { month: 'Apr', allocated: 166666667, spent: 136666667, utilization: 82 },
                  { month: 'May', allocated: 166666667, spent: 136666667, utilization: 82 },
                  { month: 'Jun', allocated: 166666667, spent: 136666667, utilization: 82 },
                  { month: 'Jul', allocated: 166666667, spent: 136666667, utilization: 82 },
                  { month: 'Aug', allocated: 166666667, spent: 136666667, utilization: 82 },
                  { month: 'Sep', allocated: 166666667, spent: 136666667, utilization: 82 },
                  { month: 'Oct', allocated: 166666667, spent: 136666667, utilization: 82 },
                  { month: 'Nov', allocated: 166666667, spent: 136666667, utilization: 82 },
                  { month: 'Dec', allocated: 166666667, spent: 136666667, utilization: 82 }
                ]
              },
              {
                name: 'Epe',
                overview: { totalAllocated: 1000000000, totalSpent: 820000000, utilizationRate: 82, variance: 180000000 },
                sectorBudget: [
                  { sector: 'Education', allocated: 200000000, spent: 164000000, utilization: 82 },
                  { sector: 'Healthcare', allocated: 200000000, spent: 164000000, utilization: 82 },
                  { sector: 'Infrastructure', allocated: 400000000, spent: 328000000, utilization: 82 },
                  { sector: 'Agriculture', allocated: 200000000, spent: 164000000, utilization: 82 },
                ],
                monthlyTrends: [
                  { month: 'Jan', allocated: 83333333, spent: 68200000, utilization: 82 },
                  { month: 'Feb', allocated: 83333333, spent: 68200000, utilization: 82 },
                  { month: 'Mar', allocated: 83333333, spent: 68200000, utilization: 82 },
                  { month: 'Apr', allocated: 83333333, spent: 68200000, utilization: 82 },
                  { month: 'May', allocated: 83333333, spent: 68200000, utilization: 82 },
                  { month: 'Jun', allocated: 83333333, spent: 68200000, utilization: 82 },
                  { month: 'Jul', allocated: 83333333, spent: 68200000, utilization: 82 },
                  { month: 'Aug', allocated: 83333333, spent: 68200000, utilization: 82 },
                  { month: 'Sep', allocated: 83333333, spent: 68200000, utilization: 82 },
                  { month: 'Oct', allocated: 83333333, spent: 68200000, utilization: 82 },
                  { month: 'Nov', allocated: 83333333, spent: 68200000, utilization: 82 },
                  { month: 'Dec', allocated: 83333333, spent: 68200000, utilization: 82 }
                ]
              }
            ]
          },
          {
            name: 'Oyo',
            overview: { totalAllocated: 3000000000, totalSpent: 2460000000, utilizationRate: 82, variance: 540000000 },
            sectorBudget: [
              { sector: 'Education', allocated: 800000000, spent: 656000000, utilization: 82 },
              { sector: 'Healthcare', allocated: 600000000, spent: 492000000, utilization: 82 },
              { sector: 'Infrastructure', allocated: 1200000000, spent: 984000000, utilization: 82 },
              { sector: 'Agriculture', allocated: 400000000, spent: 328000000, utilization: 82 },
            ],
            monthlyTrends: [
              { month: 'Jan', allocated: 250000000, spent: 205000000, utilization: 82 },
              { month: 'Feb', allocated: 250000000, spent: 205000000, utilization: 82 },
              { month: 'Mar', allocated: 250000000, spent: 205000000, utilization: 82 },
              { month: 'Apr', allocated: 250000000, spent: 205000000, utilization: 82 },
              { month: 'May', allocated: 250000000, spent: 205000000, utilization: 82 },
              { month: 'Jun', allocated: 250000000, spent: 205000000, utilization: 82 },
              { month: 'Jul', allocated: 250000000, spent: 205000000, utilization: 82 },
              { month: 'Aug', allocated: 250000000, spent: 205000000, utilization: 82 },
              { month: 'Sep', allocated: 250000000, spent: 205000000, utilization: 82 },
              { month: 'Oct', allocated: 250000000, spent: 205000000, utilization: 82 },
              { month: 'Nov', allocated: 250000000, spent: 205000000, utilization: 82 },
              { month: 'Dec', allocated: 250000000, spent: 205000000, utilization: 82 }
            ],
            lgas: [
              {
                name: 'Ibadan North',
                overview: { totalAllocated: 1500000000, totalSpent: 1230000000, utilizationRate: 82, variance: 270000000 },
                sectorBudget: [
                  { sector: 'Education', allocated: 400000000, spent: 328000000, utilization: 82 },
                  { sector: 'Healthcare', allocated: 300000000, spent: 246000000, utilization: 82 },
                  { sector: 'Infrastructure', allocated: 600000000, spent: 492000000, utilization: 82 },
                  { sector: 'Agriculture', allocated: 200000000, spent: 164000000, utilization: 82 },
                ],
                monthlyTrends: [
                  { month: 'Jan', allocated: 125000000, spent: 102500000, utilization: 82 },
                  { month: 'Feb', allocated: 125000000, spent: 102500000, utilization: 82 },
                  { month: 'Mar', allocated: 125000000, spent: 102500000, utilization: 82 },
                  { month: 'Apr', allocated: 125000000, spent: 102500000, utilization: 82 },
                  { month: 'May', allocated: 125000000, spent: 102500000, utilization: 82 },
                  { month: 'Jun', allocated: 125000000, spent: 102500000, utilization: 82 },
                  { month: 'Jul', allocated: 125000000, spent: 102500000, utilization: 82 },
                  { month: 'Aug', allocated: 125000000, spent: 102500000, utilization: 82 },
                  { month: 'Sep', allocated: 125000000, spent: 102500000, utilization: 82 },
                  { month: 'Oct', allocated: 125000000, spent: 102500000, utilization: 82 },
                  { month: 'Nov', allocated: 125000000, spent: 102500000, utilization: 82 },
                  { month: 'Dec', allocated: 125000000, spent: 102500000, utilization: 82 }
                ]
              },
              {
                name: 'Ogbomosho',
                overview: { totalAllocated: 1500000000, totalSpent: 1230000000, utilizationRate: 82, variance: 270000000 },
                sectorBudget: [
                  { sector: 'Education', allocated: 400000000, spent: 328000000, utilization: 82 },
                  { sector: 'Healthcare', allocated: 300000000, spent: 246000000, utilization: 82 },
                  { sector: 'Infrastructure', allocated: 600000000, spent: 492000000, utilization: 82 },
                  { sector: 'Agriculture', allocated: 200000000, spent: 164000000, utilization: 82 },
                ],
                monthlyTrends: [
                  { month: 'Jan', allocated: 125000000, spent: 102500000, utilization: 82 },
                  { month: 'Feb', allocated: 125000000, spent: 102500000, utilization: 82 },
                  { month: 'Mar', allocated: 125000000, spent: 102500000, utilization: 82 },
                  { month: 'Apr', allocated: 125000000, spent: 102500000, utilization: 82 },
                  { month: 'May', allocated: 125000000, spent: 102500000, utilization: 82 },
                  { month: 'Jun', allocated: 125000000, spent: 102500000, utilization: 82 },
                  { month: 'Jul', allocated: 125000000, spent: 102500000, utilization: 82 },
                  { month: 'Aug', allocated: 125000000, spent: 102500000, utilization: 82 },
                  { month: 'Sep', allocated: 125000000, spent: 102500000, utilization: 82 },
                  { month: 'Oct', allocated: 125000000, spent: 102500000, utilization: 82 },
                  { month: 'Nov', allocated: 125000000, spent: 102500000, utilization: 82 },
                  { month: 'Dec', allocated: 125000000, spent: 102500000, utilization: 82 }
                ]
              }
            ]
          }
        ]
      },
    ]
  }
};

// Monthly data for dashboard metrics
export const monthlyMetricsData = {
  totalProjects: {
    data: [120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  activeProjects: {
    data: [70, 75, 80, 82, 85, 87, 89, 90, 92, 93, 94, 95],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  completedProjects: {
    data: [50, 52, 54, 56, 58, 60, 61, 62, 63, 64, 65, 66],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  totalBudget: {
    data: [2.0, 2.1, 2.2, 2.3, 2.4, 2.45, 2.5, 2.55, 2.6, 2.65, 2.7, 2.75],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  totalLGAs: {
    data: [774, 774, 774, 774, 774, 774, 774, 774, 774, 774, 774, 774],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  totalCBOs: {
    data: [280, 285, 290, 295, 300, 305, 310, 315, 320, 325, 330, 335],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  totalContractors: {
    data: [1680, 1710, 1740, 1770, 1800, 1830, 1860, 1890, 1920, 1950, 1980, 2010],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  activeContractors: {
    data: [1260, 1283, 1305, 1328, 1350, 1373, 1395, 1418, 1440, 1463, 1485, 1508],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  }
};

// Mock contractor data
export const mockContractors = [
  {
    id: 'cont-001',
    firstName: 'Michael',
    lastName: 'Johnson',
    email: 'michael.johnson@builders.com',
    phone: '+2348012345678',
    bvn: '12345678901',
    nin: '98765432109',
    status: 'active',
    companyInfo: {
      name: 'Johnson Construction Ltd',
      registrationNumber: 'RC123456',
      type: 'limited',
      category: 'construction',
    },
    businessRegistration: {
      certificateNumber: 'BRC789012',
      issueDate: '2020-01-15',
      expiryDate: '2025-01-14',
      category: 'Class A',
    },
    financialInfo: {
      bankName: 'First Bank',
      accountNumber: '0123456789',
      accountName: 'Johnson Construction Ltd',
      annualTurnover: '50000000',
    },
    taxCompliance: {
      tin: '12345678-0001',
      taxClearance: 'TC2023001',
      complianceStatus: 'compliant',
    },
    documents: [
      {
        type: 'registration',
        url: '/documents/registration.pdf',
        uploadedAt: '2023-01-15',
        verified: true,
      },
      {
        type: 'tax_clearance',
        url: '/documents/tax_clearance.pdf',
        uploadedAt: '2023-01-15',
        verified: true,
      },
    ],
    location: {
      state: 'Lagos',
      lga: 'Ikeja',
      address: '123 Construction Avenue, Ikeja',
    },
    createdAt: '2023-01-15T10:00:00Z',
    updatedAt: '2023-01-15T10:00:00Z',
  },
  {
    id: 'cont-002',
    firstName: 'Sarah',
    lastName: 'Williams',
    email: 'sarah.williams@suppliers.com',
    phone: '+2348098765432',
    bvn: '23456789012',
    nin: '87654321098',
    status: 'pending',
    companyInfo: {
      name: 'Williams Supplies Co.',
      registrationNumber: 'RC234567',
      type: 'limited',
      category: 'supply',
    },
    businessRegistration: {
      certificateNumber: 'BRC890123',
      issueDate: '2021-03-20',
      expiryDate: '2026-03-19',
      category: 'Class B',
    },
    financialInfo: {
      bankName: 'Access Bank',
      accountNumber: '1234567890',
      accountName: 'Williams Supplies Co.',
      annualTurnover: '30000000',
    },
    taxCompliance: {
      tin: '23456789-0001',
      taxClearance: 'TC2023002',
      complianceStatus: 'pending',
    },
    documents: [
      {
        type: 'registration',
        url: '/documents/registration.pdf',
        uploadedAt: '2023-03-20',
        verified: false,
      },
    ],
    location: {
      state: 'Abuja',
      lga: 'Wuse',
      address: '456 Supply Street, Wuse',
    },
    createdAt: '2023-03-20T14:30:00Z',
    updatedAt: '2023-03-20T14:30:00Z',
  },
]; 