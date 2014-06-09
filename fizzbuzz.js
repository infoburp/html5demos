//Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for 
//the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.
var temp = false;
document.write ("<ul>");
for (var i = 1; i < 101; i++)
	{
		document.write ("<li>");
		if (i % 3 == 0)
			{
				document.write("Fizz")
				temp = true;
			}
		if (i % 5 == 0)
			{
				document.write("Buzz");
				temp = true;
			}
		if (temp == false)
			{
				document.write (i);
			}		
		document.write ("</li>");
		temp = false;
	}
	document.write ("</ul>")
