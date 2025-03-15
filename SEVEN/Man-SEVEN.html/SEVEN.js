const { createApp } = Vue;

createApp({
    data() {
        return {
            cart: [],
            products: [
                { id: 1, name: "T-Shirt", price: 19.99, image: "product1.jpg" },
                { id: 2, name: "Headphones", price: 49.99, image: "product2.jpg" },
                { id: 3, name: "Sneakers", price: 79.99, image: "product3.jpg" },
                { id: 4, name: "Sunglasses", price: 29.99, image: "product4.jpg" }
            ]
        };
    },
    computed: {
        totalPrice() {
            return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        cartItemCount() {
            return this.cart.reduce((count, item) => count + item.quantity, 0);
        }
    },
    methods: {
        addToCart(product) {
            const foundProduct = this.cart.find(item => item.id === product.id);
            if (foundProduct) {
                foundProduct.quantity += 1;
            } else {
                this.cart.push({ ...product, quantity: 1 });
            }
        },
        removeFromCart(index) {
            this.cart.splice(index, 1);
        }
    }
}).mount("#app");