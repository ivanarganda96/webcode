/*The program you are given takes the radius of a circle as 5.
Complete the given function to take the given radius as an argument and return the circumference of the circle.*/


function main() {
    var r = parseFloat(5)
    //the output
    var ci = new Circle( r , Math.PI );
    var longCircle = ci.calcCircle( 2 * parseInt(ci.showRadio( ci.r )) * parseFloat(ci.showPI( ci.pi ))  );

    console.log( longCircle.toFixed(2) );
    
}

//complete the function
class Circle{

    constructor ( r , pi ){

        this.pi = pi;
        this.r = r;
        this.pi = pi;
        this.showPI = showPI;
        this.showRadio = showRadio;
        this.calcCircle = calcCircle;
    }

}

function calcCircle( result ){
    return result;
}

function showPI( pi ){
    return pi;
}

function showRadio( r ){
    return r;
}
