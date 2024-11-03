const app = Vue.createApp({
    data: () => ({
        message: 'Hello Vue.js!!',
        number: 100,
        ok: false
    })
})
app.mount('#app')