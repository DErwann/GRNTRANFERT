import React from 'react';
import ProjectItem from "./components/ProjectItem";

import './App.css';

function App() {
  return (
    <div className="App">
     <h1>--GRN TRANSFERT--</h1>
      <h2>-Faire un virement-</h2>
        <form>
            <h3>Adresse utilisateur</h3>
            <input type="text" placeholder="Adresse utilisateur"/>
            <h3>Adresse destinataire</h3>
            <input type="text" placeholder="Adresse destinataire"/>
            <h3>Montant de la transaction</h3>
            <input type="text" placeholder="Montant eur"/>
        </form>
      <h2>-Enregistrer un nouveau projet-</h2>
        <form>
            <h3>Nom du projet</h3>
            <input type="text" placeholder="nom du projet"/>
            <h3>Localisation du projet</h3>
            <input type="text" placeholder="localisation (ville, village)"/>
            <h3>Description du projet</h3>
            <input type="text" placeholder="description"/>
            <h3>Montant neccessaire pour le projet</h3>
            <input type="text" placeholder="montant"/>
        </form>
      <h2>-Liste des projets en cours-</h2>
        <ProjectItem/>
        <ProjectItem/>
        <ProjectItem/>


    </div>
  );
}

export default App;
