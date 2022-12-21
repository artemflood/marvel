import {ROOT_MODAL} from "../../constants/root";
import classes from './notification.css'
import imgCloseBlack from './close.svg'
class Notification{
    render(){
const htmlWrapper = `
<div class="${classes.notification__container}">
<span>Нема контенту</span>
<button style="background-image: url(${imgCloseBlack})" class="btn ${classes.notification__close}" onclick=" modal.innerHTML = ''"></button>

</div>
`
        ROOT_MODAL.innerHTML = htmlWrapper
    }
}
export default new Notification();
