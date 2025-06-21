import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { imageURL } from "../../../api/config";
import apiProduct from "../../../api/apiProduct";

function ProductDetail() {
    const { slug } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        apiProduct.getDetailProductBySlug(slug)
            .then((res) => {
                const productData = res.data[0];
                if (productData) {
                    setProduct(productData);
                }
            })
            .catch((err) => {
                console.error("API Error: " + err.message);
            });
    }, [slug]);

    if (!product) {
        return <div>No product found</div>;
    }

    const { attributes } = product;
    const imageUrl = attributes.image?.data?.attributes?.url ? `${imageURL}${attributes.image.data.attributes.url}` : "path/to/placeholder-image.jpg";

    return (
        <div style={{ width: "90%", margin: "auto" }}>
            <h1>Chi tiết sản phẩm</h1>
            <div className="product-detail">
                <div className="row">
                    <div className="col-md-6">
                        <img src={imageUrl} alt={attributes.product_name} style={{ width: "100%" }} onError={(e) => { e.target.src = "path/to/placeholder-image.jpg"; }} />
                    </div>
                    <div className="col-md-6">
                        <h2>{attributes.product_name}</h2>
                        <p><strong>Giá:</strong> {attributes.price}</p>
                        {attributes.is_on_sale && (
                            <p><strong>Giá khuyến mãi:</strong> {attributes.sale_price}</p>
                        )}
                        <p><strong>Mô tả:</strong> {attributes.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;