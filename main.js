const app = Vue.createApp({
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
            basketItems: []
        }
    },
    methods: {
        addItem(item) {
            this.basketItems.push(item);
        },
        removeItem(index) {
            this.basketItems.splice(index, 1)
        }
    }
})
app.mount('#app')