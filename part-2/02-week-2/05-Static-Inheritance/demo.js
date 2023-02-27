class State {
    population = 0;
    cities = [];
    capital = "";

    constructor(population, cities, capital){
        this.population = population;
        this.cities = cities;
        this.capital = capital;
    }
}

let elvisState = new State(1000, ["Wakanda", "Metropolis"], "Gotham");


console.log(elvisState.capital);


class NewYork extends State{
    bodegas = [];
    constructor(population, cities, capital, bodegas){
        super(population, cities, capital);
        this.bodegas = bodegas;
    }  
}

class NewJersey extends State {

    diners = [];

    constructor(population, cities, capital, diners){
        super(population, cities, capital);
        this.diners = diners;
    }
}

let NY = new NewYork("1000000000", ["Bronx", "Brooklyn", "Staten Island", "Manhattan", "Queens"], "Albany", ["Mom and Pop Bodega 1", "Mom and Pop Bodega 2"]);
console.log("This is NY's Capital: " + NY.capital)

console.log("Elvis State Capital is: ", elvisState.capital);

console.log("New York's Bodega Scene: ", NY.bodegas[0]);


let NJ = new NewJersey(92000000, ["Trenton", "Hoboken", "Jersey City"], "Trenton", ["Diner 1", "Diner 2"]);

console.log(NJ.capital);
console.log(NJ.diners);
console.log(NJ.cities);

console.log(`The capital ${NJ.capital} is across the river from the capital ${NY.capital}`)



class Orange extends Fruit {

}

class Water extends Liquid {

}

class Juice extends Liquid {

}
class Computer {
    constructor(){
        
    }
}

class CellPhone extends Computer {
    static tracking = [];
    
    constructor(){

    }

    static call(){

    }
}


console.log(CellPhone.tracking);


