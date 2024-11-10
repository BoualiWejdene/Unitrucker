package com.dsi.projet.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dsi.projet.entities.Matiere;
import com.dsi.projet.services.IMatiereService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MatiereController {

	@Autowired
	private IMatiereService matiereService;

	@GetMapping("/matieres")
	public List<Matiere> allClasses() {
		return matiereService.allMatieres();
	}

	@PostMapping("/matieres")
	public Matiere createMatiere(@RequestBody Matiere m) {
		return matiereService.createMatiere(m);
	}
	@GetMapping("/matiere/{id}")
    public ResponseEntity<Matiere> getMatiereById(@PathVariable int id) {
        Matiere matiere = matiereService.getMatiereById(id); // Call service to get Matiere
        return ResponseEntity.ok(matiere); // Return Matiere in response body with HTTP 200 status
    }
}
