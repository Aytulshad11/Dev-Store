import "./Category.scss";
import Products from "../Products/Products";
import {useParams} from "react-router-dom"
import useFetch from "../../hooks/useFetch";
const Category = () => {
    const {id} = useParams();
    console.log("id is : ",id);
    // const {data} = useFetch(
    //     `api/products?populate=*&[filters][categories][id] = ${id}`
    // );
    const temp = `/api/products?populate=*&[filters][categories][id] = ${id}`;
    console.log("temp: ", temp);
    const {data} = useFetch(temp)
   
    return (
        <div className="category-main-content">
        <div className="layout">
            <div className="category-title">
               
            {data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}
                
            </div>
            <Products innerPage={true} products={data}/>
        </div>
    </div>
);
};

export default Category;
