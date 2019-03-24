import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TarjetaService} from '../../services/tarjeta.service';

/**
 * Generated class for the NuevaTarjetaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  onAddTarjeta(var1:string,var2:number,var3:number){
    this.tarjetaService.editTarjeta(var1,var2,var3);
  }
}
