<script lang="ts">
  import type { seasonStats } from 'src/models/Stats'
  import { onMount } from 'svelte'
  export let seasonStat: seasonStats
  export let header: string
  export let desc: string = ''
  export let headColor: string
  export let backColor: string

  let table: HTMLTableElement

  onMount(async () => {
    let ths = table!.querySelectorAll('th')
    ths.forEach(th => {
      th.style.backgroundColor = headColor
    })
    let tds = table!.querySelectorAll('td')
    tds.forEach(td => {
      td.style.backgroundColor = backColor
    })
  })
</script>

<table
  bind:this={table}
  class="flex border-collapse flex-col place-items-center p-4 text-white"
>
  <div class="text-center text-white">
    {#if header}
      <h2 class="font-bold">{header}</h2>
    {/if}
    {#if desc}
      <p>{desc}</p>
    {/if}
  </div>

  <tbody>
    <tr>
      <th class="p-2">Passes</th>
      <th class="p-2">Yards</th>
      <th class="p-2">Touchdowns</th>
      <th class="p-2">Interceptions</th>
      <th class="p-2">QB Rating</th>
      <th class="p-2">Sacks</th>
    </tr>
    <tr>
      <td class="p-2">{seasonStat.completions}/{seasonStat.attempts}</td>
      <td class="p-2">{seasonStat.yards}</td>
      <td class="p-2">{seasonStat.tds}</td>
      <td class="p-2">{seasonStat.ints}</td>
      <td class="p-2">{seasonStat.qbr}</td>
      <td class="p-2">{seasonStat.sacks}</td>
    </tr>
  </tbody>
</table>
