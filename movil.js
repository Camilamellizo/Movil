class movil{
constructor(){
    this.energy
}



sound(){
let status = false
    if (this.energy <= 100 && this.energy > 0) {
        this.energy -= 25 
        status = true    
    }
    return status
}

vibrate(){
    let status = false
        if (this.energy <= 100 && this.energy > 0) {
            this.energy -= 25 
            status = true    
        }
        return status
    }

melody(){
    let status = false
        if (this.energy <= 100 && this.energy > 0) {
            this.energy -= 25 
            status = true    
        }
        return status
    }

call(){
    let status = false
        if (this.energy <= 100 && this.energy > 0) {
            this.energy -= 25 
            status = true    
        }
        return status
    }

addContact(){
    let status = false
        if (this.energy <= 100 && this.energy > 0) {
            this.energy -= 25 
            status = true    
        }
        return status
    }

turnOff(){
    let status = false
    if (this.energy < 100 && this.energy >= 0) {
        this.energy += 50  
        status = true                    
    }
}            

}