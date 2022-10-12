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
  <div class="bg-[#917153] flex flex-col items-center h-max w-[48rem]">
    <div class="flex flex-row text-center items-center p-4">
      <img
        class="w-3/4 rounded-lg m-4"
        alt="geno smith, best starting qb for the seahawks in the 2020s"
        src="/geno.png"
      />
      <div>
        <h2 class="font-extrabold">Geno's Second Chance</h2>
        <p>"They wrote me off but I ain't write back though."</p>
      </div>
    </div>
    <h2 class="text-2xl">
      <span class="font-bold">WK{weeklyGameStats.week}</span> vs
      <span class="font-bold"
        >{`${weeklyGameStats.opponent}`} => {weeklyGameStats.score}</span
      >
    </h2>
    <table class="table table-fixed border-separate border-spacing-x-4">
      <tr>
        <th class="font-normal">Passes</th>
        <th class="font-normal">Yds</th>
        <th class="font-normal">Ypa</th>
        <th class="font-normal">TD</th>
        <th class="font-normal">QBR</th>
        <th class="font-normal">Sacks</th>
      </tr>
      <tr>
        <td class="font-black"
          >{weeklyGameStats.completions}/{weeklyGameStats.attempts}</td
        >
        <td class="font-black">{weeklyGameStats.yards}</td>
        <td class="font-black">{weeklyGameStats.ypa}</td>
        <td class="font-black">{weeklyGameStats.tds}/{weeklyGameStats.ints}</td>
        <td class="font-black">{weeklyGameStats.qbr}</td>
        <td class="font-black">{weeklyGameStats.sacks}</td>
      </tr>
    </table>
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
</div>
