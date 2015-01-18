/* the shuffle function, it takes an array. 
selects a random array element(i) as well 
as a card from the top of the stack(t) and 
flips their places within the array. */

var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var array2 = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven"]


var shuffle = function (array) {
  var m = array.length, t, i;

  while(m) {
    i = Math.floor(Math.random() * m--);

    // a = b = c = a
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

shuffle(array1);
shuffle(array2);