import { removeItem } from '../../store/reducers/cartSlice'
import '../../styles/helpers.scss'
import { useSelector, useDispatch } from 'react-redux'

const Close = ({modal,setModal,idItem, price,count}) => {

    const items = useSelector(state => state.cardStore.items)
    const dispatch = useDispatch()
    const oneRemoveItem = (e) => {
        e.stopPropagation()
        const item = {
            id: Number(e.target.id)
        }
        dispatch(
            removeItem(item.id)
        )
    }

    const rem = (e) => {
        const item = {
            id: Number(e.target.parentNode.id)
        }
        dispatch(
            removeItem(item.id)
        )
    }

    return (
        <div className="close" id={idItem} onClick={(e)=>{
            if(modal) setModal(false) 
            oneRemoveItem(e)
         }}>
            <span onClick={(e)=>rem(e)}></span>
        </div>
    )
}

export default Close