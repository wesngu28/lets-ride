<script lang="ts">
  import { onMount } from 'svelte'
  export let header: string = ''
  export let desc: string = ''
  export let completions: string
  export let total: string
  export let yards: number
  export let ypa: number
  export let td: number
  export let int: number
  export let qbr: number
  export let sacks: number

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

<table bind:this={table}>
  <div>
    {#if header}
      <h2>{header}</h2>
    {/if}
    {#if desc}
      <p>{desc}</p>
    {/if}
  </div>

  <tbody>
    <tr>
      <th>Passes</th>
      <th>Yards</th>
      <th>Yards per Attempt</th>
      <th>Touchdowns</th>
      <th>Interceptions</th>
      <th>QB Rating</th>
      <th>Sacks</th>
    </tr>
    <tr>
      <td>{completions}<br />{total}</td>
      <td>{yards}</td>
      <td>{ypa}</td>
      <td>{td}</td>
      <td>{int}</td>
      <td>{qbr}</td>
      <td>{sacks}</td>
    </tr>
  </tbody>
</table>

<style lang="scss">
  table {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    div {
      color: white;
      h2 {
        font-weight: bold;
        text-align: center;
      }
    }
    padding-left: 1rem;
    padding-right: 1rem;
    border-collapse: collapse;
    place-items: center;
    th {
      padding: 0.5rem;
      background-color: var(--headColor);
      color: white;
    }
    td {
      padding: 0.5rem;
      background-color: #69be28;
      text-align: center;
    }
  }
</style>
