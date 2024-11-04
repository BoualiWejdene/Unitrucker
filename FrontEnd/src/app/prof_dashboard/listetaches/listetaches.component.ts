import { Component, OnInit } from '@angular/core';
import { CreerTacheComponent } from '../creer-tache/creer-tache.component';
import { Tache } from 'src/app/classes/tache';
import { CreerTacheService } from 'src/app/services/creer-tache.service';
import { Etudiant } from 'src/app/classes/etudiant';
import { EtudiantServiceService } from 'src/app/services/etudiant-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listetaches',
  templateUrl: './listetaches.component.html',
  styleUrls: ['./listetaches.component.css']
})
export class ListetachesComponent implements OnInit{
  taches: Tache[] = [];
  etudiants: Etudiant[] = [];
  selectedTacheId: number | null = null; // Pour stocker l'ID de la tâche sélectionnée
  showEtudiants: boolean = false; // Pour contrôler l'affichage de la liste des étudiants
  selectedEtudiants: number[] = []; // Tableau pour stocker les IDs des étudiants sélectionnés
  idProf!:number;
  constructor(private tacheService: CreerTacheService, private etudiantService: EtudiantServiceService,
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idProf = Number(this.route.snapshot.paramMap.get('id'));
    this.loadTaches();
    this.loadEtudiants();
  }

  loadTaches() {
    this.tacheService.getTasksByProf(this.idProf).subscribe(data => {
      this.taches = data;
    }, error => {
      console.error('Erreur lors du chargement des taches', error);
    });
  }

  loadEtudiants() {
    this.etudiantService.getEtudiants().subscribe(data => {
      this.etudiants = data;
    }, error => {
      console.error('Erreur lors du chargement des étudiants', error);
    });
  }

  assignTache(tacheId: number) {

    this.selectedTacheId = tacheId;
    this.showEtudiants = true;
    setTimeout(() => {
      const element = document.getElementById('assignEtudiantsSection');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' }); 
      }
    }, 0); 
    }

  closeEtudiantList() {
    this.showEtudiants = false; 
    this.selectedTacheId = null;
    this.selectedEtudiants = []; 
  }
  assignSelectedEtudiants() {
    const selectedEtudiants = this.selectedEtudiants;
    if (selectedEtudiants.length > 0 && this.selectedTacheId) {
      this.tacheService.assignTask(this.selectedTacheId, selectedEtudiants).subscribe(
        response => {
          console.log('Tâche assignée avec succès:', response,selectedEtudiants);
          this.Submited();
          setTimeout(() => { this.closeEtudiantList(); }, 2200);
        },
        error => {
          console.error('Erreur lors de l\'attribution de la tâche:', error);
        }
      );
    }
  }

  alertVisible1 = false;
  Submited() {
    this.alertVisible1 = true;
    setTimeout(() => { this.alertVisible1 = false;}, 2000);
  }

  onEtudiantChange(event: any) {
    const idEtudiant = +event.target.value; 
    if (event.target.checked) {
      this.selectedEtudiants.push(idEtudiant);
    } else {
      this.selectedEtudiants = this.selectedEtudiants.filter(id => id !== idEtudiant);
    }
  }

  deleteTask(idTache: number, idProf: number): void {
    this.tacheService.deleteTaskByProf(idTache, idProf).subscribe(
      (response: boolean) => {
        if (response) {
          console.log('Tâche supprimée avec succès.');
          this.taches = this.taches.filter(tache => tache.id_Tache !== idTache);
        
        } else {
          console.log('La tâche n\'a pas été trouvée ou n\'appartient pas au professeur.');
        }
      },
      error => {
        console.error('Erreur lors de la suppression de la tâche:', error);
      }
    );
  }

}


