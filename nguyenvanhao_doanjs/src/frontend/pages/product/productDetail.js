import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiProduct from "../../../api/apiProduct";
import { imageURL } from "../../../api/config";
import { useDispatch } from "react-redux";
import { ADD } from "../../../redux/action/cartAction";

function ProductDetail() {
    const { slug } = useParams();
    const [productDetail, setProductDetail] = useState({});
    const dispatch = useDispatch();
    const [amountItem, setAmountItem] = useState(1);

    useEffect(() => {
        apiProduct.getDetailProductBySlug(slug).then((res) => {
            try {
                const productAttributes = res.data[0].attributes;
                const product = {
                    id: res.data[0].id,
                    name: productAttributes.product_name,
                    price: productAttributes.price,
                    slug: productAttributes.slug,
                    image: productAttributes.image.data.attributes.url,
                    description: productAttributes.description,
                };
                setProductDetail(product);
            } catch (err) {
                console.log("Error: ", err.message);
            }
        });
    }, [slug]);

    const handleAddToCart = () => {
        const product = {
            ...productDetail,
            amount: amountItem
        }
        dispatch(ADD(product));
    }

    const increaseItemCart = () => {
        setAmountItem(prevAmount => prevAmount + 1);
    }

    const decreaseItemCart = () => {
        if (amountItem > 1) {
            setAmountItem(prevAmount => prevAmount - 1);
        }
    }

    return (
        <div>
            <h1 className="text-center">Chi Tiết Sản Phẩm</h1>
            <div className="row px-5 my-5">
                <div className="col-md-5 px-5 my-4">
                    <img src={imageURL + productDetail.image} alt={productDetail.name} className="imageChange" style={{ width: "400px" }}/>
                </div>
                <div className="col-md-7 detail">
                    <h1 className="py-2">{productDetail.name}</h1>
                    <h5 className="mb-4">Giá: {productDetail.price}$</h5>
                    <div className="mb-4">
                        <h5>Đánh giá sản phẩm:</h5>
                        <span>♥️ ♥️ ♥️ ♥️ ♥️ (20 đánh giá)</span>
                    </div>
                    <div className="mb-4">
                        <h5>Mô tả:</h5>
                        <p>{productDetail.description}</p>
                    </div>
                    <div className="row mb-3 align-items-center">
                        <div className="col-md-3 col-6 py-2">
                            <label htmlFor="quantity">Số lượng:</label>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <button className="btn btn-sm btn-success" onClick={decreaseItemCart}>
                                        <i className="fas fa-minus"></i>
                                    </button>
                                </div>
                                <input
                                    type="number"
                                    className="form-control text-center"
                                    id="quantity"
                                    value={amountItem}
                                    onChange={(e) => setAmountItem(Math.max(1, Number(e.target.value)))}
                                    min="1"
                                />
                                <div className="input-group-append">
                                    <button className="btn btn-sm btn-primary" onClick={increaseItemCart}>
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 py-2">
                            <button type="button" className="btn btn-success" onClick={handleAddToCart}>
                                <i className="fas fa-cart-plus"></i> Thêm vào giỏ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
