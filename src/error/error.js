import classes from './error.css'
import {ROOT_INDEX} from "../constants/root";

class Error{
   render(){
       const htmlWrapper = `
       <div class="${classes.error__container}">
       <span>
       <p class="${classes.error__alert}">Сталась помилка.</p>
       <p class="${classes.error__alert}">Попробуйте зайти пізніше</p>
</span>
</div>
       `
       ROOT_INDEX.innerHTML = htmlWrapper
    }
}
export  default new Error();