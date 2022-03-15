/*he array you are given represents the menu of breakfast options available at the hotel.
The Chef decided to replace one of the options with "Fluffy Pancakes".
Write a program to take the index as input, replace the element with that index with "Fluffy Pancakes", and output the new menu to the console as an array.*/

/* Actual array any changes 
['Cinnamon Doughnuts', 'Waffles', 'Granola', 'Chorizo Burrito', 'French Toast'];*/

/* Expected output: 
[
'Cinnamon Doughnuts',
'Waffles',
'Granola',
'Chorizo Burrito',
'Fluffy Pancakes'
]
*/


function main() {
    var breakfasts = ['Cinnamon Doughnuts', 'Waffles', 'Granola', 'Chorizo Burrito', 'French Toast'];
    var index = parseInt(4)
    
    var op = new OpArrays( breakfasts , index );

    //output the menu to the console

    op.changeValues( op.index );

    console.log( op.showArray( op.breakfasts ) );

    //replace the corresponding element by "Fluffy Pancakes"
    
}

class OpArrays {
    constructor(breakfasts,index) {

        this.breakfasts=breakfasts;
        this.index=index;

        this.changeValues=function(index) {

        this.breakfasts[index]="Fluffy Pancakes";

        };
        this.showArray=function(breakfasts) {

            return breakfasts;

        };

    }
}
