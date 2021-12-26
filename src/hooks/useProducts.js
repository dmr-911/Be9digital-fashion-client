import { useEffect, useState } from "react"

const useProducts = () =>{
    const [products, setProducts] = useState();
    useEffect(()=>{
        fetch('https://be9digital-market.herokuapp.com/e_products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    return {products, setProducts};
};

export default useProducts;