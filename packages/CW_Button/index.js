import CW_Button from './src/CW_Button.vue';
// import { App } from 'vue'
CW_Button.install = ( Vue) => {
    Vue.component(CW_Button.name, CW_Button)
}


export default CW_Button;
