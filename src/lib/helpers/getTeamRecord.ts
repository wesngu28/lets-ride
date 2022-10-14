export async function getTeamRecord(teamID: string): Promise<string> {
  console.log(teamID)
  const teamRecordResponse = await fetch(
    `https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2022/types/2/teams/${teamID}/record?lang=en&region=us`
  )
  const teamRecordResponseJson = await teamRecordResponse.json()
  const stats: string = teamRecordResponseJson.items[0].summary
  console.log(stats)
  return stats
}
