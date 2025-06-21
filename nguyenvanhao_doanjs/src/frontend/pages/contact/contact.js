function Contact()
{
    return(
        <div>

            <div className="layout-contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 form-contact">
                            <h2 style={{
                                fontSize: '18px',
                                textTransform: 'uppercase',
                                fontWeight: 'bold',
                                marginTop: '15px',
                                color: '#494949'
                            }}>
                                Thông tin liên hệ
                            </h2>
                            <p style={{
                                fontSize: '14px',
                                color: '#656565',
                                fontWeight: '400',
                                marginTop: '20px'
                            }}>
                                Bạn hãy điền nội dung tin nhắn vào form dưới đây và gửi cho chúng tôi.
                                Chúng tôi sẽ trả lời bạn sau khi nhận được.
                            </p>
                            <div id="pagelogin">
                                <div className="group_contact">
                                    <input
                                        placeholder="Họ và tên"
                                        type="text"
                                        className="form-control form-control-lg"
                                        required
                                        name="contact[Name]"
                                    />
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <input
                                                type="number"
                                                placeholder="Số điện thoại"
                                                name="contact[phone]"
                                                className="form-control form-control-lg"
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <input
                                                placeholder="Email"
                                                type="email"
                                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                                required
                                                id="email1"
                                                className="form-control form-control-lg"
                                                name="contact[email]"
                                            />
                                        </div>
                                    </div>
                                    <textarea
                                        placeholder="Nội dung"
                                        name="contact[body]"
                                        id="comment"
                                        className="form-control content-area form-control-lg"
                                        rows="5"
                                        required
                                    ></textarea>
                                    <button
                                        style={{ backgroundColor: '#656565', color: 'white' }}
                                        type="submit"
                                        className="btn-lienhe"
                                    >
                                        Gửi tin nhắn
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5 map_container">
                        <div className="col-md py-3 "style={{ width: "40px" }}>
                            <div className="map-responsive">
                                <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=10.823418073863236, 106.63884193921126" width= "800" height= "600" frameborder="0" style={{border: "0;"}} allowfullscreen></iframe>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;