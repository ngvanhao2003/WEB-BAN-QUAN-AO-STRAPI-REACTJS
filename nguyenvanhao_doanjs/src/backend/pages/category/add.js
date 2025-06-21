import apiCategory from "../../../api/apiCategory";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import slug from "slug"; 


function CategoryAdd() {
    const [catName, setCatName] = useState("");
    const [parentID, setParentID] = useState("");
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        apiCategory.getAll().then(res => {
            try {
                const categoryData = res.data.map((item) => {
                    return {
                        id: item.id,
                        name: item.attributes.category_name,
                        parent_id: item.attributes.parent_id,
                        slug: item.attributes.slug,
                    };
                });
                setCategories(categoryData);
            } catch (e) {
                console.log(e);
            }
        });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const category = {
            category_name: catName,
            parent_id: parseInt(parentID),
            slug: slug(catName),
        };
        try {
            const response = await apiCategory.createCategory({ data: category });
            alert("Thêm thành công");
            navigate("/admin/category");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container">
            <h1>Thêm danh mục</h1>
            <form onSubmit={handleSubmit} className="col-md-6 mx-auto">
                <div className="form-group">
                    <label htmlFor="category_name">Tên danh mục</label>
                    <input type="text" className="form-control" name="category_name" value={catName} onChange={(e) => setCatName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="parent_id">Danh mục cha</label>
                    <select className="form-control" name="parent_id" value={parentID} onChange={(e) => setParentID(e.target.value)}>
                        <option value="0">Không có danh mục cha</option>
                        {categories.map((item, index) => (
                            <option key={index} value={item.id}>{item.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="slug">Slug</label>
                    <input type="text" className="form-control" name="slug" value={slug(catName)} required />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Thêm danh mục</button>
            </form>
        </div>
    );
}

export default CategoryAdd;
