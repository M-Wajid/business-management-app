import { createContext, useState, useEffect } from 'react';
import axios from 'axios';


export const DesignsContext = createContext({
  designs: [],
});

export const DesignsProvider = ({ children }) => {
  const [designs, setDesigns] = useState([]);


  useEffect(()=> {
    const API= "/api/v1/designs";
    axios.get(API).then(res=> {
      console.log (res.data.data.designs)
      setDesigns(res.data.data.designs)
    })
  
  }, [])

  const value = { designs };
  return (
    <DesignsContext.Provider value={value}>
      {children}
    </DesignsContext.Provider>
  );
};