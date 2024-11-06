const app = Vue.createApp({
    data: ()=> ({
        results: null,
        searchText: '',
        message: ''
    }),
    watch: {
        searchText: function(newKeyword, oldKeyword){
            console.log(newKeyword)
            this.message = 'Waiting for you to stop typing'
            this.debouncedGetAnswer()
        }
    },
    mounted: function() {
        // this.searchText = 'javascript'
        // this.getAnswer()
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
    },
    methods: {
        getAnswer: function(){
            if (this.searchText === '') {
                console.log('karamoji')
                this.results = null
                return
            }
            this.message = 'loading...'
            const vm = this
            const params = {page: 1, per_page: 20, query: this.searchText}
            axios.get('https://qiita.com/api/v2/items', { params })
                .then(function(response){
                    vm.results = response.data
                    console.log(results)
                })
                .catch(function(error){
                    vm.message = 'Error!' + error
                })
                .finally(function() {
                    vm.message = ''
                })

        }
    }

})
app.mount('#app')