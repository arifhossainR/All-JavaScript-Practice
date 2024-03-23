class model{
    constructor(firstName){
        this.modelName = firstName;
    }
    showModel(){
        return (`model name = ${this.modelName}`);
    }
}
class color extends model{
    constructor(firstParam, secondParam){
        super(firstParam);
        this.colorName = secondParam;
    }
    showModelAndColorClass(){
        return (`${this.showModel()} and color name = ${this.colorName}`);
    }
}
let arifCar = new color("Lamborgini", "Black");
console.log(arifCar.showModelAndColorClass());