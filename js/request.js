
console.log("request.js");
let robots = new Vue({
    el:"#robots",
    data:{
        robots:[],
        filter: "all"
    },
    created(){
        axios.get("https://wt-902485dbb4fca4fccee3a0efcde5b34c-0.sandbox.auth0-extend.com/robots")
        .then(response => {
            this.robots = response.data;
        })
    },
    methods: {
        setFilter(gender){
            this.filter = gender;
        }
    }
});