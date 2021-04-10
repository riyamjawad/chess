export interface Profile {
  rank: number;
  rankDelta: number;
  wins: number;
  losses: number;
  draws: number;
  recentMatches: Match[];
}

export interface Match {
  opponent: {
    name: string;
    rankTitle: string;
  };
  result: number;
}
