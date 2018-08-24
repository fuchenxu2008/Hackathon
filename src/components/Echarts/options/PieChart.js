const getOption = () => {
    const data = [{
            value: 335,
            name: '直接访问'
        },
        {
            value: 310,
            name: '邮件营销'
        },
        {
            value: 274,
            name: '联盟广告'
        },
        {
            value: 235,
            name: '视频广告'
        },
        {
            value: 400,
            name: '搜索引擎'
        }
    ];

    return {
        // backgroundColor: '#2c343c',
        color: ['#c23531', '#45A8DA', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],

        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)",
            position: ['80%', '80%']
        },
        legend: {
            type: 'scroll',
            orient: 'vertical',
            right: 10,
            top: 20,
            bottom: 20,
            data: data.map(item => item.name),
        },
        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            hoverAnimation: false,
            data: data.sort(function (a, b) {
                return a.value - b.value;
            }),
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(0, 0, 0, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(0, 0, 0, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {},

            // animationType: 'scale',
            // animationEasing: 'elasticOut',
            // animationDelay: function (idx) {
            //     return Math.random() * 200;
            // }
        }]
    }
}

export default getOption;