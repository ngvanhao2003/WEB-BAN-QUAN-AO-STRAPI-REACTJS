import { Link } from "react-router-dom";

function IndexAdmin() {
    return (
        <div>
            {/* Header */}
            <div className="p-5 bg-primary text-white text-center">
                <h1>Trang quản lý</h1>
            </div>

            {/* Navigation */}
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        {/* Trang chủ */}
                        <li className="nav-item">
                            <Link className="nav-link active" to="/admin">
                                Trang chủ
                            </Link>
                        </li>
                        
                        {/* Dropdown menu */}
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                            >
                                Danh sách quản lý
                            </Link>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item" to="/admin/category">
                                        Danh mục
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/admin/products/1">
                                        Sản phẩm
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/admin/users/1">
                                        Người dùng
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="#">
                                        Đơn hàng
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="#">
                                        Nhà cung cấp
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Main Content */}
            <div className="container mt-5">
                <div className="row">
                    <Outlet />
                </div>
            </div>

            {/* Footer */}
            <div className="mt-5 p-4 bg-dark text-white text-center">
                <p>Footer</p>
            </div>
        </div>
    );
}

export default IndexAdmin;
