package com.example.testtablesmultiple;

import org.springframework.data.repository.CrudRepository;
// CRUD = Create Read Update Delete
public interface RepositoryProject extends CrudRepository<ProjectEntity,Long> {//Permet de mettre en place la méthode CRUD sur la table projects
}
