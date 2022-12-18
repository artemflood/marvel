import 'regenerator-runtime/runtime';
import App from "./components/app";
import { API_URL, URL_COMICS } from './constants/api';
import { getDataApi } from './utils/getDataApi';


(async () => {
    await App.render();
})();