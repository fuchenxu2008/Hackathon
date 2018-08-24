import getAreaChartOption from './AreaChart';
import getCandleStickOption from './CandleStick';
import getPieChartOption from './PieChart';

export const getOption = (type, data) => {
    switch (type) {
        case 'price':
            return getCandleStickOption(data);
        case 'profit':
            return getAreaChartOption();
        case 'pie':
            return getPieChartOption();
        default:
            break;
    }
}