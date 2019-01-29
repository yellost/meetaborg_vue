
console.log("request.js");
let robots = new Vue({
    el:"#robots",
    data:{
        robots:[],
        filter: "all",
        males:0,
        females:0
    },
    created(){
        axios.get("https://wt-902485dbb4fca4fccee3a0efcde5b34c-0.sandbox.auth0-extend.com/robots")
        .then(response => {
            this.robots = response.data;
            this.males = this.robots.filter(robot => robot.gender === "Male").length;
            this.females = this.robots.filter(robot => robot.gender === "Female").length;
        })
    },
    methods: {
        setFilter(gender){
            this.filter = gender;
        }
    }
});