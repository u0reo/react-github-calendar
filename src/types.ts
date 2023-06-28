import { CONTRIBUTION_LEVEL } from './constants';

export type Year = number | 'last';

export type ContributionLevel = (typeof CONTRIBUTION_LEVEL)[number];

export interface ApiResponse {
  contributions: Array<
    Array<{
      color: string;
      contributionCount: number;
      contributionLevel: ContributionLevel;
      date: string;
    }>
  >;
  totalContributions: number;
}

export interface ApiErrorResponse {
  error: string;
}
