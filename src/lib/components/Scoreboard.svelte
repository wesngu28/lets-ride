<script lang="ts">
  import type { weeklyGameStats } from 'src/models/Stats'
  export let weeklyGameStats: weeklyGameStats
</script>

<h2 class="text-2xl lg:text-4xl font-bold">
  Week {weeklyGameStats.week} vs <span class="text-3xl lg:text-6xl font-bold">{weeklyGameStats.opponent}</span>
</h2>
<p class="mt-0 mb-0 text-2xl lg:text-4xl">
  <span
    class={`font-bold ${
      Number(weeklyGameStats.home) > Number(weeklyGameStats.away)
        ? 'text-green-400'
        : 'text-red-600'
    }`}>{weeklyGameStats.home}</span
  >
  -
  <span
    class={`${
      Number(weeklyGameStats.away) > Number(weeklyGameStats.home)
        ? 'text-green-400'
        : 'text-red-600'
    }`}>{weeklyGameStats.away}</span
  >
</p>
