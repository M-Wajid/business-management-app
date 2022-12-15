import { createContext, useState, useEffect } from 'react';
import axios from 'axios';


export const ProjectsContext = createContext({
  projects: [],
});

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);


  useEffect(()=> {
    const API= "/api/v1/projects";
    axios.get(API).then(res=> {
      console.log (res.data.data.projects)
      setProjects(res.data.data.projects)
    })
  
  }, [])

  const value = { projects };
  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
};