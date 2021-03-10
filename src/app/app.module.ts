import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NominasComponent } from './nominas/nominas.component';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { DocumentacionComponent } from './documentacion/documentacion.component';
import { RecursosHumanosComponent } from './recursos-humanos/recursos-humanos.component';
import { ContabilidadComponent } from './contabilidad/contabilidad.component';
import { PortalComponent } from './portal/portal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NominasComponent,
    SupervisorComponent,
    MenuPrincipalComponent,
    DocumentacionComponent,
    RecursosHumanosComponent,
    ContabilidadComponent,
    PortalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
