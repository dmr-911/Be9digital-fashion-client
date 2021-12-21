import { useContext } from "react";
import { MarketContext } from "../context/AuthProvider";

const useAuth = () =>{
    return useContext(MarketContext);
};

export default useAuth;