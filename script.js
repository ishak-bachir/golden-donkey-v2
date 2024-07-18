document.addEventListener("DOMContentLoaded", function() {
    const userkey = document.getElementById("value");
    const submitbtn = document.getElementById("submitbtn");
    const result = document.getElementById("niggo");
    const ishakbtn = document.getElementById("ishakbtn");
    const touatbtn = document.getElementById("touatbtn");
    const mamounbtn = document.getElementById("mamounbtn");
    const is = document.getElementById("is");
    const to = document.getElementById("to");
    const ma = document.getElementById("ma");
    let ishak = 0;
    let touat = 0;
    let mamoun = 0;
    let islegal = false; 
    submitbtn.onclick = function() {
        const userkeyValue = userkey.value;
        if (userkeyValue === "ishak11" || userkeyValue === "touat11" || userkeyValue === "moiz11") {
            islegal = true;
        } else {
            islegal = false;
        }
        if(islegal === true){
          result.textContent = "nice! تقدر تفوطي "
        }
        else{
          result.textContent = "sorry, متقدرش تفوطي"
        }
    }
    ishakbtn.onclick = function(){
        if(islegal === true){
            if(isishak == false){
                ishak ++;
                isishak = true;
                is.textContent = ishak;
            }
            else{
                result.textContent = 'راك فوطيت من قبل'
            }
        }
        else{
            result.textContent = 'نعاود نفكرك بلي حطيت مفتاح غالط'
        }
    }
    touatbtn.onclick = function(){
        if(islegal === true){
            if(istouat == false){
                touat ++;
                istouat = true;
                to.textContent = touat;
            }
            else{
                result.textContent = 'راك فوطيت من قبل'
            }
        }
        else{
            result.textContent = 'نعاود نفكرك بلي حطيت مفتاح غالط'
        }
    }
    mamounbtn.onclick = function(){
        if(islegal === true){
            if(ismamoun == false){
                mamoun ++;
                ismamoun = true;
                ma.textContent = mamoun;
            }
            else{
                result.textContent = 'راك فوطيت من قبل'
            }
        }
        else{
            result.textContent = 'نعاود نفكرك بلي حطيت مفتاح غالط'
        }6
    }
});
//المفروض تقدر تصوت لشخص واحد فقط