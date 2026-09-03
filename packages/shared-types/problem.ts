export type ProblemStatus =
  | "SUBMITTED"
  | "PENDING_VALIDATION"
  | "VALIDATED"
  | "DUPLICATE"
  | "REJECTED"
  | "MATCHED"
  | "COLLABORATION"
  | "IMPLEMENTATION"
  | "TESTING"
  | "SOLVED";

export interface ProblemLocation {
  latitude: number;
  longitude: number;
  address?: string;
  district?: string;
  state?: string;
}

export interface ProblemMedia {
  id: string;
  url: string;
  type: "IMAGE" | "VIDEO";
  mimeType?: string;
  size?: number;
}

export interface Problem {
  id: string;

  submittedById: string;

  title: string;
  description: string;

  category?: string;
  subCategory?: string;

  status: ProblemStatus;

  location?: ProblemLocation;

  media: ProblemMedia[];

  aiVerified?: boolean;
  aiConfidence?: number;
  aiSeverity?: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  aiSummary?: string;
  aiSolution?: string;

  duplicateOfId?: string;

  createdAt: string;
  updatedAt: string;
}
