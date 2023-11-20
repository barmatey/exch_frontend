import { createApp } from 'vue'
import App from './App.vue'

import "./ui-components/css/main/ui-main-colors.css"
import "./ui-components/css/main/ui-main-fonts.css"
import {createPinia} from "pinia";


const pinia = createPinia()
createApp(App).use(pinia).mount('#app')
