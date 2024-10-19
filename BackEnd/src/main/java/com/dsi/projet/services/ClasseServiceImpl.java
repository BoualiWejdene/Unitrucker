package com.dsi.projet.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dsi.projet.entities.Classe;
import com.dsi.projet.entities.Etudiant;
import com.dsi.projet.entities.Matiere;
import com.dsi.projet.entities.Professeur;
import com.dsi.projet.repositories.ClasseRepository;
import com.dsi.projet.repositories.EtudiantRepository;
import com.dsi.projet.repositories.MatiereRepository;
import com.dsi.projet.repositories.ProfRepository;

@Service
public class ClasseServiceImpl implements IClasseService {

	@Autowired
	private ClasseRepository classeRepository;

	@Autowired
	private EtudiantRepository etudiantRepository;

	@Autowired
	private MatiereRepository matiereRepository;

	@Autowired
	private ProfRepository professeurRepository;

	@Override
	public List<Classe> allClasses() {
		return classeRepository.findAll();
	}

	@Override
	public Classe createClass(Classe c) {

		List<Classe> classes = classeRepository.findAll();
		for (Classe classe : classes) {
			if (classe.getAnnee_Classe() == c.getAnnee_Classe() && classe.getNum_Classe() == c.getNum_Classe()
					&& classe.getNom_Classe() == c.getNom_Classe()) {

				return null;
			}
		}

		List<Etudiant> etudiants = new ArrayList<>();

		for (Etudiant etudiant : c.getEtudiants()) {
			Etudiant etudiantFromDb = etudiantRepository.findById(etudiant.getId_Etudiant()).orElse(null);
			if (etudiantFromDb != null) {
				etudiantFromDb.setClasse(c);
				etudiants.add(etudiantFromDb);
			}
		}
		c.setEtudiants(etudiants);
		// Traitement des matières et des professeurs associés
		List<Matiere> matieres = new ArrayList<>();
		for (Matiere matiere : c.getMatieres()) {
			Matiere matiereFromDb = matiereRepository.findById(matiere.getId_Matiere()).orElse(null);
			if (matiereFromDb != null) {
				// Vérifier les professeurs associés à la matière
				List<Professeur> professeursFromDb = new ArrayList<>();
				for (Professeur professeur : matiereFromDb.getProfesseurs()) {
					Professeur profFromDb = professeurRepository.findById(professeur.getId_Professeur()).orElse(null);
					if (profFromDb != null) {
						professeursFromDb.add(profFromDb); // Ajouter les professeurs à la matière
					}
				}
				matiereFromDb.setProfesseurs(professeursFromDb); // Lier les professeurs à la matière
				matieres.add(matiereFromDb);
			}
		}
		c.setMatieres(matieres); // Associer les matières à la classe

		// Sauvegarder la classe avec ses matières et étudiants
		return classeRepository.save(c);
		//
		// List<Matiere> matieres = new ArrayList<>();
		//
		// for (Matiere matiere : c.getMatieres()) {
		// matieres.add(matiereRepository.findById(matiere.getId_Matiere()).orElse(null));
		// }
		// c.setMatieres(matieres);
		//
		//
		//
		// // Récupérer et associer les professeurs à partir des matières
		// List<Professeur> professeurs = new ArrayList<>();
		// for (Matiere matiere : matieres) {
		// List<Professeur> professeurFromDb = matiere.getProfesseurs(); // Récupérer
		// les professeurs associés à la matière
		// for (Professeur p : professeurFromDb) {
		// Professeur pro =
		// professeurRepository.findById(p.getId_Professeur()).orElse(null);
		// if (pro != null) {
		// professeurs.add(pro);
		// }
		// }
		// }
		//
		//
		//
		// //c.setMatieres(c.getMatieres());
		//
		// return classeRepository.save(c);

	}
}