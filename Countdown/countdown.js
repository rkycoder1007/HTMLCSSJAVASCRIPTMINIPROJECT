const enddate="24 September 2022 8:01 AM";
document.getElementById("end-date").innerText=enddate;
function clock(){
const end=new Date(enddate);
const now=new Date();

let diff=end-now;
if(diff<0)
	return;
let sec=Math.floor(diff/1000);
const day=Math.floor(sec/3600/24);
const input=document.querySelectorAll("input");
input[0].value=day;
sec=sec-day*24*3600;
let hours=Math.floor(sec/3600);
input[1].value=hours;
sec=sec-hours*3600;
let minutes=Math.floor(sec/60);
input[2].value=minutes;
sec=sec-minutes*60;
input[3].value=sec;
}
clock();
setInterval(
()=>{
	clock()
},1000);