import React, { useEffect,useState } from "react";
import apiProduct from "../../../api/apiProduct";
import ProductItem from "../product/productItem";
import Slider from "../../partial/slider";



function Home(){
    const [newProducts, setNewProducts] = useState([]);
    const [promotionProducts, setPromotionProducts] = useState([]);
    useEffect(() => {
    apiProduct.getNewest().then((res) => {
        try{
            const newProductData = res.data.map((product) =>{
                return {
                    id: product.id,
                    name: product.attributes.product_name,
                    price: product.attributes.price,
                    slug: product.attributes.slug,
                    image: product.attributes.image.data.attributes.url,
                }});
            setNewProducts(newProductData);
        }
        catch(err){
            console.log(err);
        }
    });
},[]);


useEffect(() => {
    apiProduct.getPromotion().then((res) => {
        try{ 
            const promotionProductData = res.data.map((product) =>{
                return {
                    id: product.id,
                    name: product.attributes.product_name,
                    price: product.attributes.price,
                    slug: product.attributes.slug,
                    image: product.attributes.image.data.attributes.url,
                }});
            setPromotionProducts(promotionProductData);
        }
        catch(err){
            console.log(err);
        }
    });
},[]);
    return(
        <div className="row px-4 d-flex justify-content-between">
            <Slider/>
            <h1 style={{ textAlign: 'center' }}>Sản phẩm mới nhất</h1>
            {
                newProducts.map((product, index) => {
                    return(
                        <ProductItem key={index} product={product}/>
                    )
                })
            }
            <h1 style={{ textAlign: 'center' }}>Sản phẩm khuyến mãi</h1>
            {
                promotionProducts.map((product, index) => {
                    return(
                        <ProductItem key={index} product={product}/>
                    )
                })
            }

        </div>
    )
}

export default Home;