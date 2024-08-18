import { useEffect, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FaShoppingCart } from "react-icons/fa";

import './styles.css';

export const LoadData = () => {
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState([]);
    const [count, setCount] = useState(0);

    async function fetchProduct() {
        setLoading(true);

        try {
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}`);
            const result = await response.json();
            console.log(result);

            if (result && result.products && result.products.length) {
                setProduct(result.products);
                setLoading(false);
            }
        } catch (e) {
            setLoading(false);
            console.log(e);
        }
    }

    useEffect(() => {
        fetchProduct();
    }, [count]);

   

    if (loading) {
        return <div>Loading data! Please wait...</div>;
    }

    const handlePrev = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleNext = () => {
        if (count < 9) { 
            setCount(count + 1);
        }
    };

    const buttons = () => {
        return (
            <>
                {Array.from({ length: 9 }, (_, i) => (
                    <Button 
                        variant="text" 
                        onClick={() => setCount(i)} 
                        key={i} 
                        id={i}
                    >
                        {i + 1}
                    </Button>
                ))}
            </>
        );
    };

    return (
        <>
            <h1>Gadget Showcase<FaShoppingCart  style={{marginTop:"50px", marginLeft:"20px"}}/></h1>
        
            <div className="main">
                {product && product.length ? 
                    product.map((item) => (
                        <Card className="product" key={item.id}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={item.thumbnail}
                                alt={item.title}
                            />
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Brand: {item.brand}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Category: {item.category}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Description: {item.description}
                                </Typography>
                            </CardContent>
                            <Button variant="contained" className="price-button">
                                Price: ${item.price}
                            </Button>
                        </Card>
                    )) 
                    : null
                }
            </div>

            <div className="btn"> 
                <Button variant="text" onClick={handlePrev} disabled={count === 0}>
                    <GrPrevious /> Previous
                </Button>
                <Button variant="text" onClick={handleNext}>
                    Next <GrNext />
                </Button>
            </div>

            <div className="btns"> 
                {buttons()}
            </div>
        </>
    );
};
