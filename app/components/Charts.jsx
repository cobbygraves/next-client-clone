'use client'
import 'chart.js/auto'
import { Line } from 'react-chartjs-2'

const barChartData = {
  labels: ['1d', '2d', '3d', '4d', '5d'],
  datasets: [
    {
      label: 'First dataset',
      data: [13, 10, 21, 15, 24],
      borderColor: '#6550eb',
      tension: 0.4,
      barPercentage: 0.9,
      categoryPercentage: 0.9
    }
  ]
}

function BarChart() {
  return (
    <div className='flex justify-center my-10'>
      <div className='py-3 w-2/4 '>
        <Line
          data={barChartData}
          options={{
            plugins: {
              legend: { display: false }
            },

            scales: {
              x: {
                grid: {
                  display: false
                }
              },
              y: {
                display: false,
                grid: {
                  display: false
                }
              }
            }
          }}
          plugins={[
            {
              id: 'hoverLine',
              beforeDatasetDraw: (chart, args, options) => {
                const {
                  ctx,
                  data,
                  tooltip,
                  chartArea,
                  scales: { x, y }
                } = chart
                const { top, bottom, left, right, height, width } = chartArea

                if (tooltip._active.length) {
                  // console.log(tooltip.x)
                  // console.log(tooltip.y)
                  const xCoord = x.getPixelForValue(
                    tooltip.dataPoints[0].dataIndex
                  )
                  const yCoord = y.getPixelForValue(
                    tooltip.dataPoints[0].parsed.y
                  )
                  const gradient = ctx.createLinearGradient(0, 0, 0, 500)
                  gradient.addColorStop(1, '#6550eba8')
                  gradient.addColorStop(0, 'rgba(243, 244, 247, 0)')
                  ctx.save()
                  ctx.beginPath()
                  ctx.fillStyle = gradient
                  ctx.fillRect(xCoord - 20, yCoord, 40, bottom)
                  ctx.closePath()
                }
              }
            }
          ]}
        />
      </div>
    </div>
  )
}

export default BarChart
