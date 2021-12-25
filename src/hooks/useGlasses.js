import { useEffect, useState } from "react"

const useGlasses = () =>{
    const [products, setProducts] = useState();
    useEffect(()=>{
        fetch('http://localhost:5000/glasses')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    return {products, setProducts};
};

export default useGlasses;