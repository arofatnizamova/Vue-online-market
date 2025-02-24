<template>
  <h1 class="mx-auto text-center my-5">CПИСОК ТОВАРОВ</h1>
  <product-list></product-list>
  <h2 class="mx-auto text-center my-5">Корзина</h2>
  <basket-item></basket-item>
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