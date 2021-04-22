import React, {ChangeEvent, useState,useEffect} from 'react';
import ProjectItem from "./components/ProjectItem";
import ProjectListItem from "./Data/ProjectListItem";
import './App.css';

const App : React.FC = () => {

    const [senderAdress,setSenderAdress] = useState<string>("");
    const [receiverAdress, setreceiverAdress] = useState<string>("");
    const [transfertAmount, settransfertAmount] = useState<number>(0)


    const [projectTitle, setProjectTitle] = useState<string>("");
    const [projectLocalisation,setprojectLocalisation] = useState<string>("");
    const [projectDescription, setprojectDiscription] = useState<string>("");
    const [projectObjectif, setProjectObjectif] = useState<number>(0);
    const [projectList, setProjectList] = useState<ProjectListItem[]>([]);

    useEffect(() => {

            fetch("http://localhost:8080/apiGRN/transactions/getallTransactions")
                .then((response)=>response.json())
                .then((data)=>{console.log("liste des transaction",data);setProjectList(data);})
    }, [projectList]);




    const addProject = ():void =>{
        const newProject = {projectTitle:projectTitle, localisation: projectLocalisation,  description: projectDescription, objectif: projectObjectif};
        setProjectTitle("");
        setprojectDiscription("");
        setprojectLocalisation("");
        setProjectObjectif(0);
        setProjectList([...projectList,newProject]);
    }

    const changeHandlerTransaction = (event: ChangeEvent<HTMLInputElement>):void =>{
        if(event.target.name==='sender'){setSenderAdress(event.target.value)}
        else if (event.target.name ===  'receiver'){setreceiverAdress(event.target.value)}
    }

    const changeHandlerProject = (event : ChangeEvent<HTMLInputElement>):void =>{
        if(event.target.name === "inputTitle"){setProjectTitle(event.target.value)}
        else if(event.target.name === "inputLocalisation"){setprojectLocalisation(event.target.value)}
        else if(event.target.name === "inputDescription"){setprojectDiscription(event.target.value)}
        else if(event.target.name === "inputObjectif"){setProjectObjectif(Number(event.target.value))}

    }


  return (
    <div className="App">
     <h1>--GRN TRANSFERT--</h1>
      <h2>-Faire un virement-</h2>
        <form>
            <h3>Adresse utilisateur</h3>
            <input type="text" placeholder="Adresse utilisateur" name="sender"/>
            <h3>Adresse destinataire</h3>
            <input type="text" placeholder="Adresse destinataire" name="receiver"/>
            <h3>Montant de la transaction</h3>
            <input type="text" placeholder="Montant eur" name="amoutTransaction"/>
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
                return<ProjectItem projectAllProps={project}/>
                }
            )}
        </div>



    </div>
  );
}

export default App;
