import styles from 'styled-components'
import '../../styles/footer.scss'
import {AiOutlineMail} from 'react-icons/ai'

const StyledFooter = styles.footer`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: gray;
`
const StyledFooterContainer = styles.div`
    width: 1200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const Footer = () => {
    return(
        <StyledFooter>
            <StyledFooterContainer>
                <div className="title">ООО "ХИМЛАЙН"</div>
                <ul>
                    <li><AiOutlineMail className='icon'/>e-mail: td_ule@mail.ru</li>
                </ul>
                <ul> <p>Юридический адрес:</p> 
                    <li>454016, Челябинская область, г. Челябинск, ул. Чайковского</li>
                    <li>ОГРН: 1077447010442</li>
                </ul>
            </StyledFooterContainer>
        </StyledFooter>
    )
}

export default Footer