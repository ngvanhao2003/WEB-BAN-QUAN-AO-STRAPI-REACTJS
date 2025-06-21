import React from "react";
import { Link } from "react-router-dom";
import { imageURL } from "../../../api/config";
import './product-item.css';

function ProductItem(props){
    return(
        <div className="col-md-3 productItem">
            <div className="card px-4 py-3 product-Item" key={props.key}>
                <Link to={`/product-detail/${props.product.slug}`} key="props.key"> 
                <img src={imageURL + props.product.image} alt={props.product.name} style={{ width: '100%' , height: '100%'}}/>
                <h5 className="card-title">{props.product.name}</h5>
                <h6 className="card-price" key={props.key}>{props.product.price}</h6>
                </Link>
            </div>
        </div>

    );
}

export default ProductItem;
