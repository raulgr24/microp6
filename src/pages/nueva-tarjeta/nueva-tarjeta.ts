import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TarjetaService} from '../../services/tarjeta.service';
import { TarjetasEmbarquePage } from '../tarjetas-embarque/tarjetas-embarque';

@IonicPage()
@Component({
  selector: 'page-nueva-tarjeta',
  templateUrl: 'nueva-tarjeta.html',
})
export class NuevaTarjetaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private tarjetaService:TarjetaService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevaTarjetaPage');
  }
  onAddTarjeta(nombre:string){
    this.navCtrl.setRoot(TarjetasEmbarquePage);
    this.tarjetaService.editTarjeta(nombre);
  }
}
