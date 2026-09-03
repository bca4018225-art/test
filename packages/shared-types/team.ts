export type TeamMemberRole =
  | "FACULTY_MENTOR"
  | "STUDENT";

export interface TeamMember {
  id: string;
  userId: string;
  teamId: string;
  role: TeamMemberRole;
}

export interface Team {
  id: string;
  problemId: string;
  universityOrganizationId: string;
  members: TeamMember[];
  createdAt: string;
}
