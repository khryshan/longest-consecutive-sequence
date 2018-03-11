module.exports = function longestConsecutiveLength(array) {
  // your solution here


let compareNumeric = ( a, b ) => {
	return a-b;
};

let arr = array.sort(compareNumeric);

let bigArr = [];
let currentArr = [];
let num = 0;

arr.map( (elem, i) => {
  
  if( elem+1 == arr[i+1] ) {
  
    currentArr.push( arr[i] );
    
  } else {
    bigArr.push( currentArr.length + 1 );
    currentArr = [];
  }
} );

bigArr.forEach( (elem, i) => {
	if ( elem>num ) {
		num = elem;
	};
} );

return num;

}
