import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const options = {
  title: {
    title: 'My stock chart',
  },
  series: [
    {
      data: [1, 2, 3],
    },
  ],
}

export const MyStockChart = () => {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={'stockChart'}
      options={options}
    />
  )
}
