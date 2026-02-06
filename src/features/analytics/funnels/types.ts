export interface FunnelStep {
  id: string;
  name: string;
  value: number;
  percentage: number;
}

export interface Funnel {
  id: string;
  name: string;
  steps: FunnelStep[];
  totalConversion: number;
}
