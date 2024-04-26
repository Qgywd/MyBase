
var chartDom = document.getElementById('jpfxb');
var myChart = echarts.init(chartDom);
var option;

option = {
  title: {
    text: 'Basic Radar Chart'
  },
  legend: {
    data: ['闭眼看世界', 'to my eyes']
  },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: '呼叫志愿者', max: 6500 },
      { name: 'AI识图', max: 16000 },
      { name: '人机交互', max: 30000 },
      { name: 'AI对话', max: 38000 },
      { name: '多元社区', max: 52000 },
      { name: '生活服务', max: 25000 }
    ]
  },
  series: [
    {
      name: '闭眼看世界',
      type: 'radar',
      data: [
        {
          value: [6200, 14000, 28000, 35000, 50000, 15000],
          name: '闭眼看世界'
        },
        {
          value: [4500, 14000, 15000, 34000, 32000, 25000],
          name: 'to my eyes'
        }
      ]
    }
  ]
};

option && myChart.setOption(option);

