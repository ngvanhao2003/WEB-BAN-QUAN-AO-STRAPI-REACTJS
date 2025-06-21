import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiUser from "../../../api/apiUser";

function UserDetail() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        apiUser.getUserById(id)
            .then(res => {
                setUser(res.data); // Assuming API returns user data directly
            })
            .catch(err => {
                console.error("Error fetching user data:", err);
            });
    }, [id]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Chi tiết người dùng</h1>
            <div>
                <p><strong>ID:</strong> {user.id}</p>
                <p><strong>Tên người dùng:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Số điện thoại:</strong> {user.phone || "N/A"}</p>
                <p><strong>Địa chỉ:</strong> {user.address || "N/A"}</p>
                {/* Bổ sung các thông tin khác của người dùng cần thiết */}
            </div>
        </div>
    );
}

export default UserDetail;
