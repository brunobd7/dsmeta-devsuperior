import icon from '../../assets/img/notification-icon.svg'
import './styles.css'

function NotificationButton() {
    return (
        <div className="dsmeta-red-btn">
            {/*<img src="notification-icon.svg" alt="Notify"/>*/}
            <img src={icon} alt="Notify"/>
        </div>
    )
}

export default NotificationButton
