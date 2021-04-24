import React, {ChangeEvent, useState,useEffect} from 'react';
import ProjectItem from "./components/ProjectItem";
import ProjectListItem from "./Data/ProjectListItem";
import './App.css';

const App : React.FC = () => {

    //On definit les Hooks que nous allons utiliser dans toute l'application web

    const [senderAdress,setSenderAdress] = useState<string>(""); //hooks pour la valeur de l'adresse blockchain qui envoit le transfert
    const [receiverAdress, setreceiverAdress] = useState<string>("");  //hooks pour la valeur de l'adresse blockchain qui recoit le transfert
    const [transfertAmount, settransfertAmount] = useState<number>(0) //hooks pour enregister le montant du transfert


    const [projectTitle, setProjectTitle] = useState<string>(""); //hooks pour le titre du projet
    const [projectLocalisation,setprojectLocalisation] = useState<string>(""); //hooks pour la localisation du projet
    const [projectDescription, setprojectDiscription] = useState<string>(""); //hooks pour la description du projet
    const [projectObjectif, setProjectObjectif] = useState<number>(0); // hooks pour la somme demandé par le projet
    const [projectList, setProjectList] = useState<ProjectListItem[]>([]); // hools qui est un liste qui contient tous les hooks du projet par projet

    useEffect(() => { //on met en useEffect qui permet d'appeler l'api, qui permet d'appeler la base de données pour les projets déposés
        if (projectList.length === 0){
            fetch("http://localhost:8080/apiGRN/getAllProjects")
                .then((response)=>response.json())
                .then((data)=>{console.log("projects list:",data);
                    console.log(data[0].project_title)
                    setProjectList(data);})

        }}, [projectList]);




    const addProject = () =>{ // Fonction qui permet de rajouter un projet dans le hook projectList, cela permet de l'enregistrer dans le front
        fetch(`http://localhost:8080/apiGRN/addProject?title=${projectTitle}&localisation=${projectLocalisation}&description=${projectDescription} &objectif=${projectObjectif}`,
            {
                method:'POST'
            }).then(response => response.json())
            .then((aprojectItem)=>{

                setProjectList([...projectList,aprojectItem])
            })

    }

    const changeHandlerTransaction = (event: ChangeEvent<HTMLInputElement>):void =>{ //Fonction qui permet de repérer les changements dans le input de la transaction pour directement les enregistrer dans les hooks
        if(event.target.name==='sender'){setSenderAdress(event.target.value);console.log(senderAdress)}
        else if (event.target.name ===  'receiver'){setreceiverAdress(event.target.value);console.log(receiverAdress)}
        else if (event.target.name === 'amountTransaction'){settransfertAmount(Number(event.target.value));console.log(transfertAmount)}
    }

    const changeHandlerProject = (event : ChangeEvent<HTMLInputElement>):void =>{ //Fonction qui permet de repérer les changements dans le input du dépot de projet pour directement les enregistrer dans les hooks
        if(event.target.name === "inputTitle"){setProjectTitle(event.target.value)}
        else if(event.target.name === "inputLocalisation"){setprojectLocalisation(event.target.value)}
        else if(event.target.name === "inputDescription"){setprojectDiscription(event.target.value)}
        else if(event.target.name === "inputObjectif"){setProjectObjectif(Number(event.target.value))}

    }




  return ( //Affichage du site web avec les hooks et les composant créés
    <div className="App">
     <h1>--GRN TRANSFERT--</h1>
      <h2>-Faire un virement-</h2>
        <form>
            <h3>Adresse utilisateur</h3>
            <input type="text"
                   placeholder="Adresse utilisateur"
                   name="sender"
                   value={senderAdress}
                   onChange={changeHandlerTransaction}/>
            <h3>Adresse destinataire</h3>
            <input type="text"
                   placeholder="Adresse destinataire"
                   name="receiver"
                   value={receiverAdress}
                   onChange={changeHandlerTransaction}/>
            <h3>Montant de la transaction</h3>
            <input type="text"
                   placeholder="Montant eur"
                   name="amountTransaction"
                   value={transfertAmount}
                    onChange={changeHandlerTransaction}/>
        </form>
        <button>faire la transaction</button>
      <h2>-Enregistrer un nouveau projet-</h2>
        <form>
            <h3>Nom du projet</h3>
            <input type="text"
                   placeholder="nom du projet"
                   name="inputTitle"
                    value={projectTitle}
                    onChange={changeHandlerProject}/>
            <h3>Localisation du projet</h3>
            <input type="text"
                   placeholder="localisation (ville, village)"
                   name="inputLocalisation"
                    value={projectLocalisation}
                   onChange={changeHandlerProject}/>
            <h3>Description du projet</h3>
            <input type="text"
                   placeholder="description"
                   name="inputDescription"
                    value={projectDescription}
                   onChange={changeHandlerProject}/>
            <h3>Montant neccessaire pour le projet</h3>
            <input type="text"
                   placeholder="montant"
                   name="inputObjectif"
                    value={projectObjectif}
                   onChange={changeHandlerProject}/>
        </form>
            <button type="submit" onClick={addProject}>add project</button>


      <h2>-Liste des projets en cours-</h2>
        <div>
            {projectList.map((project)=>{
                return<ProjectItem key={project.project_id} projectAllProps={project}/>
                }
            )}
        </div>

    </div>
  );
}

export default App;
