import React,{useState} from "react";
import ProjectListItem from "../Data/ProjectListItem";

export  interface props { // On recupère tout les valeurs transmise par l'instance mère ici App.tsx
    projectAllProps : ProjectListItem;
    
}

const ProjectItem = ({projectAllProps}:props) => {// on défini la class du composant

    // eslint-disable-next-line
    const [projectItem, setProjecItem] = useState(projectAllProps);
    const [countUp, setcountUp] = useState<number>(0);

    const addUp = ()=>{ //fonction qui permet de comptabiliser tout les up pour le projet selectionné
        setcountUp(countUp+1)
    }
    const test = () =>{
        console.log('test list 1',projectItem)
        console.log('test list props titre',projectAllProps)
    }

    return(<>
            <div><h4>{projectItem.project_title}</h4><span> | {projectItem.project_localisation}</span>
            </div>
            <p>{projectItem.project_description}</p>
            <h5>{projectItem.project_objectif} €</h5>
            <button onClick={addUp}>
                Up the project</button>
            <span>{countUp}</span>
            <button onClick={test}>test</button>
        </>

    )
}
export default ProjectItem;