export interface RetentionData {
  period: string;
  daily: number;
  weekly: number;
  monthly: number;
}

export interface ChurnMetric {
  period: string;
  rate: number;
  change: number;
}
