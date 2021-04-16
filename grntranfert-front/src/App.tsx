import React from 'react';

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
        <h4>[nom du projet]</h4><span>[insert localisation]</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam nulla at urna feugiat volutpat.<br/>
            Maecenas nec euismod metus. Suspendisse molestie volutpat diam ut blandit. Nulla iaculis elit in lectus viverra, <br/>
            vulputate libero tincidunt. Vestibulum interdum, massa ut aliquet congue, nibh dolor<br/>
            vulputate magna, in bibendum nunc nisl ac libero. Ut facilisis nec est eu venenatis. Ut at finibus.</p>
        <h4>[Montant actuel]/[Montant demander]</h4> <span>[insert pourcentage]</span>

        <h4>[nom du projet]</h4><span>[insert localisation]</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam nulla at urna feugiat volutpat.<br/>
            Maecenas nec euismod metus. Suspendisse molestie volutpat diam ut blandit. Nulla iaculis elit in lectus viverra, <br/>
            vulputate libero tincidunt. Vestibulum interdum, massa ut aliquet congue, nibh dolor<br/>
            vulputate magna, in bibendum nunc nisl ac libero. Ut facilisis nec est eu venenatis. Ut at finibus.</p>
        <h4>[Montant actuel]/[Montant demander]</h4> <span>[insert pourcentage]</span>


    </div>
  );
}

export default App;
