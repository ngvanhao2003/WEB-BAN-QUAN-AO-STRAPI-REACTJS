import React from "react";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Slider() {
    return (
        <div>
            <Carousel interval={4000}> {/* Đặt interval là 4000 (4 giây) */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="banner1.webp"
                        alt="Slide 1"
                        style={{ height: "350px" }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="banner2.webp"
                        alt="Slide 2"
                        style={{ height: "350px" }}
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slider;
