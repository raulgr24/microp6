import {Tarjeta} from "../models/tarjeta.model";

export class TarjetaService{
    private tarjetas: Tarjeta []=[];
    constructor(){}

    addTarjeta(){
        var rand:any=Math.floor(Math.random() * 10000) + 1000;
        var rand2:any=Math.floor(Math.random() * 100) + 1;
        var rand3:any=Math.floor(Math.random() * 8) + 1;
        var hora:any="12:00";
        var puerta:any="A";
        if (rand3==2){hora="12:00";puerta="B"};
        if (rand3==3){hora="13:00";puerta="C"};
        if (rand3==4){hora="14:00";puerta="D"};
        if (rand3==5){hora="15:00";puerta="E"};
        if (rand3==6){hora="16:00";puerta="F"};
        if (rand3==7){hora="17:00";puerta="G"};
        if (rand3==8){hora="18:00";puerta="H"};
        this.tarjetas.push({id:rand,nombre:"Default",asiento:rand2,grupo:rand3,hora:hora,puerta:puerta});
    }

    getTarjetas(){
        return this.tarjetas;
    }

    editTarjeta(var1:string){
        this.tarjetas[this.tarjetas.length-1].nombre=var1;
        //this.tarjetas[this.tarjetas.length-1].pasaporte=var2;
        //this.tarjetas[this.tarjetas.length-1].telefono=var3;
    }

    //updateTarjeta(value: Tarjeta){}

    removeTarjeta(value: Tarjeta){
      //?
    }
}
