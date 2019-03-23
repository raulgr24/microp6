import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ReservaPage } from '../pages/reserva/reserva';
import { ConsultaReservasPage } from '../pages/consulta-reservas/consulta-reservas';
import { CompanyLinkPage } from '../pages/company-link/company-link';
import { TarjetasEmbarquePage } from '../pages/tarjetas-embarque/tarjetas-embarque';
import { AspectosLegalesPage } from '../pages/aspectos-legales/aspectos-legales';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Reserva de Vuelos', component: ReservaPage},
      { title: 'Consulta tus reservas', component: ConsultaReservasPage},
      { title: 'Tus tarjetas de embarque', component: TarjetasEmbarquePage},
      { title: 'Aspectos legales', component: AspectosLegalesPage},
      { title: 'Link de la compañía', component: CompanyLinkPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
