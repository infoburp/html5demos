
var massinput = document.getElementById("mass");
var heightinput = document.getElementById("height");
var massin = massinput.value;
var heightin = heightinput.value;
function calculatebmi()
	{
		document.write(massin)
		document.write(heightin)
		var BMI = massin / ((heightin)*(heightin));
		document.write(BMI)
		if (BMI<15) {document.write("Very severely underweight");}	
		if (BMI>=15 && BMI<16) {document.write("Severely underweight");}	
		if (BMI>=16 && BMI<18.5) {document.write("Underweight");}		
		if (BMI>=18.5 && BMI<25) {document.write("Normal (healthy weight)");}	
		if (BMI>=25 && BMI<30) {document.write("Overweight");}	
		if (BMI>=30 && BMI<35) {document.write("Obese Class I (Moderately obese)");}		
		if (BMI>=35 && BMI<40) {document.write("Obese Class II (Severely obese)");}	
		if (BMI>=40) {document.write("Obese Class III (Very severely obese)");}
	}