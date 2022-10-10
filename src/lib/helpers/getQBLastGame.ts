export async function getQBLastGame(espnAthleteID: string) {
  const lastGameStatsResponse = await fetch(
    `https://site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/${espnAthleteID}/gamelog`
  )
  const lastGameStatsJson = await lastGameStatsResponse.json()
  const stats = lastGameStatsJson.seasonTypes[0].categories[0].events[0].stats
  let eventId = lastGameStatsJson.seasonTypes[0].categories[0].events[0].eventId
  const opponent = lastGameStatsJson.events[eventId]
  const scoreConstruction = () => {
    if (opponent.homeTeamId === '7') {
      return `${opponent.homeTeamScore} - ${opponent.awayTeamScore}`
    }
    return `${opponent.awayTeamScore} - ${opponent.homeTeamScore}`
  }
  let gameInfo = {
    week: opponent.week,
    opponent: opponent.opponent.displayName,
    score: scoreConstruction(),
    completions: stats[0],
    attempts: stats[1],
    yards: stats[2],
    compctg: stats[3],
    ypa: stats[4],
    tds: stats[5],
    ints: stats[6],
    sacks: stats[8],
    qbr: stats[9]
  }
  return gameInfo
}
