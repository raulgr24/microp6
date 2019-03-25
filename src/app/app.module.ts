import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ReservaPage} from '../pages/reserva/reserva'
import { ConsultaReservasPage } from '../pages/consulta-reservas/consulta-reservas';
import { CompanyLinkPage } from '../pages/company-link/company-link';
import { TarjetasEmbarquePage } from '../pages/tarjetas-embarque/tarjetas-embarque';
import { AspectosLegalesPage } from '../pages/aspectos-legales/aspectos-legales';
import { NuevaTarjetaPage } from '../pages/nueva-tarjeta/nueva-tarjeta';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ReservaService } from '../services/reserva.service';
import { TarjetaService } from '../services/tarjeta.service';
import { Services } from '@angular/core/src/view';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ReservaPage,
    ConsultaReservasPage,
    CompanyLinkPage,
    TarjetasEmbarquePage,
    AspectosLegalesPage,
    NuevaTarjetaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ReservaPage,
    ConsultaReservasPage,
    CompanyLinkPage,
    TarjetasEmbarquePage,
    AspectosLegalesPage,
    NuevaTarjetaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ReservaService,
    TarjetaService
  ]
})
export class AppModule {}
