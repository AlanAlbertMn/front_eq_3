import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargaDocumentosComponent } from './carga-documentos/carga-documentos.component';
import { ContabilidadComponent } from './contabilidad/contabilidad.component';
import { DocumentacionComponent } from './documentacion/documentacion.component';
import { LoginComponent } from './login/login.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { NominasComponent } from './nominas/nominas.component';
import { PortalComponent } from './portal/portal.component';
import { RecursosHumanosComponent } from './recursos-humanos/recursos-humanos.component';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { NominaYearComponent } from './nomina-year/nomina-year.component';

import { AdministradorMenuPrincipalComponent } from './administrador-menu-principal/administrador-menu-principal.component';
import { AdministradorUsuariosComponent } from './administrador-usuarios/administrador-usuarios.component';
import { AdministradorDocumentosComponent } from './administrador-documentos/administrador-documentos.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminAvisosComponent } from './admin-avisos/admin-avisos.component';
import { AddNotifComponent } from './add-notif/add-notif.component';

import { OpMenuComponent } from './op-menu/op-menu.component';
import { OperadorRecursosHumanosComponent } from './operador-recursos-humanos/operador-recursos-humanos.component';
import { OpAddDocumentComponent } from './op-add-document/op-add-document.component';
import { OperadorNominasComponent } from './operador-nominas/operador-nominas.component';
import { OperadorAddNominasComponent } from './operador-add-nominas/operador-add-nominas.component';
import { OperadorContabilidadComponent } from './operador-contabilidad/operador-contabilidad.component';
import { OperadorAddContabilidadComponent } from './operador-add-contabilidad/operador-add-contabilidad.component';

const routes: Routes = [
  {path: 'auth', component: LoginComponent},
  { path: '',   redirectTo: '/auth', pathMatch: 'full' },
  {path: 'portal', component: PortalComponent},
  {path: 'upload', component: CargaDocumentosComponent},
  {path: 'contabilidad', component: ContabilidadComponent},
  {path: 'documentacion', component: DocumentacionComponent},
  {path: 'menu_principal', component: MenuPrincipalComponent},
  {path: 'nominas', component: NominasComponent},
  {path: 'recursos_humanos', component: RecursosHumanosComponent},
  {path: 'nominayear', component: NominaYearComponent},
  {path: 'admin_menu', component: AdministradorMenuPrincipalComponent},
  {path: 'admin_users', component: AdministradorUsuariosComponent},
  {path: 'admin_docs', component: AdministradorDocumentosComponent},
  {path: 'add_user', component: AddUserComponent},
  {path: 'admin_avisos', component: AdminAvisosComponent},
  {path: 'op_menu', component: OpMenuComponent},
  {path: 'oper_recursos', component: OperadorRecursosHumanosComponent},
  {path: 'oper_addRecursos', component: OpAddDocumentComponent},
  {path: 'oper_nominas', component: OperadorNominasComponent},
  {path: 'oper_addNominas', component: OperadorAddNominasComponent},
  {path: 'oper_contabilidad', component: OperadorContabilidadComponent},
  {path: 'oper_addContabilidad', component: OperadorAddContabilidadComponent},
  {path: 'add_notif', component: AddNotifComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
