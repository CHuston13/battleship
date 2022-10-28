function ships(name,length,hits){
    this.shipName = name;
    this.shipLength = length; 
    this.shipHits = hits;
    
}

const carrier = new ships("Carrier",5,0);
const battleShip = new ships("Battleship",4,0);
const cruiser = new ships("Cruiser",3,0);
const submarine = new ships("Submarine",3,0);
const destroyer = new ships("destroyer",2,0);
