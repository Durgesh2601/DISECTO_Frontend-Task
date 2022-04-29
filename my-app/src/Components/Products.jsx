import "./styles/Product.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useEffect } from "react";
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setProducts } from "../Redux/action";

export const Products = () => {
   const products = useSelector((state) => state.allProducts.products);
   const dispatch = useDispatch();
   useEffect(() => {
    fetchProducts();
   }, []);
   const fetchProducts = () => {
       fetch("https://fakestoreapi.com/products").then(res => res.json()).then((d) => {
            dispatch(setProducts(d));
       }).catch((err) => {
           console.log(err);
       });
   };
    return (<>
        <h1 align="center">Available Products</h1>
        <div className='container'>
        {products.map((e) => {
            return (
                <Link to={`/products/${e.id}`}>
                <Card sx={{ maxWidth: 345, mb : 4 }} key={e.id}>
                <CardActionArea>
                <CardMedia sx={{p : 2}}
                component="img"
                height="250"
                image={e.image} alt="green iguana"/>
                <CardContent>
                <Typography noWrap gutterBottom variant="h5" component="div">{e.title}</Typography>
                <Typography variant="h6" color="text.secondary" sx={{mb : 1}}>{e.category}</Typography>
                <Typography noWrap variant="body2" color="text.secondary">{e.description}</Typography>
                <Typography variant="h6" color="#1976d2" component="div" sx={{mt:1}}>Price : ₹{e.price}</Typography>
                </CardContent>
                </CardActionArea>
                </Card>
                </Link>
            )
        })}
    </div></>)
}

