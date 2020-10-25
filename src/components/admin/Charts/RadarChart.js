import {
    Radar
} from 'vue-chartjs'


export default {
    extends: Radar,
    props: {
        chartData: {
            type: Object,
            default: function () {
                return {
                    labels: ['January', 'February', "March"],
                    datasets: [{
                        label: 'Data One',
                        backgroundColor: '#42b983',
                        data: [40, 20, 30]
                    }]
                }
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
        this.renderChart(this.chartData, this.options)
    }
}