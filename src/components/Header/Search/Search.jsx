import "./Search.scss";
import { useState } from "react";
import prod from "../../../assets/products/earbuds-prod-1.webp"
import {MdClose} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
const Search = ({setShowSearch}) => {
    const [query, ssetQuery] = useState("")
    const navigate = useNavigate()
    
    const onChange = (e) => {
        ssetQuery(e.target.value);
    }

    let {data} = useFetch(
        `/api/products?populate=*&filters[title][$contains]=${query}`
    );

    if(!query.length){
        data = null;
    }
    return (
    <div className="search-modal">
        <div className="search-field">
            <input type="text" 
            autoFocus
            placeholder="Seach for products"
            value={query}
            onChange={onChange}
            />
            <MdClose onClick={()=> setShowSearch(false)}/>
        </div>
        <div className="search-result-content">
            <div className="search-results">
                {data?.data?.map((item) => (
                    <div key={item.id} className="search-result-item" onClick={()=> {
                        navigate("/product/" + item.id);
                        setShowSearch(false);
                    }}>
                    <div className="img-container">
                        <img src={`${import.meta.env.VITE_APP_DEV_URL}${item.attributes.img.data[0].attributes.url}`} alt="" />
                 </div>
                 <div className="prod-details">
                     <span className="name">{item.attributes.title}</span>
                     <span className="desc">{item.attributes.desc}</span>
                
                
                      
            </div>
                </div>
                ))}
                
            </div>
        </div>
    </div>
    );
};

export default Search;
