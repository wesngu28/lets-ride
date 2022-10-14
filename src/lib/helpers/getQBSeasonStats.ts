import type { stats } from 'src/models/Stats'

export async function getQBSeasonStats(espnAthleteID: string): Promise<stats> {
  const lastGameStatsResponse = await fetch(
    `https://site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/${espnAthleteID}/gamelog`
  )
  const lastGameStatsJson = await lastGameStatsResponse.json()
  const stats = lastGameStatsJson.seasonTypes[0].summary.stats[0].stats
  let seasonInfo = {
    completions: stats[0],
    attempts: stats[1],
    yards: stats[2].replace(',', ''),
    tds: stats[5],
    ints: stats[6],
    sacks: stats[8],
    qbr: stats[9]
  }
  return seasonInfo
}
