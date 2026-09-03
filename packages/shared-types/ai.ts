export type AISeverity =
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "CRITICAL";

export type AIConfidenceLevel =
  | "VERY_LOW"
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "VERY_HIGH";

export interface AIAnalysisRequest {
  problemId: string;
  title: string;
  description: string;
  mediaUrls?: string[];
}

export interface AIAnalysisResult {
  verified: boolean;

  confidence: number;

  confidenceLevel: AIConfidenceLevel;

  category: string;

  subCategory?: string;

  detectedObjects: string[];

  detectedIssues: string[];

  severity: AISeverity;

  summary: string;

  suggestedSolutions: string[];

  recommendedActions: string[];

  requiresHumanReview: boolean;
}
