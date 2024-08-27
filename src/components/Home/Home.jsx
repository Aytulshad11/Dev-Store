import "./Home.scss";
import { useEffect, useContext } from "react";
import Banner from "./Banner/Banner"
import Category from "./Category/Category";
import Products from "../Products/Products" ;
import {fetchDataFromApi} from "../../utils/api.js";
import {Context} from "../../utils/Context";
const Home = () => {
    const {categories, setCategories, products, setProducts} = useContext(Context);
    
    useEffect(() => {
        getProducts()
        getCategories()
    }, [])

    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then(res=> {
            console.log("Prod: ", res);
            setProducts(res);
           
        });
    }

    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then(res=> {
            console.log("Categ: ", res);
            setCategories(res);
           
        });
    }
      // Add a log to see the categories state in Home component
      console.log("Categories state in Home:", categories);

      // Check if categories and categories.data are available before logging
      if (categories && categories.data) {
          console.log("Categories data in Home:", categories.data);
      } else {
          console.log("Categories data is not available yet.");
      }
    return (
        <div>
            <Banner />
                <div className="main-content">
                 <div className="layout">
                    {/* <Category categories = {categories}/> */}
                    {categories && categories.data ? (
                        <Category categories={categories} />
                    ) : (
                        <div>Loading categories...</div>
                    )}

{products && products.data ? (
                        <Products products={products} headingText="Popular Products"/>
                    ) : (
                        <div>Loading categories...</div>
                    )}
                    
            </div>
        </div>
        
    </div>
        );
};

export default Home;
