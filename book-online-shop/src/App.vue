<template>
  <!-- <product-list title="Список товаров"></product-list>
  <basket-item title="Товары в корзине"></basket-item> -->
  <router-link to="/product-list">Cписок товаров</router-link><br>
  <router-link to="/basket-item">Корзина</router-link>
  <div>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  data() {
    return {
      basketItems: [],
    }
  },
  provide() {
    return {
      basketItems: this.basketItems
    }
  }
}
</script>