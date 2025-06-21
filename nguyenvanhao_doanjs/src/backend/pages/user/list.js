import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiUser from "../../../api/apiUser";
import { MdOutlineRemoveRedEye } from "react-icons/md";
function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        apiUser.getAll()
            .then(res => {
                if (Array.isArray(res)) {
                    const userData = res.map(item => ({
                        id: item.id,
                        name: item.username,
                        email: item.email,
                        phone: item.phone || "N/A",
                        address: item.address || "N/A",
                    }));
                    setUsers(userData);
                } else {
                    console.error("Unexpected response structure:", res);
                }
            })
            .catch(err => {
                console.error("Error fetching user data:", err);
            });
    }, []);

    return (
        <div>
            <h1>Danh sách người dùng</h1>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên người dùng</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th>Địa chỉ</th>
                        <th>Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.address}</td>
                            <td>
                                <Link to={`/admin/detailUser/${item.id}`} className="btn btn-outline-primary btn-sm"><MdOutlineRemoveRedEye /></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;
