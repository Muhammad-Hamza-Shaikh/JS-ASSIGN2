var age=22;

alert("I am " + age + " years old");



alert("You have visited this site 14 times");

var birthYear=2002;
document.write("My birthyear is " + birthYear);
document.write("<br> Data type of my declared variable is number <br>");

var visiter= prompt("Enter your name:");
var product= prompt("Enter item:");
var quantity= prompt("Enter the number of product you want:");

document.write(  visiter +  " orderd " + quantity + product + " on xyzclothingstore");

//chap 4
var x, y, z;
var myVar, $name, _age, student1, first_name; 
document.write("<h1>Rules for naming JS variables</h1>");
document.write("<p>Variable names can only contain letters, numbers, dollar signs ($), and underscores (_). For example: $my_1stVariable</p>");
document.write("<p>Variables must begin with a letter, dollar sign ($), or underscore (_). For example: $name, _name, or name</p>");
document.write("<p>Variable names are case sensitive</p>");
document.write("<p>Variable names should not be JS reserved keywords</p>");

//chapter 5

var num1 = +prompt("ENTER THE FIRST NUMBER" );
var num2 = +prompt("ENTER THE SECOND NUMBER" );

var num3 = num1 + num2 ;
console.log(num3);

alert("Now SUBTRACT");

var num1 = +prompt("ENTER THE FIRST NUMBER" );
var num2 = +prompt("ENTER THE SECOND NUMBER" );

var num3 = num1 - num2 ;
console.log(num3);


alert("Now MULTIPY");

var num1 = +prompt("ENTER THE FIRST NUMBER" );
var num2 = +prompt("ENTER THE SECOND NUMBER" );

var num3 = num1 * num2 ;
console.log(num3);

alert("Now DIVIDE");

var num1 = +prompt("ENTER THE FIRST NUMBER" );
var num2 = +prompt("ENTER THE SECOND NUMBER" );

var num3 = num1 / num2 ;
console.log(num3);

alert("Now MODULUS");

var num1 = +prompt("ENTER THE FIRST NUMBER" );
var num2 = +prompt("ENTER THE SECOND NUMBER" );

var num3 = num1 % num2 ;
console.log(num3);


var first1;
console.log("Value after variable declaration is " + first1);
first1= 5;
console.log("Initial value: " + first1);
first1 ++;
console.log("Value after increment is " + first1);
first1= first1 + 7;
console.log("Value  " + first1);
first1--;
console.log("Value after decrement is " + first1);

first1 = first1 % 3;
console.log("The reminder is " + first1);


var num1 = +prompt("Ticket cost is 600pkr,How many tickets you need");
num1= num1 * 600;
console.log("Total cost to buy 5 tickets to a movie is " + num1+ "pkr");

var tab = +prompt("Enter the number you want the table of:")
console.log(tab + "*1=" +tab );
console.log(tab + "*2=" +tab *2 );
console.log(tab + "*3=" +tab *3 );
console.log(tab + "*4=" +tab *4 );
console.log(tab + "*5=" +tab *5 );
console.log(tab + "*6=" +tab *6 );
console.log(tab + "*7=" +tab *7 );
console.log(tab + "*8=" +tab *8 );
console.log(tab + "*9=" +tab *9 );
console.log(tab + "*10=" +tab *10 );

//temprature converter

var celsius= prompt("Enter your celsius temprature:");
var fahrenhiet;
fahrenhietoutput= celsius*9/5 + 32;
document.write(celsius +"C is " + fahrenhietoutput +"F <br>");
var fahrenhiet= prompt("Enter your fahrenheit temprature");
var celsiusoutput;
celsiusoutput= (fahrenhiet-32) *5/9;
document.write(fahrenhiet +"F is " + celsiusoutput +"C");

//shopping cart

var item1= +prompt("Enter Item 1 price: ");
var qItem1= +prompt("Enter Item Quantity: ");
var item2= +prompt("Enter Item 2 price: ");
var qItem2= +prompt("Enter Item Quantity: ");    
var shipping=  +prompt("Enter shipping charges: ");
var totalcost;
totalcost= (item1*qItem1) + (item2*qItem2) + shipping;
document.write("Total Cost of your order is " + totalcost);

//marksheet

var totalMarks= +prompt("Enter total marks: ");
var obtainedMarks= +prompt("Enter obtainded marks: ");
var perc;
perc= (obtainedMarks/totalMarks)*100;
document.write("Percentage: " + perc + "%");


