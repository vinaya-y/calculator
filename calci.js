function getHistory() {
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
function getOutput(){
document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){
	document.getElementById("output-value").innerText=(num);
}
else{
document.getElementById("output-value").innerText= getFormatedNumber(num);

}
}
function getFormatedNumber(num){
	var n = Number(num);
	var value =n.toLocaleString("en");
	return value;

}
printOutput("875890")
function reverseNumberFormat(num){
	var x = Number(num).replace(/,/g,'');
	return x;
}
alert(reverseNumberFormat());
