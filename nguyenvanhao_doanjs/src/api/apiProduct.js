import axiosInstance from "./axios";

const apiProduct = {
    //lấy tất cả sản phẩm
    getAll:() => {
        return axiosInstance.get("/products?populate=*").then((res) => res.data);
    },
    //lấy 4 sản phẩm mới nhất
    getNewest: () => {
        return axiosInstance.get("products?sort[0]=createdAt:desc&pagination[limit]=4&populate=*").then((res)=>res.data);

    },
    //lấy 4 sản phẩm khuyến mãi
    getPromotion: () => {
        return axiosInstance.get("/products?filter[is_on_sale]=true&pagination[limit]=4&populate=*").then((res)=>res.data);
    },
    //chi tiết sản phẩm
    getDetailProductBySlug: (slug) => {
        return axiosInstance.get(`/products?filters[slug][$eq]=${slug}&populate=*`).then((res) => res.data);
    },
    //Lấy sản phẩm theo danh mục
    getProductByCatSlug: (slug) => {
        return axiosInstance.get(`/products?filters[category][slug]=${slug}&populate=*`).then((res) => res.data);
    },
    //Lay san pham theo thuong hieu
    getProductByBrandSlug: (slug) => {
        return axiosInstance.get(`/products?filters[brand][slug]=${slug}&populate=*`).then((res) => res.data);
    },
    //lấy sản phẩm phân trang
    getProductPagination: (page, limit) => {
        return axiosInstance.get(`/products?pagination[page]=${page}&pagination[pageSize]=${limit}&populate=*`).then((res) => res.data);
    },
    //thêm san pham
    createProduct: (product) => {
        return axiosInstance.post("/products", product).then((res) => res.data);
    },
    //sua san pham
    updateProduct: (id, data) => {
        return axiosInstance.put(`/products/${id}`, data);
    },
    //xoa san pham
    delProductById: (id) => {
        return axiosInstance.delete(`/products/${id}`);
    },
    getProductById: (slug) => {
        return axiosInstance.get(`/products/${slug}`);
    },

}


export default apiProduct;