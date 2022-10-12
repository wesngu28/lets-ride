<script lang="ts">
  import { onMount } from 'svelte'
  export let header: string = ''
  export let desc: string = ''
  export let completions: string
  export let total: string
  export let yards: string
  export let ypa: string
  export let td: string
  export let int: string
  export let qbr: string
  export let sacks: string

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
      <th class="p-2">Yards per Attempt</th>
      <th class="p-2">Touchdowns</th>
      <th class="p-2">Interceptions</th>
      <th class="p-2">QB Rating</th>
      <th class="p-2">Sacks</th>
    </tr>
    <tr>
      <td class="p-2">{completions}<br />{total}</td>
      <td class="p-2">{yards}</td>
      <td class="p-2">{ypa}</td>
      <td class="p-2">{td}</td>
      <td class="p-2">{int}</td>
      <td class="p-2">{qbr}</td>
      <td class="p-2">{sacks}</td>
    </tr>
  </tbody>
</table>
