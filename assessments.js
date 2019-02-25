/*
  Task 1: Repeating Numbers
  Repeating Numbers Function
  Returns a string of the given
  values repeated the appropriate number of times
*/

var repeatNumbers = function(data) {
  // Put your solution here
 return data.map(([number, repeats]) => number.toString().repeat(repeats)).join(',');
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));


/*
  Task 2: Conditional Sums
  Function Conditional Sums
  Returns total based on the condition
  Condition 1 : sum of even numbers
  Condition 2 : sum of add numbers
*/

var conditionalSum = function(values, condition) {
  // Your code here
  let sum = 0;
  var isEven;

  //search an array for even or odd numbers
  for (var i = 0; i < values.length; i++) {
    isEven = (values[i]%2 == 0) ? true : false;

    if((isEven==true) && condition =="even"){
      let evenNumb= values[i];
      sum += evenNumb;
    } else if ((isEven!=true) && condition =="odd"){
      let oddNumb= values[i];
      sum += oddNumb;
    }
  }

  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

/*Task 3: Talking Calendar
parse the given YYYY/MM/DD string and produce a human readable date
*/

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

/*Adding st, nd, rd, or th to date*/
function ndth(date) {
  var th = "th"
  if (date > 3 && date < 21) return date+"th,";
  switch (date % 10) {
    case 1:  return date+"st,";
    case 2:  return date+"nd,";
    case 3:  return date+"rd,";
    default: return date+"th,";
  }
}

/* Function talkingCalendar parse the given string
   and produce a human readable date.*/

var talkingCalendar = function(date) {
  var array = new Array();
  array = date.split('/');

  var newDate = new Date(array);
  var yyyy = newDate.getFullYear();
  var mm = monthNames[(newDate.getMonth())];
  var dd = newDate.getDate();
  var fullDate = mm + " " + ndth(dd)+ yyyy;
  return fullDate;

};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

/*Task 4: Change Calculator
Function calculateChange should return an object which describes
the total amount of change for the cashier to give back.*/

var changeDue=0;

var calculateChange = function(total, cash) {

/*List of all bills*/
var money = {
     twentyDollar: 0,
     tenDollar: 0,
     fiveDollar: 0,
     twoDollar: 0,
     oneDollar: 0,
     quarter: 0,
     dime: 0,
     nickel: 0,
     penny: 0,
  };

var result = {};

changeDue = cash - total;

if(changeDue > 0 ){

var twentyDollar = Math.floor(changeDue/2000);
changeDue %= 2000;
money.twentyDollar = twentyDollar;

var tenDollar = Math.floor(changeDue/1000);
changeDue %= 1000;
money.tenDollar = tenDollar;

var fiveDollar = Math.floor(changeDue/500);
money.fiveDollar = fiveDollar;

var twoDollar = Math.floor(changeDue/200);
changeDue%=200;
money.twoDollar = twoDollar;

var oneDollar = Math.floor(changeDue/100);
changeDue %= 100;
money.oneDollar = oneDollar;

quarters = Math.floor(changeDue/ 25);
changeDue %= 25;
money.quarters = quarters;

var dimes = Math.floor((changeDue % 25) / 10);
changeDue %=10;
money.dimes = dimes;

var nickels = Math.floor(((changeDue % 25) % 10) / 5);
changeDue %= 5;
money.nicles = nickels;

var pennies = changeDue % 5;
money.pennies = pennies;

clean(money);

Object.keys(money).forEach(function(key) {
    result[key] =  money[key];
});
} else {
  result = "No change to return ";
}

return result;
}// end calculateChange

/*Remove bills = 0 */
function clean(obj) {
  for (var propName in obj) {
    if (obj[propName] == 0 ) {
      delete obj[propName];
    }
  }
}

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
