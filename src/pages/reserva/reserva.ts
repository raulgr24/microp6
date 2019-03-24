import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { HomePage } from '../home/home';
import { ReservaService} from '../../services/reserva.service';
import { ConsultaReservasPage } from '../consulta-reservas/consulta-reservas';

/**
 * Generated class for the ReservaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reserva',
  templateUrl: 'reserva.html',
})
export class ReservaPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, private reservaService: ReservaService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservaPage');
  }

  onAddReserva(value:{origen:string, destino: string, ida: any, vuelta:any}){
   this.navCtrl.setRoot(ConsultaReservasPage); 
   this.reservaService.addReserva(value);
  }
}
