function myfunc() {
	var a = document.getElementById('reverse').value
	var b = "";
	var c = a;
	for (var i = c.length-1; i >= 0 ; i--) {
		b += c[i]; 
	}
  document.getElementById('result').innerHTML = b;
}
function funarm() {
	var x = document.getElementById('amstrong').value
	var y = x;
	var sum = 0;
	var z;
	while(0 < y){
        z = y % 10;	
        sum = sum + z*z*z;
        y = parseInt(y/10);
	}
	if(sum == x) {
		alert('This is amstrong number')
	}
	else
	{
		alert('Not a amstrong number')
	}
}
function funwhil () {
	var p = document.getElementById('dowils').value;
	var n = 1 ;
	var x, y;	
	do {		
		x = n;
		n =n + 2;
		document.getElementById('finalist').innerHTML += "the odd number is"+" " + x + "<br>";	
	}
	while(n <= p);
	var n = 2 ;
	do {		
	     y = n;
		n =n + 2;
		document.getElementById('finalists').innerHTML += "The Even Number is"+" " + y +"<br>";	
	}
	while(n <= p);	
	var i = 0;
	ans = 0;
	do {	
      ans += i;
      i++ 
	}
	while(i <= p){
		document.getElementById('lasts').innerHTML = "The Ave Number is"+" " +(ans/p);
	}
	document.getElementById('lasting').innerHTML = "The Max Number is "+" "+Math.max(p);
	document.getElementById('lastin').innerHTML = "The Min Number is "+" "+Math.min(p-(p-1));

	var xum = 0;
	var num =1;
	var h ;  
   do {
   	xum = 0;
   for ( var i = 1; i < num ; i++) {   
     if(num % i == 0) {  
        xum = xum + i ;       
   }
}   
   if (xum == num) {
   	h += "The Perfect Number"+" "+num +"<br>";
   }     
   num++
}
while (num <= p) {
        document.getElementById('lasti').innerHTML = h;
    }
}