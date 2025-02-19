<template>
    <table class="table text-center mt-5">
      <tr v-for="(item, index) in items" :key="index">
        <td>{{ index + 1 }}</td>
        <td><img :src="item.img" style="width: 50px"></td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td><button @click="$emit('remove-item', index)" class="btn btn-danger">Remove</button></td>
      </tr>
    </table>
  </template>
  
  <script>
  export default {
    props: {
      items: Array
    }
  };
  </script>
  