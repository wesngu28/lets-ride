<script lang="ts">
  import { getQBLastGame } from '$lib/helpers/getQBLastGame'
  import { getQBSeasonStats } from '$lib/helpers/getQBSeasonStats'
  import type { seasonStats, weeklyGameStats } from 'src/models/Stats'
  import { onMount } from 'svelte'
  import LastWeekStats from './LastWeekStats.svelte'
    import Scoreboard from './Scoreboard.svelte'
  import SeasonStats from './SeasonStats.svelte'

  let weeklyGameStats = {} as weeklyGameStats
  let seasonStats = {} as seasonStats
  onMount(async () => {
    weeklyGameStats = await getQBLastGame('14881', '7')
    seasonStats = await getQBSeasonStats('14881')
  })
</script>

<div class="flex flex-col items-start p-6 text-white">
  <div class="flex items-center bg-[#453324] p-4">
    <div class="flex flex-col items-center">
      <img
        class="w-4/6"
        alt="first-year denver qb russell wilson"
        src="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/14881.png"
      />
      <SeasonStats
        headColor="#FB4F14"
        backColor="#324ab2"
        header="Russell Wilson in Denver"
        desc="A prized free agent acquisition, expectations are high for Russ in Denver. Will he able to cook?"
        seasonStat={seasonStats}
      />
    </div>
    <div class="flex flex-col items-center p-4 text-center">
      <Scoreboard {weeklyGameStats} />
      <LastWeekStats {weeklyGameStats} />
    </div>
  </div>
</div>
