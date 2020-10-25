import {
    Doughnut
} from 'vue-chartjs'

export default {
    extends: Doughnut,
    props: {
        chartdata: {
            type: Object,
            default: {
                labels: ['January', 'February', "March"],
                datasets: [{
                    label: 'Data One',
                    backgroundColor: '#42b983',
                    data: [40, 20, 30]
                }]
            }
        },
        options: {
            type: Object,
            default: {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    mounted() {
        this.renderChart(this.chartdata, this.options)
    }
}