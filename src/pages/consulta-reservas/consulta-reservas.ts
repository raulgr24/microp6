import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ReservaPage} from '../reserva/reserva';
import { Reserva } from '../../models/reserva.model';
import { ReservaService} from '../../services/reserva.service';
import { TarjetaService } from '../../services/tarjeta.service';
import { NuevaTarjetaPage } from '../nueva-tarjeta/nueva-tarjeta';

/**
 * Generated class for the ConsultaReservasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consulta-reservas',
  templateUrl: 'consulta-reservas.html',
})
export class ConsultaReservasPage {

  reservas: Reserva []= [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private ReservaService : ReservaService, private TarjetaService:TarjetaService, private alertCtrl:AlertController) {}
  ionViewWillEnter(){
    this.reservas = this.ReservaService.getReservas();
    if(this.reservas.length==0){
      const mensaje =  this.alertCtrl.create({
        title: 'Aún no has hecho ninguna reserva',
        subTitle: 'Te redirijimos al buscador de reservas',
        buttons: ['Aceptar']
      });
    mensaje.present();
    this.navCtrl.setRoot(ReservaPage);
    }
  }
  FormularioTarjeta(origen:string,destino:string,ida:any,vuelta:any){
    this.TarjetaService.addTarjeta(origen,destino,ida,vuelta);
    this.navCtrl.push(NuevaTarjetaPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultaReservasPage');
  }

}
