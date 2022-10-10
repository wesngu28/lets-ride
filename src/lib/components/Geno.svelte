<script lang="ts">
  import { getQBLastGame } from '$lib/helpers/getQBLastGame'
  import { onMount } from 'svelte'
  import Stats from './Stats.svelte'
  let weeklyGameStats = {} as {
    opponent: string
    week: string
    score: string
    completions: string
    attempts: string
    yards: string
    compctg: string
    ypa: string
    tds: string
    ints: string
    sacks: string
    qbr: string
  }

  onMount(async () => {
    weeklyGameStats = await getQBLastGame('15864')
  })
</script>

<div>
  <div>
    <img src="/geno.png" />
    <div>
      <h3>Geno's Second Chance</h3>
      <p>"They wrote me off but I ain't write back though."</p>
    </div>
  </div>
  <h2>{`Week ${weeklyGameStats.week} vs the ${weeklyGameStats.opponent}`}</h2>
  <p>{`${weeklyGameStats.score}`}</p>
  <p>
    {`${weeklyGameStats.completions}/${weeklyGameStats.attempts} for ${weeklyGameStats.yards} yards (${weeklyGameStats.ypa}ypa), ${weeklyGameStats.tds}/${weeklyGameStats.ints}TD, ${weeklyGameStats.qbr} QBR, ${weeklyGameStats.sacks} sacks`}
  </p>
  <Stats
    header="Let Geno Cook?"
    headColor="#FB4F14"
    backColor="#324ab2"
    completions="waboomba"
    total="api pulla"
    yards={333}
    ypa={1.1}
    td={1}
    int={10}
    qbr={10.0}
    sacks={65}
  />
</div>

<style lang="scss">
  div {
    background-color: #917153;
    height: max-content;
    width: 25vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      display: flex;
      flex-direction: row;
      text-align: center;
      div {
        display: flex;
        flex-direction: column;
        width: max-content;
      }
    }
    h2 {
      margin-bottom: 0;
    }
    p {
      margin-top: 0;
    }
    padding: 0.5rem;
  }
  img {
    width: 75%;
    border-radius: 15%;
  }
</style>
