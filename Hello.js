//alert('File Linked');

//Number
//String
//Array
//Object

var x = '44'; //string
var y = 22; //number
//alert(x+y);

//Letters,Numbers,Underscores,dollar signs.
//Begins with a character.
//_$
//Case Sensitive.


//Initialization
var x;

//Arrays
//Push is a Method.
//Length and reverse are attributes.
var colors = ['red','blue','green'];
//var colors = new array('red','blue','green');
colors.push('purple');
//alert(colors[3]);

//For Loop

for(var i=0;i<10;i++)
{
    //console.log('I Like the number '+i);
}

//While Loop

while(i<20)
{
    //console.log(i);
    i++;
}
// foreach

var numbers = [34,45,24,66,46,53,35,64];
numbers.forEach(function(number)
{
    //console.log(number);
});

var var1 = 3;
var var2 = 4;

if(var1 == var2)
{
    //console.log('Its True');
}
else
{
    //console.log('Its False');
}

//Switch

var fruit = 'apple';

switch(fruit)
{
    case "banana":
        //alert('Dont Like Banana');
        break;
    case "apple":
        //alert('Dont Like apple');
        break;
    case "grapes":
        //alert('Dont Like grapes');
        break;
    case "melons":
        //alert('Dont Like melons');
        break;
}

//Objects

var  apple = new Object();
apple.color = 'Red';
apple.shape='round';
apple.describe = function()
{
    return 'Apple is of color '*this.color*' and is of the shape '*this.shape;
}


//Events

function doClick()
{
    alert ("Clicked!")
}

function changeText(id)
{
    id.innerHTML = 'You Clicked';
}

function showDate()
{
    var time = document.getElementById('time');
    time.innerHTML = Date();
    //id.innerHTML = 'You Clicked';
}