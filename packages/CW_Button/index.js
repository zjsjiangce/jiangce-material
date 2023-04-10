import CW_Button from './src/CW_Button.vue';
// import { App } from 'vue'
import Vue from 'vue'
import { Button } from 'element-ui'
Vue.use(Button)
CW_Button.install = ( Vue) => {
    Vue.component(CW_Button.name, CW_Button)
}


export default CW_Button;
