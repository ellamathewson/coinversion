let app = new Vue({
    el: '#root',
    data: {
        apiCall: "https://cors-anywhere.herokuapp.com/https://api.exchangerate-api.com/v4/latest/",
        startCurr: "", //The starting currency
        startAmnt: "", //The starting amount
        endCurr: "CAD", //The currency you want to convert to
        endAmnt: "", //The converted currency
        conversionRate: "", //The conversion rate
        //--------------USER INPUT--------------------
        //currency options
        selected: 'USD',
        options: [{
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
                .then(response => {
                    if (!response.ok) {
                        throw Error(
                            `ERROR: ${response.statusText}`
                        );
                    }
                    return response.json();
                })
                .then(json => {
                    
                    this.conversionRate = this.getRate(this.startCurr, json);
                    console.log(this.conversionRate);
                })

        },

        getRate(newCurrency, data) {
            switch (newCurrency) {
                case 'USD':
                    return data.rate.USD;
                    break;
                case 'CAD':
                    this.conversionRate = data.rate.CAD;
                    break;
                case 'AUD':
                    this.conversionRate = data.rate.AUD;
                    break;
                case 'EUR':
                    this.conversionRate = data.rate.EUR;
                    break;
                case 'CHF':
                    this.conversionRate = data.rate.CHF;
                    break;
                case 'JPY':
                    this.conversionRate = data.rate.JPY;
                    break;
                case 'GBP':
                    this.conversionRate = data.rate.GBP;
                    break;
                case 'CNY':
                    this.conversionRate = data.rate.CNY;
                    break;
                case 'INR':
                    this.conversionRate = data.rate.INR;
                    break;
                case 'MXN':
                    this.conversionRate = data.rate.MXN;
                    break;
                default:
                    this.conversionRate = data.rate.USD;

            }

        }

    }
});