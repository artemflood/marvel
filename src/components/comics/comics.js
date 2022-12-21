import {getDataApi} from "../../utils/getDataApi";
import {API_URL, URL_COMICS, URL_CHARACTERS, IMG_STANDARD_XLARGE, IMG_NOT_AVAILABLE} from "../../constants/api";
import classes from './comics.css'
import {ROOT_INDEX} from "../../constants/root";
import Error from "../../error";
import Characters from "../characters";
class Comics {
    renderComics(data){
        let htmlContent = ''
        data.forEach(({id, title, thumbnail: {extension, path}}) => {

            // console.log(id, title, path, extension)
            if (path.lastIndexOf(IMG_NOT_AVAILABLE) === -1) {
                const imgSrc = path + '/' + IMG_STANDARD_XLARGE + '.' + extension
                const uri = API_URL + URL_COMICS + '/' + id + '/' + URL_CHARACTERS
                htmlContent += `
                  <li class="comics__item ${classes.comics__item}" data-uri="${uri}">
                  <span class="${classes.comics__name}">${title}</span>
                  <img class="img-contain ${classes.comics__img}" src="${imgSrc}">
                  </li>
                  `
            }


        });
        const htmlWrapper = `
            <ul class="${classes.comics__container}">
            ${htmlContent}
            </ul>
            `;
        ROOT_INDEX.innerHTML = htmlWrapper
    }

        async render() {
            const data = await getDataApi.getData(API_URL + URL_COMICS);

            /*if(data === true){
                this.renderComics(data)
            }else{
                Error.render()
            }*/
            data ?  this.renderComics(data):  Error.render()
        }

        eventListener(){
            document.querySelectorAll('.comics__item').forEach(el => {
               const uri = el.getAttribute('data-uri')
                el.addEventListener('click', () => {

                    Characters.render(uri)
                })
            })
        }
}
export default new Comics()