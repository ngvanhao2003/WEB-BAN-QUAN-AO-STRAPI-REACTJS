import IndexAdmin from "../backend";
import CategoryAdd from "../backend/pages/category/add";
import CategoryEdit from "../backend/pages/category/edit";
import CategoryList from "../backend/pages/category/list";
import ProductList from "../backend/pages/products/list";
import ProductDetail from "../backend/pages/products/detail";
import ProductAdd from "../backend/pages/products/add";
import ProductEdit from "../backend/pages/products/edit";
import UserList from "../backend/pages/user/list";
import UserDetail from "../backend/pages/user/detail";

const BackendRoute = [
    {'path': '/admin/category', 'component': CategoryList},
    {'path': '/admin/addCategory', 'component': CategoryAdd},
    {'path': '/admin/editCategory/:id', 'component': CategoryEdit},
    {'path': '/admin/products/:page', 'component': ProductList},
    {'path': '/admin/editproduct/:slug', 'component': ProductEdit},
    {'path': '/admin/productdetail/:slug', 'component': ProductDetail},
    {'path': '/admin/addproduct', 'component': ProductAdd},
    {'path': '/admin/users/:page', 'component': UserList},
    {'path': '/admin/detailUser/:id', 'component': UserDetail},
];

export default BackendRoute;