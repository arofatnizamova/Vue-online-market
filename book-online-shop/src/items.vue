<template>
    <div v-for="(item, index) in Products" class="col-lg-3">
                <div class="w-100 h-100 shadow rounded-5 overflow-hidden">
                    <img v-bind:src=item.img alt="" class="img-fluid object-fit-cover w-100">
                    <br>
                    <div class="px-3 py-3">
                        <span>{{item.name}}</span>
                        <br>
                        <span>{{item.price}}$</span>
                        <br>
                        <button v-on:click="addItem(item)" class="korzina  btn-dark cursor-pointer btn">
                          добавить в корзину
                      </button>
                    </div>
                </div>
            </div>
</template>
<script>
export default {
    data() {
        return {
            Products: [{
                    id: 1,
                    img: '/1.jpg',
                    name: 'Корейский язык',
                    quontaty: 1,
                    price: 100
                },
                {
                    id: 2,
                    img: '/2.jpg',
                    name: 'Японский язык',
                    quontaty: 1,
                    price: 150
                },
                {
                    id: 3,
                    img: '/3.jpg',
                    name: 'Немецкий язык',
                    quontaty: 1,
                    price: 350
                },
            ],
        }
    }
};
</script>