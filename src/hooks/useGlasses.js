import { useEffect, useState } from "react"

const useGlasses = () =>{
    const [glasses, setGlasses] = useState();
    useEffect(()=>{
        fetch('http://localhost:5000/glasses')
        .then(res => res.json())
        .then(data => setGlasses(data))
    },[]);
    return { glasses, setGlasses};
};

export default useGlasses;