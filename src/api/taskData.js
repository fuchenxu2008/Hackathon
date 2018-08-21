const database = {
    A: {
        key: '1',
        mode: 'A',
        analysis: 'Everything runs on Rasberry Pi',
        averageFrameRate: '0.4FPS',
        averageLatency: '3.2s',
        averagePowerConsumption: '3.8w',
        peakBandwidth: '50Mbps',
    },
    B: {
        key: '2',
        mode: 'B',
        analysis: 'Task scheduling',
        averageFrameRate: '1.2FPS',
        averageLatency: '1.4s',
        averagePowerConsumption: '3.4w',
        peakBandwidth: '50Mbps',
    },
    C: {
        key: '3',
        mode: 'C',
        analysis: 'Computing partition',
        averageFrameRate: '2.6FPS',
        averageLatency: '0.4s',
        averagePowerConsumption: '2.9w',
        peakBandwidth: '50Mbps',
    },
    SuperMode: {
        key: '4',
        mode: 'Super Mode',
        analysis: 'Provide the most appopriate scheme according to your real-time/power consumption/latency requirements on the system.',
        averageFrameRate: '2.6FPS',
        averageLatency: '0.4s',
        averagePowerConsumption: '2.2w',
        peakBandwidth: '50Mbps',
    }
}

export const getTaskData = (mode) => {
    return database[mode];
}