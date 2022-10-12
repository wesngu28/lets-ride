<script lang="ts">
  import { getQBLastGame } from '$lib/helpers/getQBLastGame'
  import { getQBSeasonStats } from '$lib/helpers/getQBSeasonStats'
  import { yardsPerAttempt } from '$lib/helpers/getYardsPerAttempt'
  import type { seasonStats, weeklyGameStats } from 'src/models/Stats'
  import { onMount } from 'svelte'
  import LastWeekStats from './LastWeekStats.svelte'
    import Scoreboard from './Scoreboard.svelte'
  import SeasonStats from './SeasonStats.svelte'

  let weeklyGameStats = {} as weeklyGameStats
  let seasonStats = {} as seasonStats
  onMount(async () => {
    weeklyGameStats = await getQBLastGame('15864', '26')
    seasonStats = await getQBSeasonStats('15864')
  })
</script>

<div>
  <div class="flex h-max w-[48rem] flex-col items-center bg-[#453324] text-white">
    <div class="flex flex-row items-center p-4 text-center">
      <img
        class="m-4 w-3/4 rounded-lg"
        alt="geno smith, best starting qb for the seahawks in the 2020s"
        src="/geno.png"
      />
      <div>
        <h2 class="font-extrabold">Geno's Second Chance</h2>
        <p>"They wrote me off but I ain't write back though."</p>
      </div>
    </div>
    <Scoreboard {weeklyGameStats} />
    <LastWeekStats {weeklyGameStats} />
    <SeasonStats
      seasonStat={seasonStats}
      header="Let Geno Cook?"
      headColor="#FB4F14"
      backColor="#324ab2"
    />
  </div>
</div>
