class Human{
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    checkApple(apple){
        if(apple.isEmpty() == true){
            alert("out of apple");
            return true;
        }else{
            return false;
        }
    }
    eat(apple){
        if(apple.isEmpty() == true){
            return;
        }
        this.weight += 1;
        apple.decrease();
    }
    say(string){
        console.log(string);
    }
    getGender(){
        return this.gender;
    }
    getName(){
        return this.name;
    }
    getWeight(){
        return this.weight;
    }
    setGender(gender){
        this.gender = gender;
    }
    setName(name){
        this.name = name;
    }
    setWeight(weight){
        this.weight = weight;
    }


}
let human = new Human();
let apple = new Apple();
human.setGender("male");
human.setWeight(70);
human.setName("Adam");
human.say("Hello there, general Eva");
function eatA(){
    human.eat(apple);
    human.checkApple(apple);
    document.getElementById("appleWeight").innerHTML = `Apple weight left : ${apple.weight}`;
}
function getInfo(){
    let name = human.getName();
    let weight = human.getWeight();
    let gender = human.getGender();
    document.getElementById("info").innerHTML = `${name} , weighted ${weight},  gender : ${gender}`;
}


