import { createApp } from 'vue'

import App from './App.vue'
import ProductList from './components/ProductList.vue'

const app = createApp(App)
app.component('product-list', ProductList)
app.mount('#app')