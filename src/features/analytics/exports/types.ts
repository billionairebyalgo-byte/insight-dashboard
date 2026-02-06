export interface ExportJob {
  id: string;
  name: string;
  format: "csv" | "pdf" | "json";
  status: "completed" | "processing" | "failed";
  createdAt: Date;
  fileSize?: string;
}
