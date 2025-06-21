import React, { useState, useEffect } from "react";
import apiCategory from "../../../api/apiCategory";
import { useParams, useNavigate } from "react-router-dom";

function CategoryEdit() {
    const { id } = useParams();
    const [catName, setCatName] = useState("");
    const [parentID, setParentID] = useState("0");
    const [slug, setSlug] = useState("");
    const [status, setStatus] = useState("0");
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const res = await apiCategory.getCategoryById(id);
                const categoryData = res.data.data.attributes;
                setCatName(categoryData.category_name);
                setParentID(categoryData.parent_id ? categoryData.parent_id.toString() : "0");
                setSlug(categoryData.slug);
                setStatus(categoryData.status.toString());
            } catch (e) {
                console.log(e);
            }
        };
        fetchCategory();
    }, [id]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await apiCategory.getAll();
                const categoryData = res.data.map((item) => ({
                    id: item.id,
                    name: item.attributes.category_name,
                    parent_id: item.attributes.parent_id,
                    slug: item.attributes.slug
                }));
                setCategories(categoryData);
            } catch (e) {
                console.log(e);
            }
        };
        fetchCategories();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const category = {
            category_name: catName,
            parent_id: parseInt(parentID),
            slug: slug,
            status: status
        };
        try {
            await apiCategory.editCategory(id, { data: category });
            alert("Sửa thành công");
            navigate("/admin/category");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div style={{ width: "50%", margin: "auto" }}>
            <h1 style={{ textAlign: 'center' }}>Sửa danh mục</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-2 mt-2">
                    <label htmlFor="category_name">Tên danh mục:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="category_name" 
                        value={catName}
                        onChange={(e) => setCatName(e.target.value)}
                    />
                </div>
                <div className="form-group mb-2 mt-2">
                    <label htmlFor="parent_id">Danh mục cha:</label>
                    <select 
                        className="form-control" 
                        name="parent_id" 
                        value={parentID} 
                        onChange={(e) => setParentID(e.target.value)}
                    >
                        <option value="0">Không có danh mục cha</option>
                        {categories.map((item) => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group mb-2 mt-2">
                    <label htmlFor="slug">Slug:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="slug" 
                        value={slug} 
                        onChange={(e) => setSlug(e.target.value)}
                    />
                </div>
                <div className="form-group mb-2 mt-2">
                    <label htmlFor="status">Status:</label>
                    <select 
                        className="form-control" 
                        name="status" 
                        value={status} 
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="0">Không hiển thị</option>
                        <option value="1">Hiển thị</option>
                    </select>
                </div>
                <div style={{ marginTop: "20px" }}>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default CategoryEdit;
