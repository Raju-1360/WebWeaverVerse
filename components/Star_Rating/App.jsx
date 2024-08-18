import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './style.css';

export const StarRating = ({ star = 5 }) => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handlerClick(index) {
          setRating(index);
        
    }

    function handlerMove(index) {
        setHover(index);
    }

    function handlerLeave() {
        setHover(rating); 
    }

    return (
        <>
            <h1>RatingStars</h1>
            <div className="rating">
                {
                    [...Array(star)].map((_, index) => {
                        index += 1;
                        return (
                            <FaStar
                                size={40}
                                key={index}
                                onClick={() => handlerClick(index)}
                                onMouseMove={() => handlerMove(index)}
                                onMouseLeave={handlerLeave}
                                className={index <= (hover || rating) ? "enable" : "disable"}
                            />
                        );
                    })
                }
            </div>
        </>
    );
};
