let app = new Vue({
    el: '#root',
    data: {
        apiCall: "https://cors-anywhere.herokuapp.com/https://api.exchangerate-api.com/v4/latest/",
        startCurr: "",
        startAmnt: " ",
        endCurr: "",
        endAmnt: "",
         //--------------USER INPUT--------------------
        //currency options
        selected: 'USD',
        options: [
            {
                value: 'USD',
                text: 'US Dollar'
            },
            {
                value: 'CAD',
                text: 'Canadian Dollar'
            },
            {
                value: 'AUD',
                text: 'Australian Dollar'
            },
            {
                value: 'EUR',
                text: 'Euro'
            },
            {
                value: 'CHF',
                text: 'Swiss Franc'
            },
            {
                value: 'JPY',
                text: 'Yen'
            },
            {
                value: 'GBP',
                text: 'Pound'
            },
            {
                value: 'CNY',
                text: 'Chinese Renminbi'
            },
            {
                value: 'INR',
                text: 'Rupee'
            },
            {
                value: 'MXN',
                text: 'Mexican Peso'
            }
        ]

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