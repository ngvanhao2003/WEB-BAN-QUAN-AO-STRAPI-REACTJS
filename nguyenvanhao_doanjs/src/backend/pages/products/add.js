import { useState, useEffect } from "react";
import apiCategory from "../../../api/apiCategory";
import apiBrand from "../../../api/apiBrand";
import axiosInstance from "../../../api/axios";
import apiProduct from "../../../api/apiProduct";
import { useNavigate } from "react-router-dom";
import slug from "slug"; 

function ProductAdd() {
    const [productName, setProductName] = useState('');
    
    const [catId, setCatId] = useState('');
    const [price, setPrice] = useState('');
    const [salePrice, setSalePrice] = useState(0);
    const [description, setDescription] = useState('');
    const [isOnSale, setIsOnSale] = useState(false);
    const [image, setImage] = useState(null);
    const [brandId, setBrandId] = useState('');

    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        apiCategory.getAll().then(res => {
            try {
                const categoryData = res.data.map(item => ({
                    id: item.id,
                    name: item.attributes.category_name,
                }));
                setCategories(categoryData);
            } catch (e) {
                console.log(e);
            }
        });
    }, []);

    useEffect(() => {
        apiBrand.getAll().then(res => {
            try {
                const brandData = res.data.map(item => ({
                    id: item.id,
                    name: item.attributes.brand_name,
                }));
                setBrands(brandData);
            } catch (e) {
                console.log(e);
            }
        });
    }, []);

    const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = {
        product_name: productName,
        slug: slug(productName),
        cat_id: catId,
        price: price,
        sale_price: salePrice,
        description: description,
        is_on_sale: isOnSale,
        image: [],
        brand_id: brandId,
        category: catId,
        brand: brandId,
    };

    let file = new FormData();
    file.append('files', image);

    axiosInstance.enableUploadFile();

    try {
        const uploadResponse = await axiosInstance.post("/upload", file);
        const fileId = uploadResponse.data[0].id;
        productData.image.push(fileId);

        axiosInstance.enableJson();
        const responseProduct = await apiProduct.createProduct({ data: productData });
        console.log('Product added successfully', responseProduct);
        navigate("/admin/products/1");
    } catch (err) {
        console.error('Error uploading file or creating product:', err.response?.data || err.message);
    }
};


    return (
        <div style={{ width: "90%", margin: "auto" }}>
            <h1>Thêm sản phẩm</h1>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-7">
                        <div className="mb-3 mt-3">
                            <label htmlFor="product_name" className="form-label">Tên sản phẩm</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="product_name" 
                                placeholder="Nhập tên sản phẩm" 
                                name="product_name" 
                                value={productName} 
                                onChange={(e) => setProductName(e.target.value)} 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="slug" className="form-label">Slug</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="slug" 
                                placeholder="Nhập slug" 
                                name="slug" 
                                value={slug(productName)} 
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="parent_id" className="form-label">Danh mục cha</label>
                            <select 
                                className="form-control" 
                                id="parent_id" 
                                value={catId} 
                                onChange={(e) => setCatId(e.target.value)}
                            >
                                {categories.map((category, index) => (
                                    <option key={index} value={category.id}>{category.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Đơn giá</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="price" 
                                placeholder="Nhập đơn giá" 
                                name="price" 
                                value={price} 
                                onChange={(e) => setPrice(e.target.value)} 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Mô tả sản phẩm</label>
                            <textarea 
                                className="form-control" 
                                id="description" 
                                placeholder="Nhập mô tả sản phẩm" 
                                name="description" 
                                value={description} 
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                    <div className="col-md-5 mt-5">
                        <div className="mb-3">
                            <label htmlFor="is_on_sale" className="form-label" style={{ marginRight: "20px" }}>Giảm giá</label>
                            <input 
                                type="checkbox" 
                                className="form-check-input" 
                                id="is_on_sale" 
                                name="is_on_sale" 
                                checked={isOnSale} 
                                onChange={(e) => setIsOnSale(e.target.checked)} 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="sale_price" className="form-label">Giá khuyến mãi</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="sale_price" 
                                placeholder="Nhập giá khuyến mãi" 
                                name="sale_price" 
                                value={salePrice} 
                                onChange={(e) => setSalePrice(e.target.value)} 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Hình ảnh</label>
                            <input 
                                type="file" 
                                className="form-control" 
                                name="image" 
                                id="image" 
                                onChange={(e) => setImage(e.target.files[0])} 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="brand_id" className="form-label">Nhà cung cấp</label>
                            <select 
                                className="form-control" 
                                name="brand_id" 
                                value={brandId} 
                                onChange={(e) => setBrandId(e.target.value)}
                            >
                                {brands.map((brand, index) => (
                                    <option key={index} value={brand.id}>{brand.name}</option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Them san pham</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ProductAdd;
