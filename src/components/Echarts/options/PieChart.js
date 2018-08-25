const getOption = (data) => {
    const { pw, symbols } = data;
    const renderData = pw.map((val, i) => ({
        value: val,
        name: symbols[i],
    }))

    return {
        // backgroundColor: '#2c343c',
        color: ['#c23531', '#45A8DA', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],

        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)",
            position: ['50%', '80%']
        },
        legend: {
            type: 'scroll',
            orient: 'horizontal',
            left: 'top',
            // top: 20,
            bottom: 0,
            textStyle: {
                color: 'white'
            },
            data: renderData.map(item => item.name),
        },
        series: [{
            name: 'Portfolio Weight',
            type: 'pie',
            radius: '50%',
            center: ['50%', '45%'],
            hoverAnimation: false,
            data: renderData.sort(function (a, b) {
                return a.value - b.value;
            }),
            // roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: 'white'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'white'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {},
        }]
    }
}

export default getOption;