import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TarjetaService } from '../../services/tarjeta.service';
import { Tarjeta } from '../../models/tarjeta.model'


@IonicPage()
@Component({
  selector: 'page-tarjetas-embarque',
  templateUrl: 'tarjetas-embarque.html',
})
export class TarjetasEmbarquePage {

  tarjetas: Tarjeta []= [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private TarjetaService:TarjetaService, private alertCtrl:AlertController) {}
  ionViewWillEnter(){
    this.tarjetas = this.TarjetaService.getTarjetas();
    if(this.tarjetas.length==0){
      const mensaje =  this.alertCtrl.create({
        title: 'Aún no tienes ninguna tarjeta de embarque',
        subTitle: 'Obtén tu tarjeta desde la reserva del vuelo',
        buttons: ['Aceptar']
      });
    mensaje.present();
    //this.navCtrl.setRoot(ConsultaReservasPage);
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TarjetasEmbarquePage');
  }

}
