import { imageURL } from "../../../api/config";
import {FaTrash} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { REMOVE } from "../../../redux/action/cartAction";
function CartItem(props){
    const dispatch = useDispatch();
    const removeItem = (item) => {
        dispatch(REMOVE(item));
    }
    return (
        <tr>
            <td><img style={{ width: "100px" }} src={imageURL + props.item.image} alt="anh" width="100px" height="100px"/></td>
            <td>{props.item.name}</td>
            <td>{props.item.price}</td>
            <td>{props.item.quantity}</td>
            <td>{props.item.price * props.item.quantity}</td>
            <td><button type="button" className="btn btn-danger" onClick={()=> removeItem(props.item)}><FaTrash/></button></td>
        </tr>
    );
}

export default CartItem;