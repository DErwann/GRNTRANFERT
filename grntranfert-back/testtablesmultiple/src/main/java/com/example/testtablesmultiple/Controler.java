package com.example.testtablesmultiple;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path="/apiGRN")
public class Controler {
    @Autowired
    private RepositoryTransaction repositoryTransaction;

    @Autowired
    private RepositoryProject repositoryProject;

    @GetMapping(path = "/getAllTransactions")
    public @ResponseBody Iterable<TransactionEntity> getAllTransactions(){return repositoryTransaction.findAll();}

    @GetMapping(path = "/getAllProjects")
    public @ResponseBody Iterable<ProjectEntity> getAllProjects(){return repositoryProject.findAll();}

    @PostMapping(path ="/addTransaction")
    public @ResponseBody String addNewTransaction(@RequestParam String sender, @RequestParam String receiver, @RequestParam Integer amount){
        TransactionEntity n = new TransactionEntity();
        n.setSenderAdress(sender);
        n.setReceiverAdress(receiver);
        n.setAmount(amount);
        repositoryTransaction.save(n);
        return "Transaction saved";
    }

    @PostMapping(path ="/addProject")
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

    @DeleteMapping(path = "/delProject/{project_id}")
    public @ResponseBody String deleteProject(@PathVariable Long project_id){
        repositoryProject.deleteById(project_id);
        return "Project deleted";
    }




}
