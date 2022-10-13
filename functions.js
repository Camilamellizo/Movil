const phone = new movil

function phoneblocking(){
    const passw =  document.getElementById("password");   
    const esconder =  document.getElementById("esconder");

    textbox.innerHTML = "Welcome"
    esconder.style.visibility = 'hidden';  

    
}

function phonesound(){
    const energy = document.getElementById("energy");
    const number1 =  document.getElementById("number1");
    const textbox =  document.getElementById("textbox");


    const status = phone.sound() 
    number1.innerHTML = phone.energy;

    if(status){
        textbox.innerHTML = "Modo Volumen Alto Activado"
    }else{
        textbox.innerHTML = "Modo silencio Activado"        
    }   
}

function phonevibration(){
    const energy = document.getElementById("energy");
    const number1 =  document.getElementById("number1");
    const textbox =  document.getElementById("textbox");


    const status = phone.vibrate() 
    number1.innerHTML = phone.energy;

    if(status){
        textbox.innerHTML = "Vibraciòn Activada"
    }else{
        textbox.innerHTML = "Modo silencio Activado"        
    }   
}

function phonemusic(){
    const energy = document.getElementById("energy");
    const number1 =  document.getElementById("number1");
    const textbox =  document.getElementById("textbox");


    const status = phone.melody() 
    number1.innerHTML = phone.energy;

    if(status){
        textbox.innerHTML = "Escuchando: el Barco, Karol G."
    }else{
        textbox.innerHTML = "musica pausada"        
    }   
}

function phonecall(){
    const energy = document.getElementById("energy");
    const number1 =  document.getElementById("number1");
    const textbox =  document.getElementById("textbox");


    const status = phone.call() 
    number1.innerHTML = phone.energy;

    if(status){
        textbox.innerHTML = "Llamada Entrante"
    }else{
        textbox.innerHTML = "Llamada Terminada"        
    }   
}

function phoneNewContact(){
    const energy = document.getElementById("energy");
    const number1 =  document.getElementById("number1");
    const textbox =  document.getElementById("textbox");


    const status = phone.addContact() 
    number1.innerHTML = phone.energy;

    if(status){
        textbox.innerHTML = "Crear Contacto nuevo"    
    }else{
        textbox.innerHTML = "Poca energia,concectar"
    }
}

function phoneOff(){
    const energy = document.getElementById("energy");
    const number1 =  document.getElementById("number1");
    const textbox =  document.getElementById("textbox");


    const status = phone.turnOff() 
    number1.innerHTML = phone.energy;

    if(status){
        textbox.innerHTML = "Apagando....."
    }  else{
        textbox.innerHTML = "desconecta el cargador."

    }
}


