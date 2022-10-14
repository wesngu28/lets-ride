<script lang="ts">
  import { alive } from '$lib/helpers/alive'
  import { getQBLastGame } from '$lib/helpers/getQBLastGame'
  import { getQBSeasonStats } from '$lib/helpers/getQBSeasonStats'
  import type { stats } from 'src/models/Stats'
  import LastWeekStats from './LastWeekStats.svelte'
  import Scoreboard from './Scoreboard.svelte'
  import SeasonStats from './SeasonStats.svelte'
  import Team from './Team.svelte'

  export let altLogo: string
  export let srcLogo: string
  export let logoName: string
  export let altPlayer: string
  export let srcPlayer: string
  export let team: string

  let weeklyGameStats = {
    opponent: 'Getting data...',
    week: 'Getting data...',
    home: 'Getting data...',
    away: 'Getting data...',
    tds: 'Getting data...',
    completions: 'Getting data...',
    attempts: 'Getting data...',
    yards: 'Getting data...',
    ints: 'Getting data...',
    sacks: 'Getting data...',
    qbr: 'Getting data...'
  } as stats
  let seasonStats = {
    tds: 'Getting data...',
    completions: 'Getting data...',
    attempts: 'Getting data...',
    yards: 'Getting data...',
    ints: 'Getting data...',
    sacks: 'Getting data...',
    qbr: 'Getting data...'
  } as stats

  alive(async function fetchData() {
    weeklyGameStats = await getQBLastGame('14881', '7')
    seasonStats = await getQBSeasonStats('14881')
  }, 86400000)
</script>

<div class="flex flex-col items-center p-3 text-white lg:flex-row lg:p-6">
  <div class="flex flex-col items-center bg-[#453324] p-1 lg:p-4 2xl:flex-row">
    <Team {team} alt={altLogo} logo={srcLogo} teamName={logoName} />
    <div class="flex flex-col items-center">
      <img class="w-4/6" alt={altPlayer} src={srcPlayer} />
      <SeasonStats seasonStat={seasonStats} />
    </div>
    <div class="flex flex-col items-center p-1 text-center lg:p-4">
      <Scoreboard {weeklyGameStats} />
      <LastWeekStats {weeklyGameStats} />
    </div>
  </div>
</div>
