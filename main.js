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
            basketItems: [],
            totalProducts: 0,
            totalPrice: 0
        }
    },
    watch: {
        basketItems: {
            handler(newVal) {
                this.totalProducts = newVal.length;
                this.calculateTotalPrice()
            },
            deep: true
        }
    },
    methods: {
        addItem(item) {
            this.basketItems.push(item);
            console.log(this.basketItems);
        },
        removeItem(index) {
            this.basketItems.splice(index, 1)
        },
        calculateTotalPrice() {
            this.totalPrice = this.basketItems.reduce((total, item) => {
                return total + item.price * item.quontaty
            }, 0)
        }
    },
})
app.mount('#app')