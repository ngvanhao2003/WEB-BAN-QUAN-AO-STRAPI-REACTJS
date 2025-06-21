import React, { useContext } from "react";
import UserContext from "../../context/userContext";
import './checkout.css';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Checkout(){
    const {user} = useContext(UserContext);
    const getDataCart = useSelector((state)=>state.cart.carts);
    const totalAmount = useSelector((state)=>state.cart.totalAmount);
    return(
        user ?
        <div className="cart row">
            <h1 style={{ textAlign: "center" }}>Thanh toan</h1>
            <div className="col-6">
                <form>
                    <h3 style={{ textAlign: "center" }}>Thong tin khach hang</h3>
                    <div className="mb-3">
                        <label for="UserName" className="form-label">Ho ten</label>
                        <input type="text" className="form-control" value={user.username}/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" value={user.email}/>
                    </div>
                    <div className="mb-3">
                        <label for="phone" className="form-label">Phone</label>
                        <input type="text" className="form-control" value={user.phone}/>
                    </div>
                    <div className="mb-3">
                        <label for="address" className="form-label">Address</label>
                        <input type="text" className="form-control" value={user.address}/>
                    </div>
                    <div className="mb-3">
                        <label for="note" className="form-label">Comment</label>
                        <textarea className="form-control"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ alignItems: "center" }}>Thanh toan</button>
                </form>
            </div>
            <div className="col-md-6">
                <h3>Thong tin gio hang</h3>
                <table className="table table-bordered">
                    <tr>
                        <th>Ten san pham</th>
                        <th>Don gia</th>
                        <th>So luong</th>
                        <th>Thanh vien</th>
                    </tr>
                    {
                        getDataCart.map((e)=>{
                            return(
                                <tr>
                                    <td>{e.name}</td>
                                    <td>{e.price}</td>
                                    <td>{e.quantity}</td>
                                    <td>{e.price * e.quantity}</td>
                                </tr>
                            )
                        })
                    }
                    <tr><th colSpan={3}>Tong tien</th><th>{totalAmount}</th></tr>
                </table>
            </div>
        </div>:
        <div className="cart">
            <h1 style={{ textAlign: "center" }}>Ban can dang nhap de thanh toan</h1>
            <button type="button" className="btn btn-info"><Link to="/login" className='text-white text-decoration-none'>Dang nhap</Link></button>
        </div>
    )
}

export default Checkout;