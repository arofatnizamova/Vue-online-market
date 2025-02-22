import { createApp } from 'vue'

import App from './App.vue'
import ProductList from './components/ProductList.vue'
import BasketItem from './components/BasketItem.vue'

const app = createApp(App)
app.component('product-list', ProductList)
app.component('basket-item', BasketItem)
app.mount('#app')