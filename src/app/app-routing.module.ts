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
  {path: 'nominayear', component: NominaYearComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
