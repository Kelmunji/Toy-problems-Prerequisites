function calculateNetSalary(basicSalary, benefits) {
    const taxRate = 0.3; // Example tax rate
    const nhifDeduction = 150; // Example NHIF deduction
    const nssfDeduction = 200; // Example NSSF deduction
    
    let grossSalary = basicSalary + benefits;
    let tax = grossSalary * taxRate;
    let netSalary = grossSalary - (tax + nhifDeduction + nssfDeduction);
    
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`Net Salary: ${netSalary}`);
}

// Example usage:
calculateNetSalary(50000, 10000);
