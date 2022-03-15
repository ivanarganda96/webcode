/* The program you are given should calculate the annual income of a given loan.
The program takes the loan initial amount and the annual interest percentage as input, then creates the loan object.
Complete the function outside the constructor to calculate the annual income, then assign that value to the corresponding field, that you also create, of the constructor in order to execute the given output.

Sample Input
15000
20

Sample Output
3000

Explanation
The output represent the yearly income of the loan with a 15000 initial amount and 20% annual interest : 20/100*15000 = 3000.*/

function main() {
    //get the initial amount and the interest percentage
    var amount = parseInt(readLine(),10);
    var yearPercent = parseInt(readLine(),10);

    var pri = new Prices( amount , yearPercent );

    console.log(pri.changeAnnual( pri.amount , pri.yearPercent ));
    
}

function Prices( amount , yearPercent ){

    this.amount = amount;
    this.yearPercent = yearPercent;
    this.changeAnnual = function( amount , yearPercent ){
        return yearPercent/100*amount;
    };

}
