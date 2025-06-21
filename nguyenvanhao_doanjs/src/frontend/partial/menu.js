import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './menu.css'; // Import the CSS file
import apiCategory from "../../api/apiCategory";
import apiBrand from "../../api/apiBrand";
import UserContext from "../context/userContext";

function Menu() {
    const {user} = useContext(UserContext);
    const [subMenu, setSubMenu] =useState([]);
    const [brandData, setBrandData] = useState([]);
    useEffect(() => {
        apiCategory.getAll().then((res) => {
            try{
               const menuData = res.data.map((item) =>{
                    return {
                        id: item.id,
                        name: item.attributes.category_name,
                        slug: item.attributes.slug,
                        parent: item.attributes.parent_id
                    }
               });
               setSubMenu(menuData);
               console.log(menuData);
            }catch(e){
                console.log(e);
            }
        });
    }, []);
    useEffect(() => {
        apiBrand.getAll().then((res) => {
            try {
                const brandData = res.data.map((item) => {
                    return {
                        id: item.id,
                        name: item.attributes.brand_name,
                        slug: item.attributes.slug,
                    };
                });
                setBrandData(brandData);
                console.log(brandData);
            } catch (e) {
                console.log(e);
            }
        });
    }, []);

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Trang chủ</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <div className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/products" id="navbarDropdown" role="button">
                                    Thương hiệu nổi tiếng
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="productDropdown">
                                    {brandData.map((brand, index) => {
                                        return (
                                            <li className="dropdown-item" key={index}>
                                                <Link className="nav-link" to={`/products-by-brand/${brand.slug}`}>{brand.name}</Link>
                                                <ul>
                                                {subMenu.filter(sub => sub.parent === brand.id).map((sub, subIndex) => (
                                                    <li key={subIndex}>
                                                        <Link to={`/products-by-brand/${sub.slug}`}>{sub.name}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <a className="nav-link" href="/contact">Liên hệ</a>
                            <a className="nav-link" href="/register">Đăng ký</a>
                            <a className="nav-link">
                            {
                                user ? (
                                    <li><Link to="/logout">Đăng xuất</Link></li>
                                ):(
                                    <li><Link to="/login">Đăng nhập</Link></li>
                                )
                            }
                            </a>
                            <div className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/products" id="navbarDropdown" role="button">
                                    Sản phẩm
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="productDropdown">
                                    {subMenu.map((submenu, index) => {
                                        return (
                                            submenu.parent === 0 ? (
                                                <li className="dropdown-item "  key={index}>
                                                    <Link className="nav-link " to={`/products-by-cat/${submenu.slug}`}>{submenu.name}</Link>
                                                    <ul>
                                                        {
                                                            subMenu.map((sub, index) => {
                                                                return (
                                                                    sub.parent === submenu.id ? (
                                                                        <li key={index}>
                                                                            <Link  to={`/products-by-cat/${sub.slug}`}>{sub.name}</Link>
                                                                        </li>
                                                                    ):null
                                                                );
                                                            })
                                                            
                                                        }
                                                    </ul>
                                                </li>
                                            ):null
                                            
                                        );
                                    })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Menu;
