import { useEffect, useState } from "react";
import { useAppSelector } from "../store";
import { useNavigate } from "react-router-dom";

const useAuthToken = () => {
    const [authToken, setAuthToken] = useState<string | null>(null);
    const selectorUser = useAppSelector((state) => state.user);
    const router = useNavigate();
    
    useEffect(() => {
       if(selectorUser.token === null || selectorUser.token === undefined){
           router('/');

       }else{
              setAuthToken(selectorUser.token);
       }

    }, []);
    
   
    
    return { authToken};
}

export default useAuthToken