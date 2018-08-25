const getOption = (data) => {
    const { pw, symbols } = data;
    const renderData = pw.map((val, i) => ({
        value: val,
        name: symbols[i],
    }))

    return {
        // backgroundColor: '#2c343c',
        color: ['#c23531', '#45A8DA', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],

        series: [{
            name: 'Portfolio Weight',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            hoverAnimation: false,
            data: renderData.sort(function (a, b) {
                return a.value - b.value;
            }),
            // roseType: 'radius',
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            itemStyle: {},
        }]
    }
}

export default getOption;