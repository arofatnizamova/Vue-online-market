<template>
    <div class="wrapper container">
      <h3 class="text-center mt-5 fs-1">Товары</h3>
      <ProductList @add-to-cart="addItem" />
  
      <h3 class="text-center mt-5">Корзина</h3>
      <Basket :items="basketItems" @remove-item="removeItem" />
  
      <span class="fs-3 mb-2 d-block">
        Общее количество товаров: <span class="px-1 py-1 bg-secondary rounded text-white">{{ totalProducts }}</span>
      </span>
      <br>
      <span class="fs-3">
        Общая сумма товаров: <span class="px-1 py-1 bg-secondary rounded text-white">{{ totalPrice }}$</span>
      </span>
    </div>
  </template>
  
  <script>
  import { ref, watch } from 'vue';
  import ProductList from './components/ProductList.vue';
  import Basket from './components/Basket.vue';
  
  export default {
    components: {
      ProductList,
      Basket
    },
    setup() {
      const basketItems = ref([]);
      const totalProducts = ref(0);
      const totalPrice = ref(0);
  
      watch(basketItems, (newVal) => {
        totalProducts.value = newVal.length;
        calculateTotalPrice();
      }, { deep: true });
  
      function addItem(item) {
        basketItems.value.push(item);
      }
  
      function removeItem(index) {
        basketItems.value.splice(index, 1);
      }
  
      function calculateTotalPrice() {
        totalPrice.value = basketItems.value.reduce((total, item) => total + item.price, 0);
      }
  
      return { basketItems, totalProducts, totalPrice, addItem, removeItem };
    }
  };
  </script>
  
