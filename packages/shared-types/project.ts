export type ProjectStage =
  | "SUBMITTED"
  | "VALIDATED"
  | "EVALUATION"
  | "SOLUTION_PROPOSED"
  | "COLLABORATION_FORMED"
  | "IMPLEMENTATION"
  | "TESTING"
  | "SOLVED";

export interface Milestone {
  id: string;
  projectId: string;
  title: string;
  dueDate?: string;
  status: string;
  completedAt?: string;
}

export interface Project {
  id: string;
  problemId: string;
  teamId: string;
  currentStage: ProjectStage;
  milestones: Milestone[];
  createdAt: string;
  updatedAt: string;
}
