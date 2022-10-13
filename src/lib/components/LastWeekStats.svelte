<script lang="ts">
  import { completionPercentage } from '$lib/helpers/getCompletionPercentage'
  import { yardsPerAttempt } from '$lib/helpers/getYardsPerAttempt'
  import type { weeklyGameStats } from 'src/models/Stats'
  export let weeklyGameStats: weeklyGameStats
</script>

<table class="table table-fixed border-separate border-spacing-x-4">
  <tr>
    <th class="font-normal">Passes</th>
    <th class="font-normal">Yds</th>
    <th class="font-normal">TD</th>
    <th class="font-normal">QBR</th>
    <th class="font-normal">Sacked</th>
  </tr>
  <tr>
    <td class="text-xl lg:text-2xl font-black"
      >{weeklyGameStats.completions}/{weeklyGameStats.attempts} <br />
      <span class="text-xl lg:text-2xl"
        >({`${completionPercentage(
          weeklyGameStats.completions,
          weeklyGameStats.attempts
        )}%`})</span
      ></td
    >
    <td class="text-xl lg:text-2xl font-black"
      >{weeklyGameStats.yards}<br /><span class="text-xl"
        >({`${yardsPerAttempt(
          weeklyGameStats.attempts,
          weeklyGameStats.yards
        )} ypa`})</span
      ></td
    >
    <td class="text-xl lg:text-2xl font-black">{weeklyGameStats.tds}/{weeklyGameStats.ints}</td>
    <td class="text-xl lg:text-2xl font-black">{weeklyGameStats.qbr}</td>
    <td class="text-xl lg:text-2xl font-black">{weeklyGameStats.sacks}</td>
  </tr>
</table>
