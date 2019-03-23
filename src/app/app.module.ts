import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ReservaPage} from '../pages/reserva/reserva'
import { ConsultaReservasPage } from '../pages/consulta-reservas/consulta-reservas';
import { CompanyLinkPage } from '../pages/company-link/company-link';
import { TarjetasEmbarquePage } from '../pages/tarjetas-embarque/tarjetas-embarque';
import { AspectosLegalesPage } from '../pages/aspectos-legales/aspectos-legales';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ReservaPage,
    ConsultaReservasPage,
    CompanyLinkPage,
    TarjetasEmbarquePage,
    AspectosLegalesPage
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ReservaPage,
    ConsultaReservasPage,
    CompanyLinkPage,
    TarjetasEmbarquePage,
    AspectosLegalesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
