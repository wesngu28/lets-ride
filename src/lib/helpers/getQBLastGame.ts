import type { weeklyGameStats } from 'src/models/Stats'

export async function getQBLastGame(
  espnAthleteID: string,
  teamID: string
): Promise<weeklyGameStats> {
  const lastGameStatsResponse = await fetch(
    `https://site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/${espnAthleteID}/gamelog`
  )
  const lastGameStatsJson = await lastGameStatsResponse.json()
  const stats = lastGameStatsJson.seasonTypes[0].categories[0].events[0].stats
  let eventId = lastGameStatsJson.seasonTypes[0].categories[0].events[0].eventId
  const opponent = lastGameStatsJson.events[eventId]
  const teamScore = () => {
    if (opponent.homeTeamId === teamID) {
      return opponent.homeTeamScore
    }
    if (opponent.awayTeamId === teamID) {
      return opponent.awayTeamScore
    }
  }
  const opponentScore = () => {
    if (opponent.homeTeamId !== teamID) {
      return opponent.homeTeamScore
    }
    if (opponent.awayTeamScore !== teamID) {
      return opponent.awayTeamScore
    }
  }
  let gameInfo = {
    week: opponent.week,
    opponent: opponent.opponent.abbreviation,
    home: teamScore(),
    away: opponentScore(),
    completions: stats[0],
    attempts: stats[1],
    yards: stats[2],
    compctg: stats[3],
    tds: stats[5],
    ints: stats[6],
    sacks: stats[8],
    qbr: stats[9]
  }
  return gameInfo
}
