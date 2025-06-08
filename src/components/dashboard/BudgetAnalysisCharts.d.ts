import React from 'react';
interface BudgetAnalysisChartsProps {
    regionalBudget: Array<{
        region: string;
        allocated: number;
        spent: number;
        utilization: number;
    }>;
    sectorBudget: Array<{
        sector: string;
        allocated: number;
        spent: number;
        utilization: number;
    }>;
    monthlyTrends: Array<{
        month: string;
        allocated: number;
        spent: number;
        utilization: number;
    }>;
}
declare const BudgetAnalysisCharts: React.FC<BudgetAnalysisChartsProps>;
export default BudgetAnalysisCharts;
