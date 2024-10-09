import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin_dashboard/dashboard/dashboard.component';
import { ListesProfComponent } from './admin_dashboard/listes-prof/listes-prof.component';
import { ListesEtudiantsComponent } from './admin_dashboard/listes-etudiants/listes-etudiants.component';
import { ListeclasseComponent } from './admin_dashboard/listeclasse/listeclasse.component';
import { ListematiereComponent } from './admin_dashboard/listematiere/listematiere.component';
import { CreerProfComponent } from './admin_dashboard/creer-prof/creer-prof.component';
import { CreerEtudiantComponent } from './admin_dashboard/creer-etudiant/creer-etudiant.component';
import { ErrorComponent } from './admin_dashboard/error/error.component';
import { CreerClasseComponent } from './admin_dashboard/creer-classe/creer-classe.component';
import { CreerMatiereComponent } from './admin_dashboard/creer-matiere/creer-matiere.component';
import { CreerTacheComponent } from './prof_dashboard/creer-tache/creer-tache.component';
import { DashProfComponent } from './prof_dashboard/dash-prof/dash-prof.component';
import { ListetachesComponent } from './prof_dashboard/listetaches/listetaches.component';
import { AssignerTacheComponent } from './prof_dashboard/assigner-tache/assigner-tache.component';


const routes: Routes =[
  {path: 'dashboard',title:'Dashboard',component:DashboardComponent},
  {path:'listeprof',title:'Les Profs',component:ListesProfComponent},
  {path:'listeetud',title:'Les Etudiants',component:ListesEtudiantsComponent},
  {path:'listeclasse',title:'Les classes',component:ListeclasseComponent},
  {path:'listmatiere',title:'Les matiere',component:ListematiereComponent},
  {path:'profs',title:'Creer Prof',component:CreerProfComponent},
  {path:'etd',title:'Creer Etudiant',component:CreerEtudiantComponent},
  {path:'classe',title:'Creer Classe',component:CreerClasseComponent},
  {path:'mat',title:'Creer Matiere',component:CreerMatiereComponent},
  {path:'creerTache',title:'Creer Tache',component:CreerTacheComponent},
  {path:'dashboardProf',title:'Dashboard Prof',component:DashProfComponent},
  {path:'listetaches',title:'Liste des taches',component:ListetachesComponent},
  {path:'assignerTache/:id',title:'attribuer tache',component:AssignerTacheComponent},
  {path: '',redirectTo: '/dashboard',pathMatch: 'full'},
  {path: '**',title:'Erreur',component:ErrorComponent},
  
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

