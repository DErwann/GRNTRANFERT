import React,{useState} from "react";
import ProjectListItem from "../Data/ProjectListItem";

export  interface props {
    projectAllProps : ProjectListItem;
    
}

const ProjectItem = ({projectAllProps}:props) => {


    const [projectItem, setProjecItem] = useState(projectAllProps);

    return(<>
            <h4>{projectItem.projectTitle}</h4><span>{projectItem.localisation}</span>
            <p>{projectItem.description}</p>
            <h4>[Montant actuel]/{projectItem.objectif}</h4> <span>[insert pourcentage]</span>
        </>

    )
}
export default ProjectItem;