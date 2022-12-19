import {getDataApi} from "../../utils/getDataApi";
import {API_URL, URL_COMICS, URL_CHARACTERS, IMG_STANDARD_XLARGE, IMG_NOT_AVAILABLE} from "../../constants/api";
import './comics.css'
import {ROOT_INDEX} from "../../constants/root";

class Comics {
        async render(){
            const data = await getDataApi.getData(API_URL + URL_COMICS);
            console.log(data);

            let htmlContent = ''
            data.forEach(({id, title, thumbnail: {extension, path}}) => {

                // console.log(id, title, path, extension)
                  if (path.lastIndexOf(IMG_NOT_AVAILABLE) === -1) {
                      const imgSrc = path + '/' + IMG_STANDARD_XLARGE + '.' + extension
                      const uri = API_URL + URL_COMICS + '/' + id + '/' + URL_CHARACTERS
                      htmlContent += `
                  <li class="comics__item" data-uri="${uri}">
                  <span class="comics__name">${title}</span>
                  <img class="comics__img" src="${imgSrc}">
                  </li>
                  `
                  }


            });
            const htmlWrapper = `
            <ul class="comics__container">
            ${htmlContent}
            </ul>
            `;
            ROOT_INDEX.innerHTML = htmlWrapper
        }
        eventListener(){
            document.querySelectorAll('.comics__item').forEach(el => {
               const uri = el.getAttribute('data-uri')
                el.addEventListener('click', () => {
                    console.log(uri)
                })
            })
        }
}
export default new Comics()