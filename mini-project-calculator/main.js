
    const display = document.getElementById("display");
    const btn = document.querySelectorAll("button");
    let output ="";
    const carspe = [ "+","=","-","*","/",]; 
    
function hitung(int){
    if(int == "=" && output != ""){
        output = eval(output.replace("%","/100"))
    } else if(int == "AC"){
        output = "";
    } else if(int == "DEL"){
        output = output.toString().slice(0,-1);
    } else {
        if(output == "" && carspe.includes(int))return;
        output += int;
    }
    // alert(output);
    display.value = output;
}

    btn.forEach((item)=>{
        item.addEventListener("click",(e)=>{
            hitung(e.target.value)
        })
    })
// console.log(btn)