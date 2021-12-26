import { useEffect, useState } from "react"

const useGlasses = () =>{
    const [glasses, setGlasses] = useState();
    useEffect(()=>{
        fetch('https://be9digital-market.herokuapp.com/glasses')
        .then(res => res.json())
        .then(data => setGlasses(data))
    },[]);
    return { glasses, setGlasses};
};

export default useGlasses;