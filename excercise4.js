
setInterval(() => {
    let timer=new Date()
    let current_date = timer.getFullYear()+"-"+(timer.getMonth()+1)+"-"+ timer.getDate();
	let current_time = timer.getHours()+":"+timer.getMinutes()+":"+ timer.getSeconds();
	let date_time = current_date+" "+current_time;
    document.getElementById("time").innerHTML=date_time
    
}, 1000);
