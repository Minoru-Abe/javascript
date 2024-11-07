const app = Vue.createApp({
    data: () => ({
        message: 'Hello Vue.js',
        isLarge: true,
        isRed: true
    })
})
app.mount('#app')