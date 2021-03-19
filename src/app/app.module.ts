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


import { NominaYearComponent } from './nomina-year/nomina-year.component';
import { AdministradorMenuPrincipalComponent } from './administrador-menu-principal/administrador-menu-principal.component';
import { AdministradorUsuariosComponent } from './administrador-usuarios/administrador-usuarios.component';
import { AdministradorDocumentosComponent } from './administrador-documentos/administrador-documentos.component';
import { AddUserComponent } from './add-user/add-user.component';
import { OperadorComponent } from './operador/operador.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule  } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

import { AdminAvisosComponent } from './admin-avisos/admin-avisos.component';
import { OpMenuComponent } from './op-menu/op-menu.component';
import { OperadorRecursosHumanosComponent } from './operador-recursos-humanos/operador-recursos-humanos.component';
import { OpAddDocumentComponent } from './op-add-document/op-add-document.component';
import { OperadorNominasComponent } from './operador-nominas/operador-nominas.component';
import { OperadorContabilidadComponent } from './operador-contabilidad/operador-contabilidad.component';
import { OperadorAddNominasComponent } from './operador-add-nominas/operador-add-nominas.component';
import { OperadorAddContabilidadComponent } from './operador-add-contabilidad/operador-add-contabilidad.component';

// import { MatMomentDateModule } from '@angular/material-moment-adapter';

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
    AdministradorDocumentosComponent,
    AddUserComponent,
    AdminAvisosComponent,
    OpMenuComponent,
    OperadorRecursosHumanosComponent,
    OpAddDocumentComponent,
    OperadorNominasComponent,
    OperadorContabilidadComponent,
    OperadorAddNominasComponent,
    OperadorAddContabilidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
