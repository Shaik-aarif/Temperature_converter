const inputs = document.querySelectorAll(".element input");
const c = document.querySelector("#Celsius");
const f = document.querySelector("#Fahrenheit");
const k = document.querySelector("#Kelvin");


inputs.forEach(input=>{
    input.addEventListener("input" , e =>{ 

        const unit = e.target.id;

        const v = parseInt(e.target.value);
         
        if(unit === "Celsius"){
            f.value = parseFloat((v*1.8)+32).toFixed(4)*1;
            k.value = parseFloat(v+273.15).toFixed(4)*1;
        }
        else if(unit === "Fahrenheit"){
            c.value = parseFloat((v-32)*5/9).toFixed(4)*1;
            k.value = parseFloat(((v-32)*5/9)+273.15).toFixed(4)*1;
        }
        else if(unit === "Kelvin"){
            c.value= parseFloat(v-273.15).toFixed(4)*1;
            f.value = parseFloat((v-273.15)*9/5 +32).toFixed(4)*1;

        }



    });
});