//currency converter 

document.write("<h1>Currency in PKR</h1>");

var dollar= +prompt("Enter how many $ you want to convert?  $1=289pkr ");
var riyal= +prompt("Enter how many riyals you want to convert  1riyal=28pkr");
var pkr;
pkr= (dollar*289) + (riyal*28);
document.write("Total currency in PKR: " + pkr);

//airthemetic 

var numm= +prompt("Enter the number of your choice to perform operation on:");
var opr;
opr = ((numm + 5)*10)/2;
document.write("The answer is "+ opr);

//age calculator

var currentYear= +prompt("Enter Current Year:");
var birthYear= +prompt("Enter your Birth Year:");
var actualage;
actualage= currentYear-birthYear;
document.write("Your age is: "+actualage);

//Geometrizer
var radius= +prompt("Enter Radius of the Circle:");
var circum;
circum=2*3.142*radius;
document.write("The Circumference is "+ circum +"<br>");
var area;
area=3.142*radius*radius;
document.write("The area of a circle is "+area);

//lifetimesupply

document.write("<h1> The Lifetime Supply Calculator </h1>");
var snack= prompt("Enter your favorite snack:");
var cuurage= +prompt("Enter your current age");
var maxage= +prompt("Enter your max age");
var amountSnacks= +prompt("Enter estimated amount of snacks per day () as a number )");
var totalSnacks;
totalSnacks=(maxage-cuurage)*amountSnacks;
document.write("Favorite Snack: "+snack);
document.write("<br> Current Age: "+cuurage);
document.write("<br> Estimated Max age: "+maxage);
document.write("<br> Amount of Snack per day: "+amountSnacks);
document.write("<br> You will need "+totalSnacks + " to last you until the ripe old age of "+maxage );

//chap6

document.write("Result");
var result=prompt("Enter the value of a:");
document.write("<br> The value of a is: "+result);
document.write("<br> ----------------------------");

document.write("<br> The value of ++a is "+ ++result);
document.write("<br> Now the value of a is "+ result);
document.write("<br> The value of a++ is " + result++);

document.write("<br> Now the value of a is: "+result);

document.write("<br> The value of --a is " + --result);
document.write("<br> Now the value of a is: "+result);

document.write("<br> The value of a-- is "+ result--);
document.write("<br> Now the value of a is "+result);

//increment decrement

var a=2, b=1;
var result =--a - --b + ++b + b--;

document.write("On a the first step ( --a ), The value of a is 1 ");
document.write("<br> On a the second step ( --b ), The value of b is 0 ");
document.write("<br> On a the third step ( ++b ), The value of b is 1 ");
document.write("<br> On a the fourth step ( b-- ), The value of b is 1 ");
document.write("<br> Result is "+ result);

//greet the user

var greet= prompt("Enter your name please:");
document.write("<b>Hello! </b>" + greet );

//table 
var tabnum= +prompt("Enter the number you want the table of:");
if(tabnum== "") {
    for(let i=1; i<=10; i++ ){
        document.write("5*"+i +"="+ (5*i) + "<br>");
}
}
else {
    for(let i=1; i<=10; i++) {
        document.write(tabnum+"*"+i +"="+ (tabnum*i) + "<br>");
}
}

//user table 

var sub1= prompt("Enter the name of the subject 1:");
var sub2= prompt("Enter the name of the subject 2:");
var sub3= prompt("Enter the name of the subject 3:");
var tMarks= 100;
var oMarks1= +prompt("Enter Obtained marks for subject 1");
var oMarks2= +prompt("Enter Obtained marks for subject 2");
var oMarks3= +prompt("Enter Obtained marks for subject 3");
var perc1 = (oMarks1 / tMarks) * 100;
var perc2 = (oMarks2 / tMarks) * 100;
var perc3 = (oMarks3 / tMarks) * 100;


document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + sub1 + "</td><td>" + tMarks + "</td><td>" + oMarks1 + "</td><td>" + perc1.toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + sub2 + "</td><td>" + tMarks + "</td><td>" + oMarks2 + "</td><td>" + perc2.toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + sub3 + "</td><td>" + tMarks + "</td><td>" + oMarks3 + "</td><td>" + perc3.toFixed(2) + "%</td></tr>");
document.write("</table>");