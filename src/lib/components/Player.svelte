<script lang="ts">
    import { getQBLastGame } from '$lib/helpers/getQBLastGame'
    import { getQBSeasonStats } from '$lib/helpers/getQBSeasonStats'
    import type { seasonStats, weeklyGameStats } from 'src/models/Stats'
    import { onMount } from 'svelte'
    import LastWeekStats from './LastWeekStats.svelte'
      import Scoreboard from './Scoreboard.svelte'
    import SeasonStats from './SeasonStats.svelte'
      import Team from './Team.svelte'
  
    export let altLogo: string;
    export let srcLogo: string;
    export let logoName: string;
    export let altPlayer: string;
    export let srcPlayer: string;
    export let team: string;

    let weeklyGameStats = {} as weeklyGameStats
    let seasonStats = {} as seasonStats
    onMount(async () => {
      weeklyGameStats = await getQBLastGame('14881', '7')
      seasonStats = await getQBSeasonStats('14881')
    })
  </script>
  
  <div class="w-flex flex-col lg:flex-row items-center p-3 lg:p-6 text-white">
    <div class="flex flex-col">
      <Team {team} alt={altLogo} logo={srcLogo} teamName={logoName}
      />
    </div>
  
    <div class="flex flex-col 2xl:flex-row items-center bg-[#453324] p-1 lg:p-4">
      <div class="flex flex-col items-center">
        <img
          class="w-4/6" alt={altPlayer} src={srcPlayer}
        />
        <SeasonStats
          seasonStat={seasonStats}
        />
      </div>
      <div class="flex flex-col items-center p-1 lg:p-4 text-center">
        <Scoreboard {weeklyGameStats} />
        <LastWeekStats {weeklyGameStats} />
      </div>
    </div>
  </div>