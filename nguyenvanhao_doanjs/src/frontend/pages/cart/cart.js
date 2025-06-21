import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CLEAR, TOTAL } from "../../../redux/action/cartAction";
import { Link } from "react-router-dom";
import CartItem from "./cartItem";
import "./cart.css"; // Thêm file CSS tùy chỉnh

function Cart() {
    const getDataCart = useSelector((state) => state.cart.carts);
    const dispatch = useDispatch();
    
    React.useEffect(() => {
        dispatch(TOTAL());
    }, [dispatch, getDataCart]);

    const clearCart = () => {
        dispatch(CLEAR());
    }

    const totalAmount = useSelector((state) => state.cart.totalAmount);
    
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Giỏ hàng</h2>
            <table className="table table-bordered table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>Hình ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Đơn giá</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                        <th>Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    {getDataCart.map((e, index) => (
                        <CartItem key={index} item={e} />
                    ))}
                    <tr className="table-light">
                        <th colSpan={4} className="">Tổng tiền</th>
                        <th colSpan={2}>{totalAmount.toLocaleString()}</th>
                    </tr>
                </tbody>
            </table>
            <div className="d-flex justify-content-between mt-4">
                <button type="button" className="btn btn-danger" onClick={clearCart}>Xóa giỏ hàng</button>
                <Link to="/checkout" className="btn btn-info text-white">Thanh toán</Link>
            </div>
        </div>
    );
}

export default Cart;
