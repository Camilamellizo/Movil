const phone = new movil

function blocking(){
    const passw =  document.getElementById("password");
    alert("welcome");
}

function phonesound(){
    const energy = document.getElementById("energy");
    const number1 =  document.getElementById("number1");
    const textbox =  document.getElementById("textbox");


    const status = movil.sound() 
    number1.innerHTML = movil.energy;

    if(status){
        textbox.innerHTML = "Modo Volumen Alto Activado"
    }else{
        textbox.innerHTML = "Modo silencio Activado"        
    }

   
}

