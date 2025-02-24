<template>
  <button @click="fetchData" class="btn btn-info mx-auto d-block my-5">НАЖМИТЕ, ЧТОБЫ УВИДЕТЬ ТОВАРЫ</button>
  <div class="row mt-5 justify-content-evenly">
    <div v-for="(item, index) in products" :key="index" class="col-lg-3">
      <div class="w-100 h-100 shadow rounded-5 overflow-hidden">
        <img :src="item.img" alt="" class="img-fluid object-fit-cover w-100">
        <div class="px-3 py-3">
          <span>{{ item.name }}</span>
          <br>
          <span>{{ item.price }}$</span>
          <br>
          <button @click="addToBasket(item)" class="korzina btn-dark cursor-pointer btn">
            добавить в корзину
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  inject: ['basketItems'],
  methods: {
    async fetchData() {
        const response = await fetch("../../public/items.json");
        this.products = await response.json();
    },
    addToBasket(item){
      this.basketItems.push(item);
    }
  }
};
</script>
