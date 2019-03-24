import {Reserva} from "../models/reserva.model";

export class ReservaService{
    private reservas: Reserva []=[];
    constructor(){}

    addReserva(value: Reserva){
        this.reservas.push(value);
    }
    getReservas(){
        return this.reservas;
    }
    updateReserva(value: Reserva){

    }
    removeReserva(value: Reserva){

    }
}