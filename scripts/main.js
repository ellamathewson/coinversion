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
        convertChoice: 'CAD',
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
                    this.conversionRate = this.getRate(this.endCurr, json);
                    console.log(`The starting currency is ${this.startCurr}`);
                    console.log(`The ending currency is ${this.endCurr}`);
                    console.log(`The conversion rate is ${this.conversionRate}`);

                })

        },

        getRate(newCurrency, data) {
            switch (newCurrency) {
                case 'USD':
                    return data.rates.USD;
                    break;
                case 'CAD':
                    return data.rates.CAD;
                    break;
                case 'AUD':
                    return data.rate.AUD;
                    break;
                case 'EUR':
                    return data.rates.EUR;
                    break;
                case 'CHF':
                    return data.rates.CHF;
                    break;
                case 'JPY':
                    return data.rates.JPY;
                    break;
                case 'GBP':
                    return data.rates.GBP;
                    break;
                case 'CNY':
                    return data.rates.CNY;
                    break;
                case 'INR':
                    return data.rates.INR;
                    break;
                case 'MXN':
                    return data.rates.MXN;
                    break;
                default:
                    return data.rates.USD;

            }

        }

    }
});