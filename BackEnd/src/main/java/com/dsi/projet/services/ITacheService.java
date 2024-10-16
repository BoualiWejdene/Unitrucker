package com.dsi.projet.services;

import java.util.List;


import com.dsi.projet.entities.Tache;

public interface ITacheService {
	public Tache addTacheByProf(Tache t,int idProf);
	public Tache addTachebyEtudiant(Tache t,int idEtudiant);
	public List<Tache> getAll();
	public List<Tache> getTasksByEtudiant(int idEtudiant);
	public List<Tache> getTasksByProf(int id_Professeur);
	public boolean deleteTaskByProf(int idTache,int id_prof);
	public Tache assignTaskToStudents(int idTache, List<Integer> idsEtudiants);

	
}
