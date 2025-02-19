<template>
    <div class="row mt-5 justify-content-evenly">
      <div v-for="(item, index) in products" :key="index" class="col-lg-3">
        <div class="w-100 h-100 shadow rounded-5 overflow-hidden">
          <img :src="item.img" alt="" class="img-fluid object-fit-cover w-100">
          <div class="px-3 py-3">
            <span>{{ item.name }}</span>
            <br>
            <span>{{ item.price }}$</span>
            <br>
            <button @click="$emit('add-to-cart', item)" class="korzina btn-dark cursor-pointer btn">
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
        products: [
          { id: 1, img: '/1.jpg', name: 'Корейский язык', price: 100 },
          { id: 2, img: '/2.jpg', name: 'Японский язык', price: 150 },
          { id: 3, img: '/3.jpg', name: 'Немецкий язык', price: 350 },
        ]
      };
    }
  };
  </script>
  