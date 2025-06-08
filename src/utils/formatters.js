"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatStatus = exports.formatAccountNumber = exports.formatDate = exports.formatCurrency = void 0;
const formatCurrency = (amount, currency) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(amount);
};
exports.formatCurrency = formatCurrency;
const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
};
exports.formatDate = formatDate;
const formatAccountNumber = (accountNumber) => {
    return accountNumber.replace(/(\d{4})(?=\d)/g, '$1 ');
};
exports.formatAccountNumber = formatAccountNumber;
const formatStatus = (status) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
};
exports.formatStatus = formatStatus;
