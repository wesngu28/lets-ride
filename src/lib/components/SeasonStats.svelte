<script lang="ts">
  import { completionPercentage } from '$lib/helpers/getCompletionPercentage'
  import { yardsPerAttempt } from '$lib/helpers/getYardsPerAttempt'
  import type { stats } from 'src/models/Stats'
  import { onMount } from 'svelte'
  export let seasonStat: stats
  export let headColor: string = ''
  export let backColor: string = ''

  let table: HTMLTableElement

  onMount(async () => {
    if (headColor) {
      let ths = table!.querySelectorAll('th')
      ths.forEach(th => {
        th.style.backgroundColor = headColor
      })
    }
    if (backColor) {
      let tds = table!.querySelectorAll('td')
      tds.forEach(td => {
        td.style.backgroundColor = backColor
      })
    }
  })
</script>

<div class="text-left">
  <p class="text-center">2022</p>
  <p class="text-2xl">
    {seasonStat.completions}/{seasonStat.attempts}
    <span class="text-xl"
      >({`${completionPercentage(seasonStat.completions, seasonStat.attempts)}%`})</span
    >
  </p>
  <p class="text-2xl">
    {seasonStat.yards} yards
    <span class="text-xl"
      >({`${yardsPerAttempt(seasonStat.attempts, seasonStat.yards)} ypa`})</span
    >
  </p>
  <p class="text-2xl">{seasonStat.tds}/{seasonStat.ints} TD</p>
  <p class="text-2xl">{seasonStat.qbr} QBR</p>
  <p class="text-2xl">Sacked {seasonStat.sacks} times</p>
</div>
