import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import apiProduct from "../../../api/apiProduct";
import ProductItem from "./productItem";

const ProductsByCat = () =>{
    const {slug} = useParams();
    const [productsByCat, setProductsByCat] = useState([]);

    useEffect(() => {
        apiProduct.getProductByCatSlug(slug).then((res) => {
            try {
                const data = res.data;
                const products = data.map((item) => {
                    return {
                        id: item.id,
                        name: item.attributes.product_name,
                        price: item.attributes.price,
                        image: item.attributes.image.data.attributes.url,
                        slug: item.attributes.slug,
                    }
                });
                
                setProductsByCat(products);
            } catch (e) {
                console.log("Error: ",e);
            }
        });
    }, [productsByCat]);
    return(
        <div className="row px-5 products py-5">
            <h1>Sản phẩm của chúng tôi</h1>
            {
                productsByCat.map((product, index) => {
                    return (
                        <ProductItem key={index} product={product} />

                    )
                })
            }
        </div>
    );
}
export default ProductsByCat;