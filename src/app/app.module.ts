import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
import { CargaDocumentosComponent } from './carga-documentos/carga-documentos.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NominaYearComponent } from './nomina-year/nomina-year.component';
import { AdministradorMenuPrincipalComponent } from './administrador-menu-principal/administrador-menu-principal.component';
import { AdministradorUsuariosComponent } from './administrador-usuarios/administrador-usuarios.component';
import { AdministradorDocumentosComponent } from './administrador-documentos/administrador-documentos.component';

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
    PortalComponent,
    CargaDocumentosComponent,
    NominaYearComponent,
    AdministradorMenuPrincipalComponent,
    AdministradorUsuariosComponent,
    AdministradorDocumentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
