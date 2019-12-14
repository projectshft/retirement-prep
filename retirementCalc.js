// Developer Name: Ben Joyce
// Project Name: Retirement Calculator
// Date: 12/10/2019



const calcFunction = function(percentOfSalary, averageReturnRate, averageSalary, years) {


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

        for (let i = 0; i < years; i++ ) {
            if (i > 0) {
                total *= interestMultiplier;
            }

            total += toSave;
            console.log(total);
        };
    

        return total.toFixed(2);
        
    };

   const endBalance = calcEndBalance(salaryToSave, averageReturnRate);



    console.log(`With an average salary of $${averageSalary} over the next ${years} years, you will have $${endBalance} if you invest ${pPOS}% of your post-tax income with an ${percentARR}% return.`)
};

 


calcFunction(.20, .08, 50000, 20);



