"use client";

import { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

// Register required Chart.js components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

type PrivacyMetric = {
  dataCollection: number;
  thirdPartySharing: number;
  userControl: number;
  permissions: number;
  encryption: number;
  retention: number;
};

// Function to convert text values to numeric ratings
const convertToNumericRating = (value: string | undefined, scale: Record<string, number>): number => {
  if (!value) return 0;
  return scale[value.toLowerCase()] || 0;
};

// Function to calculate privacy metrics from nutrition label data
const calculatePrivacyMetrics = (data: Record<string, string>): PrivacyMetric => {
  // Define scales for converting text values to numeric ratings
  const dataCollectionScale: Record<string, number> = {
    'none': 5,
    'minimal': 4,
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

  const encryptionScale: Record<string, number> = {
    'end-to-end': 5,
    'medical-grade': 5,
    'yes': 4,
    'partial': 2,
    'no': 0
  };

  // Calculate the number of required permissions
  const permissionCount = Object.entries(data).filter(([key, value]) => {
    // Check if the key is a common permission and the value indicates it's required
    return ['camera', 'location', 'contacts', 'microphone', 'notifications', 'storage'].includes(key.toLowerCase())
      && value.toLowerCase() === 'required';
  }).length;

  // Map permission count to a score (fewer required permissions = higher score)
  const permissionScore = Math.max(5 - permissionCount, 0);

  // Calculate retention score based on retention period
  let retentionScore = 3; // Default moderate score
  const retentionPeriod = data['Retention Period']?.toLowerCase() || '';

  if (retentionPeriod.includes('none') || retentionPeriod.includes('not stored')) {
    retentionScore = 5;
  } else if (retentionPeriod.includes('days') || retentionPeriod.includes('week')) {
    retentionScore = 4;
  } else if (retentionPeriod.includes('month')) {
    retentionScore = 3;
  } else if (retentionPeriod.includes('year')) {
    retentionScore = 2;
  } else if (retentionPeriod.includes('indefinite') || retentionPeriod.includes('permanent')) {
    retentionScore = 0;
  }

  return {
    dataCollection: convertToNumericRating(data['Data Collection'], dataCollectionScale),
    thirdPartySharing: convertToNumericRating(data['Third-Party Sharing'], sharingScale),
    userControl: convertToNumericRating(data['User Data Control'], controlScale),
    permissions: permissionScore,
    encryption: convertToNumericRating(data['Encryption'], encryptionScale),
    retention: retentionScore
  };
};

interface PrivacyMetricsChartProps {
  nutritionData: Record<string, string>;
  className?: string;
}

export default function PrivacyMetricsChart({ nutritionData, className = '' }: PrivacyMetricsChartProps) {
  const chartRef = useRef(null); // Fixing the ref type error

  // Calculate privacy metrics from nutrition data
  const metrics = calculatePrivacyMetrics(nutritionData);

  // Prepare data for radar chart
  const chartData: ChartData<'radar'> = {
    labels: [
      'Data Collection',
      'Third-Party Sharing',
      'User Control',
      'Permissions',
      'Encryption',
      'Data Retention'
    ],
    datasets: [
      {
        label: nutritionData['Application'] || 'App Privacy Score',
        data: [
          metrics.dataCollection,
          metrics.thirdPartySharing,
          metrics.userControl,
          metrics.permissions,
          metrics.encryption,
          metrics.retention
        ],
        backgroundColor: 'rgba(255, 193, 7, 0.2)',
        borderColor: 'rgba(255, 193, 7, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(255, 193, 7, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 193, 7, 1)'
      }
    ]
  };

  // Chart options
  const chartOptions: ChartOptions<'radar'> = {
    scales: {
      r: {
        angleLines: {
          display: true
        },
        suggestedMin: 0,
        suggestedMax: 5,
        ticks: {
          stepSize: 1,
          backdropColor: 'rgba(0, 0, 0, 0)'
        }
      }
    },
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.dataset.label || '';
            const value = context.parsed.r;
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
    <div className={`${className} h-72`}>
      <h3 className="text-lg font-bold mb-2">Privacy Metrics Visualization</h3>
      <div className="bg-white p-4 rounded-lg border border-gray-200 h-full">
        <Radar data={chartData} options={chartOptions} />
      </div>
      <div className="mt-2 text-sm text-gray-600">
        <p>Higher scores (outer edges) indicate better privacy practices in each category.</p>
      </div>
    </div>
  );
}
