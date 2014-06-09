//little man computer

	//setup array to store box contents
	var box = new Array();
	//setup accumulator variable
	var acc;
	//setup inbox variable
	var inbox;
	//setup outbox variable
	var outbox;
	//set state to running
	var run=true;
	//setup divs to display box contents on html page
	//for each box
	for(var i = 0; i < 100; i++)
		{
			//add a labelled div for this box
			document.write('<strong>box '+i+' </strong>'+'<div id="'+i+'"></div>');
		}
	function updatescreen()
	{
		document.write('<br>');
		//display boxes on html page
		for(var i = 0; i < 100; i++)
			{
				//set the div[i] html to match the box[i] content 
				document.getElementById(i).innerHTML=box[i];
			}
	}
	//run
	while (run=true;) 
		{ 
		    //fetch the instruction from the mailbox with that number
			inst=box[i];
			//increment the Program Counter (so that it contains the mailbox number of the next instruction)
			i += 1;
			//1xx	ADD	ADD	Add the value stored in mailbox xx to whatever value is currently on the accumulator (calculator).
			if (inst==1ii) {document.write('ADD ' + box[ii] + ' to accumulator');acc += box[ii];}
			//2xx	SUB	SUBTRACT	Subtract the value stored in mailbox xx from whatever value is currently on the accumulator (calculator).
			if (inst==2ii) {document.write('SUB ' + box[ii] + ' from accumulator');acc -= box[ii];}
			//3xx	STA	STORE	Store the contents of the accumulator in mailbox xx (destructive).
			if (inst==3ii) {document.write('STA ' + acc + ' to box ' + ii);box[ii]=acc;}
			//5xx	LDA	LOAD	Load the value from mailbox xx (non-destructive) and enter it in the accumulator (destructive).
			if (inst==5ii) {document.write('LDA box ' + ii + '( ' + box[ii] + ' )');acc=box[ii];
			//6xx	BRA	BRANCH (unconditional)	Set the program counter to the given address (value xx). That is, value xx will be the next instruction executed.
			if (inst==6ii) {document.write('BRA');pc=ii;}
			//7xx	BRZ	BRANCH IF ZERO (conditional)	If the accumulator (calculator) contains the value 000, set the program counter to the value xx. Otherwise, do nothing.
			if (inst==7ii) {document.write('BRZ');if(acc=000){document.write(' pos');pc=ii;}else{document.write(' neg');}}
			//8xx	BRP	BRANCH IF POSITIVE (conditional)	If the accumulator (calculator) is 0 or positive, set the program counter to the value xx. Otherwise, do nothing.
			if (inst==8ii) {document.write('BRP');if(acc=000 || acc>0){document.write(' pos');pc=ii;}else{document.write(' neg');}}
			//901	INP	INPUT	Go to the INBOX, fetch the value from the user, and put it in the accumulator (calculator)
			if (inst==901) {document.write('INP acc = ' + inbox);acc=inbox;}
			//902	OUT	OUTPUT	Copy the value from the accumulator (calculator) to the OUTBOX.
			if (inst==902) {document.write('OUT outbox = ' + acc);outbox=acc;}
			//000	HLT/COB	HALT/COFFEE BREAK	Stop working.
			if (inst==000 || i=99) {document.write('HLT');run=false;}
			updatescreen();
		}
	updatescreen();