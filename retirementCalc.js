// Developer Name: Ben Joyce
// Project Name: Retirement Calculator
// Date: 12/10/2019



const calcFunction = function (percentOfSalary, averageReturnRate, averageSalary, years) {


    //Variables Declared
    const percentARR = averageReturnRate * 100;
    const pPOS = percentOfSalary * 100;
    const taxRate = 0.25;
    const lessTaxRate = 1 - taxRate;
    const salaryToSave = averageSalary * lessTaxRate * percentOfSalary;
    let total = 0;



    //function that calulates the balance at the end of one year

    const calcEndBalance = function (toSave, interest) {
        const interestMultiplier = (1 + interest);

        for (let i = 0; i < years; i++) {
            if (i > 0) {
                total *= interestMultiplier;
            }

            total += toSave;
            
        };

        return total;

    };

    // IIFE: set equal to a function being invoked (sets a variable that requires multiple operations)
    const endBalance = function() {
        let balance = calcEndBalance(salaryToSave, averageReturnRate);
        balance = Math.round(balance);
        balance = thousands_separators(balance);
        return balance;
    }();

    function thousands_separators(num) {
        var num_parts = num.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return num_parts.join(".");
    }

    console.log(`With an average salary of $${thousands_separators(averageSalary)} over the next ${years} years, you will have $${endBalance} if you invest ${pPOS}% of your post-tax income with an ${percentARR}% return.`)
};




calcFunction(.20, .08, 50000, 20);



