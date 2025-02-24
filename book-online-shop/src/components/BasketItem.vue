<template>
    <table class="table text-center mt-5">
            <tr v-for="(item, index) in basketItems">
                <td>{{index+1}}</td>
                <td>
                    <img v-bind:src=item.img style="width: 50px">
                </td>
                <td>{{item.name}}</td>
                <!-- <td>{{item.quontaty}}</td> -->
                <td>{{item.price}}</td>
                <td><button v-on:click="removeItem(index)" class="btn btn-danger">Remove</button></td>
            </tr>
        </table>
</template>
<script>
export default {
  inject: ['basketItems'],
  methods: {
    removeItem(index) {
        this.basketItems.splice(index, 1)
    },
  }
};
</script>
