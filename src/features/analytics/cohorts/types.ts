export interface Cohort {
  id: string;
  name: string;
  startDate: Date;
  userCount: number;
}

export interface CohortRetention {
  cohortId: string;
  week: number;
  retention: number;
}
