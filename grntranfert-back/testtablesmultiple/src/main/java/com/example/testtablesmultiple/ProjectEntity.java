package com.example.testtablesmultiple;


import javax.persistence.*;

@Entity
@Table(name = "projects")
public class ProjectEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="project_id")
    Long project_id;

    @Column(name="title")
    String project_title;

    @Column(name="localisation")
    String project_localisation;

    @Column(name = "description")
    String projet_description;

    @Column(name="objectif")
    Integer project_objectif;

    public Long getProject_id() {
        return project_id;
    }

    public void setProject_id(Long project_id) {
        this.project_id = project_id;
    }

    public String getProject_title() {
        return project_title;
    }

    public void setProject_title(String project_title) {
        this.project_title = project_title;
    }

    public String getProject_localisation() {
        return project_localisation;
    }

    public void setProject_localisation(String project_localisation) {
        this.project_localisation = project_localisation;
    }

    public String getProjet_description() {
        return projet_description;
    }

    public void setProjet_description(String projet_description) {
        this.projet_description = projet_description;
    }

    public Integer getProject_objectif() {
        return project_objectif;
    }

    public void setProject_objectif(Integer project_objectif) {
        this.project_objectif = project_objectif;
    }
}
