"use client";

import { useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Metrics to display in the bar chart
const metricKeys = [
  'Data Collection',
  'Third-Party Sharing',
  'User Control',
  'Data Storage',
  'Encryption'
];

// Convert permission data to a numeric score
const getPermissionScore = (data: Record<string, string>) => {
  const permissionKeys = ['Camera', 'Location', 'Contacts', 'Microphone', 'Notifications', 'Storage'];

  // Count how many permissions are required
  const requiredCount = permissionKeys.filter(key =>
    data[key]?.toLowerCase() === 'required'
  ).length;

  // Normalize to a 0-5 scale (0 = all required, 5 = none required)
  return Math.max(5 - requiredCount, 0);
};

// Convert text ratings to numeric values for visualization
const getMetricValue = (key: string, value: string | undefined): number => {
  if (!value) return 0;

  const lowerValue = value.toLowerCase();

  // Scales for different metrics
  const dataCollectionScale: Record<string, number> = {
    'none': 5,
    'minimal': 4,
    'low': 4,
    'medium': 3,
    'high': 2,
    'very high': 1,
    'extensive': 0
  };

  const sharingScale: Record<string, number> = {
    'none': 5,
    'minimal': 4,
    'limited': 3,
    'yes': 2,
    'extensive': 1
  };

  const controlScale: Record<string, number> = {
    'full': 5,
    'high': 4,
    'moderate': 3,
    'partial': 2,
    'limited': 1,
    'none': 0
  };

  const storageScale: Record<string, number> = {
    'device only': 5,
    'device': 4,
    'encrypted cloud': 4,
    'cloud': 2,
    'third-party': 1
  };

  const encryptionScale: Record<string, number> = {
    'end-to-end': 5,
    'medical-grade': 5,
    'yes': 4,
    'partial': 2,
    'no': 0
  };

  // Select appropriate scale based on metric key
  if (key.includes('Collection')) return dataCollectionScale[lowerValue] || 0;
  if (key.includes('Sharing')) return sharingScale[lowerValue] || 0;
  if (key.includes('Control')) return controlScale[lowerValue] || 0;
  if (key.includes('Storage')) return storageScale[lowerValue] || 0;
  if (key.includes('Encryption')) return encryptionScale[lowerValue] || 0;

  return 0;
};

interface PrivacyBarChartProps {
  app1Data: Record<string, string>;
  app2Data: Record<string, string>;
  className?: string;
}

export default function PrivacyBarChart({ app1Data, app2Data, className = '' }: PrivacyBarChartProps) {
  const chartRef = useRef<ChartJS>(null);

  // Prepare data for the bar chart
  const chartData: ChartData<'bar'> = {
    labels: [...metricKeys, 'Permissions'],
    datasets: [
      {
        label: app1Data['Application'] || 'App 1',
        data: [
          ...metricKeys.map(key => getMetricValue(key, app1Data[key])),
          getPermissionScore(app1Data)
        ],
        backgroundColor: 'rgba(255, 193, 7, 0.7)',
        borderColor: 'rgba(255, 193, 7, 1)',
        borderWidth: 1
      },
      {
        label: app2Data['Application'] || 'App 2',
        data: [
          ...metricKeys.map(key => getMetricValue(key, app2Data[key])),
          getPermissionScore(app2Data)
        ],
        backgroundColor: 'rgba(63, 81, 181, 0.7)',
        borderColor: 'rgba(63, 81, 181, 1)',
        borderWidth: 1
      }
    ]
  };

  // Chart options
  const chartOptions: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 5,
        title: {
          display: true,
          text: 'Privacy Score (higher is better)'
        },
        ticks: {
          stepSize: 1
        }
      },
      x: {
        title: {
          display: true,
          text: 'Privacy Metrics'
        }
      }
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Privacy Comparison'
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.dataset.label || '';
            const value = context.parsed.y;
            let qualitativeRating = '';

            // Map numeric values to qualitative ratings
            if (value >= 4.5) qualitativeRating = 'Excellent';
            else if (value >= 3.5) qualitativeRating = 'Good';
            else if (value >= 2.5) qualitativeRating = 'Moderate';
            else if (value >= 1.5) qualitativeRating = 'Poor';
            else qualitativeRating = 'Very Poor';

            return `${label}: ${value} (${qualitativeRating})`;
          }
        }
      }
    },
    maintainAspectRatio: false
  };

  return (
    <div className={`${className} h-80`}>
      <h3 className="text-lg font-bold mb-2">Privacy Comparison Chart</h3>
      <div className="bg-white p-4 rounded-lg border border-gray-200 h-full">
        <Bar data={chartData} options={chartOptions} />
      </div>
      <div className="mt-2 text-sm text-gray-600">
        <p>Higher scores indicate better privacy practices in each category.</p>
      </div>
    </div>
  );
}
