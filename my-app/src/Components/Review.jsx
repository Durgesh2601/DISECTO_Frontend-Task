import "./styles/Review.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import React, { useEffect } from 'react';

import { removeSelectedProducts, selectedProduct } from "../Redux/action";

export const Review = () => {
    const {id} = useParams();
    const product = useSelector((state) => state.specificProduct);
    const dispatch = useDispatch();
    useEffect(() => {
      if(id && id !== "") {
        fetchProduct(id);
      }  
      return () => {
        dispatch(removeSelectedProducts(id))
      }
    }, [id])
    console.log(id)
    
    const fetchProduct = (id) => {
        fetch(`https://fakestoreapi.com/products/${id}`).then(d => d.json()).then((res) => {
            dispatch(selectedProduct(res));
        }).catch((err) => {
            console.log(err);
        });
    }
    return (<>
        <div className="container1">
        {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (<>
            <div>
            <Card sx={{ maxWidth: 345, mb : 4 }} key={product.id}>
                <CardActionArea>
                <CardMedia sx={{p : 2}}
                component="img"
                height="250"
                image={product.image} alt="green iguana"/>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">{product.title}</Typography>
                <Typography variant="h6" color="text.secondary" sx={{mb : 1}}>{product.category}</Typography>
                <Typography noWrap variant="body2" color="text.secondary">{product.description}</Typography>
                <Typography variant="h6" color="#1976d2" component="div" sx={{mt:1}}>Price : ₹{product.price}</Typography>
                </CardContent>
                </CardActionArea>
                </Card>
            </div>
            <div>
                
                
            </div></>)}
        </div>
    </>)
}