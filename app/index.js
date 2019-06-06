import Vue from "vue";
import App from "./index.vue";
import "./index.css";

new Vue({
    render: (h) => h(App)
}).$mount(document.getElementById("root"));