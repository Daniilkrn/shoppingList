import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { NavLink } from "react-router-dom";
import App from "../../App";
import { useSelector } from "react-redux";
import { addItem, removeItem } from "../../store/reducers/cartSlice";

const CardItem = ({id,title,desc,price,image}) => {

    const items = useSelector(state => state.cardStore.items)
    const addedItems = useSelector(state => state.cardStore.items.find(el => el.id === id))

    const dispatch = useDispatch()

    const addedCount = addedItems ? addedItems.count : 0 

    const handleToAddItem = () => {
        const item = {
            id,
            title,
            price,
            desc,
            image
        }
        dispatch(addItem(item))
    }

    return (
        <div className="shopCard">
            <div className="img_card">
                <img src={image} alt="" />
            </div>
            <div className="title">
                {title}
            </div>
            <div className="price">
                {price} р.
            </div>
            <div className="toCart">
                <span className="btn_toCart" onClick={(e)=>{
                    e.preventDefault()
                    handleToAddItem()
                    }}>
                    {addedCount >= 1 ? "Добавить" : "В корзину"}
                    <i>{addedCount}</i>
                </span>
            </div>
        </div>
    )
}

export default CardItem