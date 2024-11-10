package com.dsi.projet.services;

import java.util.List;

import com.dsi.projet.entities.Completion;
import com.dsi.projet.entities.Completion.ComplexteTache;

public interface ICompletion {
	public Completion Consulter(int idEtd,int idTache);
	
	public Completion markTaskAsCompleted(int tacheId, int etudiantId, Boolean isCompleted);
	public Completion pickDifficulty(int tacheId, int etudiantId, ComplexteTache complexite);
	public List<String> getRappelByEtudiant(int id_etd);
	public Completion addComment(int tacheId, int etudiantId,String comment);
}
