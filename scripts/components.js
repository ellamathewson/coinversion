//Template for posting the conversion
Vue.component('conversion', {
    props: ['rate', 'amnt'],
    template: `<div class="new-amnt">
        <h3>Conversion Rate: {{ rate }}</h3>
        <h3>Converted Amount: {{ amnt }}</h3>
</div>`
});