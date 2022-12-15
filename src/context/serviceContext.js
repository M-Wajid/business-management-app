import { createContext, useState, useEffect } from 'react';
import axios from 'axios';


export const ServicesContext = createContext({
  services: [],
});

export const ServicesProvider = ({ children }) => {
  const [services, setServices] = useState([]);


  useEffect(()=> {
    const API= "/api/v1/services";
    axios.get(API).then(res=> {
      console.log (res.data.data.services)
      setServices(res.data.data.services)
    })
  
  }, [])

  const value = { services };
  return (
    <ServicesContext.Provider value={value}>
      {children}
    </ServicesContext.Provider>
  );
};