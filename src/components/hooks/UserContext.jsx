import { useState, useEffect, createContext, useContext } from "react";
import { supabase } from "../../supabase/client";

const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
  const [isLogged, setIsLogged] = useState(false)
  const [session, setSession] = useState(null)

  const fetchSession = async () =>{
    const { data } = await supabase.auth.onAuthStateChange((event, session) => {
      setIsLogged(!!session);
      setSession(session);
    });}

  useEffect(() => {
    fetchSession()
  
    return () => {
      if (data && data.subscription) {
          data.subscription.unsubscribe();
      }
  };
  }, []);



  return (
    <AuthContext.Provider value={{ isLogged, session}}>
      {children}
    </AuthContext.Provider>
  );
}


export const useAuth = () => useContext(AuthContext);