const app = Vue.createApp({
    data: () => ({
        largeClass: {
            large: true,
            red: true
        },
        blueClass: {
            'text-blue': true
        },
        bggrayClass: {
            'bg-gray' : true
        },
        isLarge: false
    })
})
app.mount("#app")