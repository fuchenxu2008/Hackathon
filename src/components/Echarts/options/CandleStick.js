import echarts from "echarts/lib/echarts";

const upColor = 'rgb(36, 206, 119)';
const downColor = 'rgb(230, 90, 80)';

export function calculateMA(dayCount, data) {
    var result = [];
    for (var i = 0, len = data.ochl.length; i < len; i++) {
        if (i < dayCount) {
            result.push('-');
            continue;
        }
        var sum = 0;
        for (var j = 0; j < dayCount; j++) {
            sum += data.ochl[i - j][1];
        }
        result.push(+(sum / dayCount).toFixed(8));
    }
    return result;
}

const getOption = (data) => {
    const { time, ochl, vol } = data;

    return {
        backgroundColor: 'transparent',
        axisLabel: {
            color: "#fff"
        },
        animation: true,
        legend: {
            bottom: 0,
            left: 'center',
            data: ['Dow-Jones index', 'MA5', 'MA10', 'MA20', 'MA30', 'Profit'],
            textStyle: {
                color: '#fff',
            },
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            },
            backgroundColor: 'rgba(245, 245, 245, 0.5)',
            borderWidth: 0,
            borderColor: 'transparent',
            // padding: 10,
            textStyle: {
                color: '#000'
            },
            position: function (pos, params, el, elRect, size) {
                var obj = {top: 10};
                obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
                return obj;
            },
        },
        axisPointer: {
            link: {xAxisIndex: 'all'},
            label: {
                backgroundColor: '#777'
            }
        },
        visualMap: {
            show: false,
            seriesIndex: 6,
            dimension: 2,
            pieces: [{
                value: 1,
                color: downColor
            }, {
                value: -1,
                color: upColor
            }]
        },
        grid: [
            {
                top: 12,
                left: '10%',
                right: '8%',
                height: '60%',
            },
            {
                left: '10%',
                right: '8%',
                top: '68%',
                height: '16%',
            }
        ],
        xAxis: [
            {
                type: 'category',
                data: time,
                scale: true,
                boundaryGap : false,
                axisLine: {onZero: false},
                splitLine: {show: false},
                splitNumber: 20,
                min: 'dataMin',
                max: 'dataMax',
                axisPointer: {
                    z: 100
                },
            },
            {
                type: 'category',
                gridIndex: 1,
                data: time,
                scale: true,
                boundaryGap : false,
                axisLine: {onZero: false},
                axisTick: {show: false},
                splitLine: {show: false},
                axisLabel: {show: false},
                splitNumber: 20,
                min: 'dataMin',
                max: 'dataMax',
            }
        ],
        yAxis: [
            {
                scale: true,
                splitArea: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(189, 189, 189, 0.1)"
                    }
                }
            },
            {
                scale: true,
                gridIndex: 1,
                splitNumber: 2,
                axisLabel: {show: false},
                axisLine: {show: false},
                axisTick: {show: false},
                splitLine: {show: false}
            }
        ],
        dataZoom: [
            {
                type: 'inside',
                xAxisIndex: [0, 1],
                start: 0,
                end: 100,
            },
            {
                show: true,
                xAxisIndex: [0, 1],
                type: 'slider',
                top: '85%',
                start: 0,
                end: 100,
                backgroundColor: 'transparent',
                dataBackground: {
                    areaStyle: {
                        color: "#8392A5"
                    },
                    lineStyle: {
                        opacity: 0.8,
                        color: "#8392A5"
                    }
                },
                fillerColor: 'rgba(156, 156, 156, 0.3)',
                textStyle: {
                    color: '#fff'
                }
            }
        ],
        series: [
            {
                name: 'Dow-Jones index',
                type: 'candlestick',
                data: ochl,
                itemStyle: {
                    normal: {
                        color: upColor,
                        color0: downColor,
                        borderColor: null,
                        borderColor0: null
                    }
                },
                tooltip: {
                    formatter: function (param) {
                        return [
                            'Open: ' + param.data[0] + '<br/>',
                            'Close: ' + param.data[1] + '<br/>',
                            'Highest: ' + param.data[2] + '<br/>',
                            'Lowest: ' + param.data[3] + '<br/>',
                        ].join('');
                    }
                }
            },
            {
                name: 'MA5',
                type: 'line',
                data: calculateMA(5, data),
                smooth: true,
                showSymbol: false,
                lineStyle: {
                    normal: {opacity: 0.5}
                }
            },
            {
                name: 'MA10',
                type: 'line',
                data: calculateMA(10, data),
                smooth: true,
                showSymbol: false,
                lineStyle: {
                    normal: {opacity: 0.5}
                }
            },
            {
                name: 'MA20',
                type: 'line',
                data: calculateMA(20, data),
                smooth: true,
                showSymbol: false,
                lineStyle: {
                    normal: {opacity: 0.5}
                }
            },
            {
                name: 'MA30',
                type: 'line',
                data: calculateMA(30, data),
                smooth: true,
                showSymbol: false,
                lineStyle: {
                    normal: {opacity: 0.5}
                }
            },
            {
                name: 'Profit',
                type: 'line',
                smooth: true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgba(255, 255, 255, 0.3)',
                    }
                },
                lineStyle: {
                    width: 1,
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(255, 255, 255, 0.4)'
                        }, {
                            offset: 1,
                            color: 'rgba(255, 255, 255, 0.01)'
                        }])
                    }
                },
                data: ochl.map(ele => Math.random() * 0.001 + 0.042),
            },
            {
                name: 'Volume',
                type: 'bar',
                xAxisIndex: 1,
                yAxisIndex: 1,
                data: vol
            }
        ]
    }
};

export default getOption;