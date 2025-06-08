export declare const mockUser: {
    id: string;
    name: string;
    email: string;
    role: string;
    organization: string;
    department: string;
    lastLogin: string;
};
export declare const mockCBOs: {
    id: string;
    name: string;
    type: string;
    registrationNumber: string;
    contactPerson: {
        name: string;
        position: string;
        email: string;
        phone: string;
    };
    address: {
        street: string;
        city: string;
        lga: string;
        state: string;
    };
    status: string;
}[];
export declare const mockProjects: {
    items: {
        id: string;
        title: string;
        description: string;
        budget: number;
        status: string;
        location: string;
        startDate: string;
        endDate: string;
        milestones: {
            id: string;
            title: string;
            status: string;
            dueDate: string;
        }[];
        assignedCBO: string;
        progress: number;
        documents: {
            id: string;
            name: string;
            type: string;
            uploaded: string;
        }[];
    }[];
};
export declare const mockProcurements: {
    items: {
        id: string;
        title: string;
        description: string;
        budget: number;
        status: string;
        type: string;
        category: string;
        deadline: string;
        documents: {
            id: string;
            name: string;
            type: string;
            uploaded: string;
        }[];
        bids: {
            id: string;
            vendor: string;
            amount: number;
            status: string;
            submitted: string;
        }[];
    }[];
};
export declare const mockSettings: {
    notifications: {
        email: boolean;
        sms: boolean;
        push: boolean;
    };
    security: {
        twoFactorAuth: boolean;
        sessionTimeout: number;
        passwordPolicy: {
            minLength: number;
            requireNumbers: boolean;
            requireSpecialChars: boolean;
        };
    };
    preferences: {
        language: string;
        timezone: string;
        dateFormat: string;
        theme: string;
    };
};
export declare const mockDashboardData: {
    presidency: {
        overview: {
            totalProjects: number;
            totalBudget: number;
            completedProjects: number;
            inProgressProjects: number;
            pendingProjects: number;
            averageProjectValue: number;
        };
        performance: {
            completionRate: number;
            budgetUtilization: number;
            timelineAdherence: number;
            qualityScore: number;
        };
        regionalDistribution: {
            region: string;
            projects: number;
            budget: number;
        }[];
        sectorDistribution: {
            sector: string;
            projects: number;
            budget: number;
        }[];
    };
    state: {
        overview: {
            totalProjects: number;
            totalBudget: number;
            completedProjects: number;
            inProgressProjects: number;
            pendingProjects: number;
            averageProjectValue: number;
        };
        performance: {
            completionRate: number;
            budgetUtilization: number;
            timelineAdherence: number;
            qualityScore: number;
        };
        stateDistribution: {
            state: string;
            projects: number;
            budget: number;
        }[];
        sectorPerformance: {
            sector: string;
            completionRate: number;
            budgetUtilization: number;
        }[];
    };
    localGovernment: {
        overview: {
            totalProjects: number;
            totalBudget: number;
            completedProjects: number;
            inProgressProjects: number;
            pendingProjects: number;
            averageProjectValue: number;
        };
        performance: {
            completionRate: number;
            budgetUtilization: number;
            timelineAdherence: number;
            qualityScore: number;
        };
        projectTypes: {
            type: string;
            count: number;
            budget: number;
        }[];
        cboPerformance: {
            cbo: string;
            projects: number;
            completionRate: number;
            rating: number;
        }[];
    };
    regulators: {
        overview: {
            totalInspections: number;
            totalComplianceChecks: number;
            violationsDetected: number;
            resolvedViolations: number;
            pendingInvestigations: number;
        };
        complianceMetrics: {
            overallCompliance: number;
            financialCompliance: number;
            proceduralCompliance: number;
            documentationCompliance: number;
        };
        inspectionResults: {
            category: string;
            passed: number;
            failed: number;
        }[];
        regulatoryActions: ({
            type: string;
            count: number;
            resolved: number;
            collected?: undefined;
            lifted?: undefined;
            completed?: undefined;
        } | {
            type: string;
            count: number;
            collected: number;
            resolved?: undefined;
            lifted?: undefined;
            completed?: undefined;
        } | {
            type: string;
            count: number;
            lifted: number;
            resolved?: undefined;
            collected?: undefined;
            completed?: undefined;
        } | {
            type: string;
            count: number;
            completed: number;
            resolved?: undefined;
            collected?: undefined;
            lifted?: undefined;
        })[];
    };
    budgetAnalysis: {
        overview: {
            totalAllocated: number;
            totalSpent: number;
            utilizationRate: number;
            variance: number;
        };
        regionalBudget: {
            region: string;
            allocated: number;
            spent: number;
            utilization: number;
        }[];
        sectorBudget: {
            sector: string;
            allocated: number;
            spent: number;
            utilization: number;
        }[];
        monthlyTrends: {
            month: string;
            allocated: number;
            spent: number;
            utilization: number;
        }[];
        regions: {
            name: string;
            overview: {
                totalAllocated: number;
                totalSpent: number;
                utilizationRate: number;
                variance: number;
            };
            sectorBudget: {
                sector: string;
                allocated: number;
                spent: number;
                utilization: number;
            }[];
            monthlyTrends: {
                month: string;
                allocated: number;
                spent: number;
                utilization: number;
            }[];
            states: {
                name: string;
                overview: {
                    totalAllocated: number;
                    totalSpent: number;
                    utilizationRate: number;
                    variance: number;
                };
                sectorBudget: {
                    sector: string;
                    allocated: number;
                    spent: number;
                    utilization: number;
                }[];
                monthlyTrends: {
                    month: string;
                    allocated: number;
                    spent: number;
                    utilization: number;
                }[];
                lgas: {
                    name: string;
                    overview: {
                        totalAllocated: number;
                        totalSpent: number;
                        utilizationRate: number;
                        variance: number;
                    };
                    sectorBudget: {
                        sector: string;
                        allocated: number;
                        spent: number;
                        utilization: number;
                    }[];
                    monthlyTrends: {
                        month: string;
                        allocated: number;
                        spent: number;
                        utilization: number;
                    }[];
                }[];
            }[];
        }[];
    };
};
export declare const monthlyMetricsData: {
    totalProjects: {
        data: number[];
        labels: string[];
    };
    activeProjects: {
        data: number[];
        labels: string[];
    };
    completedProjects: {
        data: number[];
        labels: string[];
    };
    totalBudget: {
        data: number[];
        labels: string[];
    };
    totalLGAs: {
        data: number[];
        labels: string[];
    };
    totalCBOs: {
        data: number[];
        labels: string[];
    };
    totalContractors: {
        data: number[];
        labels: string[];
    };
    activeContractors: {
        data: number[];
        labels: string[];
    };
};
export declare const mockContractors: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    bvn: string;
    nin: string;
    status: string;
    companyInfo: {
        name: string;
        registrationNumber: string;
        type: string;
        category: string;
    };
    businessRegistration: {
        certificateNumber: string;
        issueDate: string;
        expiryDate: string;
        category: string;
    };
    financialInfo: {
        bankName: string;
        accountNumber: string;
        accountName: string;
        annualTurnover: string;
    };
    taxCompliance: {
        tin: string;
        taxClearance: string;
        complianceStatus: string;
    };
    documents: {
        type: string;
        url: string;
        uploadedAt: string;
        verified: boolean;
    }[];
    location: {
        state: string;
        lga: string;
        address: string;
    };
    createdAt: string;
    updatedAt: string;
}[];
