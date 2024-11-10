import { Etudiant } from "./etudiant";
import { Tache } from "./tache";

export class Completion {
    public etudiantName: String;
    public tache_id: number;
    public marquer: boolean;
    public complexite: String;
    public etudiant: number;
    public tache: Tache;
    public commentaires:String[];
    public progression:number;
    public totalSoustTaches:number;

    constructor(tache_id: number, marquer: boolean, complexite: String, etudiant: number, tache: Tache,commentaires:String[],etudiantName:String ,progression:number,totalSoustTaches:number) {
     
      this.tache_id = tache_id;
        this.marquer = marquer;
        this.complexite = complexite;
        this.etudiant = etudiant;
        this.tache = tache;
        this.commentaires=[];
        this.etudiantName = etudiantName; 
        this.progression = progression; 
        this.totalSoustTaches=totalSoustTaches;
      }
    
}
