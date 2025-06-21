import { useEffect, useState } from "react";
import apiCategory from "../../../api/apiCategory";
import { Link } from "react-router-dom";

function CategoryList()
{   
    const [categories, setCategories] = useState([]);
    const [delCategoryItem, setDelCategoryItem] = useState([]);

    useEffect(() => {
        apiCategory.getAll().then(res => {
            try{
                const categoryData = res.data.map((item) => {
                    return {
                        id : item.id,
                        name : item.attributes.category_name,
                        parent_id: item.attributes.parent_id,
                        slug: item.attributes.slug
                    }
                });
                setCategories(categoryData);
            }catch(e){
                console.log(e);
            }
        })
    },[delCategoryItem]);
    const delCategory = async (id) => {
        apiCategory.delCategoryById(id).then(res => {
            try{
                alert("Xóa thành công");
                setDelCategoryItem(id);
            }catch(e){
                console.log(e);
            }
        });
    };
    return(
        <div>
            <h1>Danh sách danh mục</h1>
            <button style={{ marginBottom: "30px" }}><Link className="btn btn-primary" to="/admin/addCategory">Thêm danh mục</Link></button>
            <table className="table table-striped table-bordered">
                <tr><th>ID</th><th>Danh Mục</th><th>Danh Mục Cha</th><th>Slug</th><th>Hành Động </th></tr>
                {
                    categories.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>
                                    {
                                        categories.map((category,index)=>{
                                            if(category.id===item.parent_id){
                                                return category.name;
                                            }
                                        })
                                    }
                                </td>
                                <td>{item.slug}</td>
                                <td>
                                    <button><Link className="btn btn-success" to={`/admin/editCategory/${item.id}`}>edit</Link></button>
                                    <button><Link className="btn btn-info" onClick={(e) => delCategory(item.id)}>delete</Link></button>
                                </td>
                            </tr>
                        );
                    })
                }
            </table>
        </div>
    );
}

export default CategoryList;