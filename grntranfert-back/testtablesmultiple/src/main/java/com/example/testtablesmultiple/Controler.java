package com.example.testtablesmultiple;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
//Cette class permet d'établir toute les méthodes de l'api

@Controller
@RequestMapping(path="/apiGRN")
public class Controler {
    @Autowired
    private RepositoryTransaction repositoryTransaction; // On récupère les infos de la table transactions

    @Autowired
    private RepositoryProject repositoryProject;// On récupère les infos de la table projects


    // On met en place toutes les méthodes, ici les methodes GET elles permettent de récupérer des données ciblées ou globales d'une table
    @GetMapping(path = "/getAllTransactions") //Méthode GET globale pour les transactions
    public @ResponseBody Iterable<TransactionEntity> getAllTransactions(){return repositoryTransaction.findAll();}

    @GetMapping(path = "/getAllProjects")//Méthodes GET globale pour les projects
    public @ResponseBody Iterable<ProjectEntity> getAllProjects(){return repositoryProject.findAll();}

    @PostMapping(path ="/addTransaction")// Méthode POST qui permet de créer un nouveau élément dans la table transactions donc enregistrer une nouvelle transaction
    public @ResponseBody String addNewTransaction(@RequestParam String sender, @RequestParam String receiver, @RequestParam Integer amount){
        TransactionEntity n = new TransactionEntity();
        n.setSenderAdress(sender);
        n.setReceiverAdress(receiver);
        n.setAmount(amount);
        repositoryTransaction.save(n);
        return "Transaction saved";
    }

    @PostMapping(path ="/addProject")// Méthode POST qui permet de créer un nouveau élément dans la table projects donc enregistrer un nouveau projet
    public @ResponseBody String addNewProject(
            @RequestParam String title,
            @RequestParam String localisation,
            @RequestParam String description,
            @RequestParam Integer objectif
    ){
        ProjectEntity p = new ProjectEntity();
        p.setProject_title(title);
        p.setProject_localisation(localisation);
        p.setProjet_description(description);
        p.setProject_objectif(objectif);
        repositoryProject.save(p);
        return "Project saved";
    }

    @DeleteMapping(path = "/delProject/{project_id}") // Methode DELETE qui permet de supprimer un projet à l'aide de son id
    public @ResponseBody String deleteProject(@PathVariable Long project_id){
        repositoryProject.deleteById(project_id);
        return "Project deleted";
    }




}
