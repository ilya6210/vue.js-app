import {
    Bar,
    mixins
} from 'vue-chartjs'

const {
    reactiveProp
} = mixins

export default {
    extends: Bar,
    mixins: [reactiveProp],
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
    watch: {
        options() {
            this.renderChart(this.chartData, this.options);
        }
    },
    mounted() {
        this.renderChart(this.chartData, this.options)
    }
}