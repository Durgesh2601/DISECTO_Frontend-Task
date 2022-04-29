import "./styles/Review.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react';
import { addReview, removeSelectedProducts, selectedProduct } from "../Redux/action";

export const Review = () => {
    const {id} = useParams();
    const [text, setText] = useState("");
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

   const handlePost = () => {
       dispatch(addReview(text));
   }
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
            <Card sx={{ maxWidth: 405, mb : 4 }} key={product.id}>
                <CardActionArea>
                <CardMedia sx={{p : 2}}
                component="img"
                height="250"
                image={product.image} alt="green iguana"/>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">{product.title}</Typography>
                <Typography variant="h6" color="text.secondary" sx={{mb : 1}}>{product.category}</Typography>
                <Typography variant="body2" color="text.secondary">{product.description}</Typography>
                <Typography variant="h6" color="#1976d2" component="div" sx={{mt:1}}>Price : ₹{product.price}</Typography>
                </CardContent>
                </CardActionArea>
                </Card>
            </div>
            <div>
            <Typography gutterBottom variant="h5" component="div">Reviews</Typography>

            <TextField fullWidth label="Add Review" id="fullWidth" onChange={(e) => setText(e.target.value)} />
            <Button variant="contained" sx={{mt:1}} onClick={handlePost}>Post</Button>
            </div></>)}
        </div>
    </>)
}