const app = Vue.createApp({
    data: () => ({
        newItem: "",
        todos: []
    }),
    methods: {
        addItem(event) {
            console.log("clicked")
            let todo = {
                item: this.newItem
            }
            this.todos.push(todo)
        }
    }
})
app.mount("#app")