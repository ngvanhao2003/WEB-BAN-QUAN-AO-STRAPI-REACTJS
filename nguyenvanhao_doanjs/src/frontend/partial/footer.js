import React from "react";

function Footer(){
    return(
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <h4 className="title-footer no-menu">Về Ego Helios</h4>
                        <div className="item">
                        <div className="icon">
                                <i className="fa-regular fa-map"></i>
                            <i className="font-monospace">Xuân Thủy, Hà Nội</i>
                        </div>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <i className="fa-solid fa-envelope"></i>
                                <a href="mailto:support@sapo.vn" title="Gửi mail">support@sapo.vn</a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <i className="fa-solid fa-phone"></i>
                                <a className="fone" href="tel:0364199361" title="Gọi ngay 0364199361">0364199361</a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon mapsico">
                                <i className="fa-solid fa-location-dot"></i>
                                <a href="danh-sach-cua-hang" title="Hệ thống cửa hàng">Hệ thống cửa hàng</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <h4 className="title-footer arrow current">
                            Chính sách
                        </h4>
                        <ul className="list-menu current">
                            <li><a href="/"></a>Chính sách bán hàng</li>
                            <li><a href="/"></a>Chính sách mua hàng</li>
                            <li><a href="/"></a>Chính sách đổi trả</li>
                            <li><a href="/"></a>Chính sách đặc biệt</li>
                            <li><a href="/"></a>Chính sách Affiliate</li>
                            <li><a href="/"></a>Chính sách đại lý</li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 col-12">
                        <h4 className="title-footer arrow current">
                            Dịch Vụ
                        </h4>
                        <ul className="list-menu current">
                            <li><a href="/"></a>Dịch vụ bảo trì</li>
                            <li><a href="/"></a>Dịch vụ EgoCare</li>
                            <li><a href="/"></a>Dịch vụ hàng</li>
                            <li><a href="/"></a>Dịch vụ vận chuyển</li>
                            <li><a href="/"></a>Dịch vụ sau bán</li>
                            <li><a href="/"></a>Dịch vụ mua lại</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <h4>Giờ mở cửa</h4>
                        <p>Từ 9:00 - 21:30 tất cả các ngày trong tuần (bao gồm cả các ngày lễ, ngày Tết).</p>
                        <h4>Góp ý kiến, khiếu nại</h4>
                        <div className="item">
                            <div className="icon">
                                <i className="fa-solid fa-phone"></i>
                                <a className="fone" href="tel:19006750" title="Gọi ngay 19006750">1900 6750</a>
                            </div>
                        </div>
                        <div className="form-subscribe d-flex">
                            <h4>Nhận khuyến mãi</h4>
                            <div className="formchip" id="formchimp">
                                <form id="mc-form" className="newsletter-form" data-toggle="validator" action="https://gmail.us2.list-manage.com/subscribe/post-json?u=ef7f65e3be67e30ff1c4bd591&amp;id=a7430e9bc5">
                                    <div className="input-group">
                                        <input aria-label="Địa chỉ Email" type="email" className="form-control" placeholder="Nhập email của bạn" name="EMAIL" required="" autocomplete="off"/>
                                        <button className="btn" type="submit" aria-label="Đăng kí" name="subscribe">
                                            Đăng kí
                                        </button>
                                    </div>
                                </form>
                                <div className="mailchimp-alerts">
                                    <div className="mailchimp-submitting"></div>
                                    <div className="mailchimp-success"></div>
                                    <div className="mailchimp-error"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright text-center">
                        @ Bản quyền NVH
                        </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;