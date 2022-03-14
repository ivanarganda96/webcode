/*The Snail in the Well


The snail climbs up 7 feet each day and slips back 2 feet each night.
How many days will it take the snail to get out of a well with the given depth?

Sample Input:
31

Sample Output:
6*/

function main() {
    var depth = parseInt(readLine(), 10);
    //your code goes here

    var claimbs = 7 - 2;

    var days = depth / claimbs;

    console.log( days.toFixed(0) );
    
}
