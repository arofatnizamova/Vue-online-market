import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import ProductList from './components/ProductList.vue'
import BasketItem from './components/BasketItem.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/product-list',
            component: ProductList,
            props: { title: 'Список товаров' }
        },
        {
            path: '/basket-item',
            component: BasketItem,
            props: { title: 'Товары в корзине' }
        }
    ]

});
const app = createApp(App)
app.use(router);
// app.component('product-list', ProductList)
// app.component('basket-item', BasketItem)
app.mount('#app')