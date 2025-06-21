import React, { useContext } from "react";
import Menu from "./menu";
import UserContext from "../context/userContext";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header(){
    const getDataCart = useSelector(state => state.cart.carts);
    const {user} = useContext(UserContext);
    if(user){
        var username = user.username;
    }else{
        var username = "";
    }
    return(
        <header className="section_header bg-white">
        <div className="container">
            <div className="row">
                <div className="col-lg-2 py-3">
                    <img src="logo.webp" alt=""/>
                </div>
                <div className="col-lg-8 py-2">
                <Menu/>
                </div>
                <div className="col-lg-2 item-action py-4 d-flex group-action">
                    <div className="item-action px-2">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="item-action px-3">
                        <i className="fa-regular fa-user">{username}</i>
                    </div>
                    <div className="item-action px-2">
                        <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i>
                        <span className="badge text-black">{getDataCart.length}</span></Link>
                    </div>
                </div>
            </div>
        </div>
</header>
    );
}

export default Header;