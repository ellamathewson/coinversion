let app = new Vue({
    el: '#root',
    data: {
        apiCall: "https://cors-anywhere.herokuapp.com/https://api.exchangerate-api.com/v4/latest/",
        startCurr: "",
        startAmnt: " ",
        endCurr: "",
        endAmnt: "",

    },
    methods: {
        convert() {
            this.apiCall += `${this.startCurr}`;
            fetch(this.apiCall)
                .then(response =>{
                    if(!response.ok){
                        throw Error(
                            `ERROR: ${response.statusText}`
                        );
                    }
                    return response.json();
                })
                .then(json => {
                    console.log(json);
                })

        }

    }
});