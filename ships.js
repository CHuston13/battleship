class ships{
    constructor(shipName,shipLength){
    this.shipName = shipName;
    this.shipLength = shipLength; 
    this.shipHits = [];
    
}

hit(index){
    this.shipHits.push(index);
}
sank(){
    if(this.shipLength = this.shipHits){
        alert(this.shipName+'has sank');
    }
}
};
//create all ship values

const carrier = new ships("Carrier",5);
const battleShip = new ships("Battleship",4);
const cruiser = new ships("Cruiser",3);
const submarine = new ships("Submarine",3);
const destroyer = new ships("destroyer",2);


