import { useEffect, useState } from "react"

export const Products = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    },[])
    const getData = (() => {
        fetch("https://fakestoreapi.com/products").then(res => res.json()).then((d) => {
            setData(d);
        });
    });
    console.log(data)
    return (<>
    
    </>)
}