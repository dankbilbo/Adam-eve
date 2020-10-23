class Apple{
    constructor(){
        this.weight = 10;
    }
    getWeight(){
        return this.weight;
    }
    isEmpty(){
        if(this.weight <= 0){
            return true;
        }else{
            return false;
        }
    }
    decrease(){
        this.weight -= 1;
    }
}