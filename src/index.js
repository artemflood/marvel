import 'regenerator-runtime/runtime';
import App from "./components/app";
import Comics from "./components/comics";
import { API_URL, URL_COMICS } from './constants/api';
import { getDataApi } from './utils/getDataApi';


(async () => {
    await App.render();
    Comics.eventListener()
})();