import React from "react";
import './assets/css/layoutsite.css';
import './assets/bootstrap/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from "./partial/header";
import Footer from "./partial/footer";
// import Slider from "./partial/slider";
import { Outlet } from "react-router-dom";

function Index(){
    return(
        <div>
            <Header />
            <div className="row content">
                <Outlet/>
            </div>
            <Footer />
        </div>
    );
}
export default Index;