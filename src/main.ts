import {createApp} from 'vue'
import App from './App.vue'
import {createPinia} from "pinia";
import {router} from "./router";

import "./ui-components/css/main/ui-main-colors.css"
import "./ui-components/css/main/ui-main-fonts.css"


const pinia = createPinia()
createApp(App)
    .use(pinia)
    .use(router)
    .mount('#app')
