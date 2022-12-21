import classes from './characters.css'
import {getDataApi} from "../../utils/getDataApi";
import {ROOT_MODAL} from "../../constants/root";
import {API_URL, IMG_STANDARD_XLARGE, URL_COMICS} from "../../constants/api";
import imgCloseWhite from './close-white.svg'
import Notification from "../notification";
class Characters {

    renderContent(data){
        /*const btn = document.querySelectorAll('.btn')
        btn.addEventListener('click', function (){
            ROOT_MODAL.innerHTML = ''
        })*/
        let htmlContent = ``;
        data.forEach(({name, thumbnail:{extension, path}}) =>{
            const imgSrc = path + '/' + IMG_STANDARD_XLARGE + '.' + extension
htmlContent += `
<li class="${classes.characters__item}">
<img class="img-cover ${classes.characters__img}" src="${imgSrc}">
<span class="${classes.characters__name}">${name}</span>
</li>
`
        })
        const htmlWrapper = `
<div class="${classes.wrapper}"> 
 <ul class="${classes.characters__container}">
    ${htmlContent}
</ul>
<button style="background-image: url(${imgCloseWhite})" class="btn ${classes.characters__close}" onclick=" modal.innerHTML = ''"></button>
</div>
  
    `


        ROOT_MODAL.innerHTML = htmlWrapper
        //name
        //thumbnail: {extention, path}
        /*console.log('Дані є')*/
    }



    async render(uri){
        const data = await getDataApi.getData(uri);
/*if(data.length){
    this.renderContent()
}else{
    this.renderNotification()
}*/
        data.length ? this.renderContent(data) : Notification.render()
        console.log(data)
    }
}
export default new Characters();