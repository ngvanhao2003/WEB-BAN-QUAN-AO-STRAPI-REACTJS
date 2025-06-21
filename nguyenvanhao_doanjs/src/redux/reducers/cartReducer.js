import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const initCart = {
    carts: [],
    amounItem: 0,
    totalAmount: 0
};
const initState = JSON.parse(localStorage.getItem('cart')) || initCart;
const saveCartToLocalStorage = (cartData) => {
    localStorage.setItem('cart', JSON.stringify(cartData));
};
const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItemIndex = state.carts.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex !== -1) {
                const updatedCart = state.carts.map((item, index) =>
                    index === existingItemIndex ? { ...item, quantity: item.quantity + action.payload.amount } : item
                );
                toast.info(`Tang so luong ${action.payload.name}`, {
                    position: "bottom-right",
                    autoClose: 2000
                })
                return {
                    ...state,
                    carts: updatedCart,
                    amounItem: state.amounItem + action.payload.amount,
                    totalAmount: state.totalAmount
                }

            } else {
                toast.success(`Them ${action.payload.name} vao gio hang`, {
                    position: "bottom-right",
                    autoClose: 2000
                })
                return {
                    ...state,
                    carts: [...state.carts, { ...action.payload, quantity: action.payload.amount }],
                    amounItem: state.amounItem + 1
                }

            }

        case 'TOTAL_CART':
            let total = 0;
            state.carts.map(item => {
                total += item.price * item.quantity;
            });

            const newState = {
                ...state,
                totalAmount: total
            }
            saveCartToLocalStorage(newState);
            return newState;

        case "REMOVE_ITEM_CART":
            toast.warning(`Xoa ${action.payload.name} khoi gio hang`, {
                position: "bottom-right",
                autoClose: 2000
            })
            return {
                ...state,
                carts: state.carts.filter(item => item.id !== action.payload.id)
            }
        case "CLEAR_CART":
            return {
                ...state,
                carts: []
            }

        default:
            return state;
    }
}
export default cartReducer;