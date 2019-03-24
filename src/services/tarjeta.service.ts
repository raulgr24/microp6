import {Tarjeta} from "../models/tarjeta.model";

export class TarjetaService{
    private tarjetas: Tarjeta []=[];
    constructor(){}

    addTarjeta(var1:string,var2:string,var3:any,var4:any){
        this.tarjetas.push({nombre:null,pasaporte:null,telefono:null,origen:var1,destino:var2,ida:var3,vuelta:var4});
    }
    editTarjeta(var1:string, var2:number,var3:number){
        this.tarjetas[this.tarjetas.length-1].nombre=var1;
        this.tarjetas[this.tarjetas.length-1].pasaporte=var2;
        this.tarjetas[this.tarjetas.length-1].telefono=var3;
    }
    getTarjetas(){
        return this.tarjetas;
    }
    updateTarjeta(value: Tarjeta){

    }
    removeTarjeta(value: Tarjeta){

    }
}