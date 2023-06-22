import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import axios from "axios";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/reducers/cartSlice";
import '../../styles/aboutItem.scss'

const CardAbout = () => {

    const dispatch = useDispatch();

    const params = useParams();
    
    const [aboutData,setAboutData] = useState([])

    const handleToAddItem = () => {
        const item = {
            id : aboutData[0].id,
            title: aboutData[0].title,
            price: aboutData[0].price,
        }
        dispatch(addItem(item))
    }

    useEffect(() => {
        try{
            axios.get(`http://localhost:3001/catalog?id=${params.id}`)
                .then(response => {
                    setAboutData([...response.data])
                })
                .catch(function (error){
                })
          } catch (error) {
            alert('ошибка')
          }
        }
    , [])
    
    return (
        <div className="aboutContainer">
            {
                aboutData.map(el => 
                    <div key={el.id} className="item">
                        <div className="title">
                            {el.title}
                        </div>
                    </div>
                )
            }
            <div className="toCart_container">
                <button onClick={
                    handleToAddItem
                }>В корзину</button>
            </div>
        </div>
    )
}

export default CardAbout