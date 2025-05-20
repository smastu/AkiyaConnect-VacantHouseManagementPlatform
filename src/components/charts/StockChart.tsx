import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { ja } from 'date-fns/locale';
import { format, subDays } from 'date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

interface StockChartProps {
  propertyId: string;
}

const StockChart: React.FC<StockChartProps> = ({ propertyId }) => {
  // サンプルデータの生成
  const generateData = () => {
    const data = [];
    let basePrice = 1200;
    
    for (let i = 30; i >= 0; i--) {
      const date = subDays(new Date(), i);
      const priceChange = (Math.random() - 0.5) * 50;
      basePrice += priceChange;
      
      data.push({
        x: date,
        y: basePrice
      });
    }
    
    return data;
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    scales: {
      x: {
        type: 'time' as const,
        time: {
          unit: 'day' as const,
          displayFormats: {
            day: 'M/d'
          },
        },
        adapters: {
          date: {
            locale: ja
          }
        },
        grid: {
          display: false
        }
      },
      y: {
        position: 'right' as const,
        grid: {
          color: '#f0f0f0'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return `${context.parsed.y.toLocaleString()}円`;
          }
        }
      }
    }
  };

  const data = {
    datasets: [
      {
        data: generateData(),
        borderColor: '#4338ca',
        backgroundColor: 'rgba(67, 56, 202, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  return (
    <div className="h-full w-full">
      <Line options={options} data={data} />
    </div>
  );
};

export default StockChart;