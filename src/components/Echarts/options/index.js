import getCandleStickOption from './CandleStick';
import getPieChartOption from './PieChart';
import getSmallPie from './smallPie';

export const getOption = (type, data) => {
    switch (type) {
        case 'price':
            return getCandleStickOption(data);
        case 'pie':
            return getPieChartOption(data);
        case 'smallpie':
            return getSmallPie(data);
        default:
            break;
    }
}