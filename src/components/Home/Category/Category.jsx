import "./Category.scss";
import React from "react";
import {useNavigate} from "react-router-dom";
import cat1 from "../../../assets/category/cat-1.jpg";
const Category = ({categories}) => 
    {
        const navigate = useNavigate();

        console.log("categories in category component", categories);
       
    return (<div className="shop-by-category">
        <div className="categories">
            {categories?.data?.map((item)=>(
                <div key={item.id} className="category" onClick={() => navigate(`/category/${item.id}`)} >
                <img src={`${import.meta.env.VITE_APP_DEV_URL}${item.attributes.img.data.attributes.url}`} alt="" />
            </div>
            ))}
            
        </div>
        
    </div>
    );
};

export default Category;
