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
    weeklyGameStats = await getQBLastGame('14881')
  })
</script>

<div class="flex items-start flex-col">
  <div class="bg-[#453324] p-4 flex items-center">
    <div class="flex flex-col items-center">
      <img alt="first-year denver qb russell wilson"
        src="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/14881.png"
      />
      <h2 class="mb-0">{`Week ${weeklyGameStats.week} vs the ${weeklyGameStats.opponent}`}</h2>
      <p class="mt-0 mb-0">{`${weeklyGameStats.score}`}</p>
      <p class="mt-0">
        {`${weeklyGameStats.completions}/${weeklyGameStats.attempts} for ${weeklyGameStats.yards} yards (${weeklyGameStats.ypa}ypa), ${weeklyGameStats.tds}/${weeklyGameStats.ints}TD, ${weeklyGameStats.qbr} QBR, ${weeklyGameStats.sacks} sacks`}
      </p>
    </div>
    <div>
      <Stats
        headColor="#002244"
        backColor="#9be28"
        header="Russell Wilson's career stats with Seattle"
        desc="Russell Wilson spent the majority of his career in Seattle, becoming
                  known as a top quarterback and leading the Hawks to 2 super bowls."
        completions="3,079 completions"
        total="4,735 attempts"
        yards={37059}
        ypa={7.8}
        td={292}
        int={87}
        sacks={427}
        qbr={101.8}
      />
      <Stats
        headColor="#FB4F14"
        backColor="#324ab2"
        header="Russell Wilson in Denver"
        desc="A prized free agent acquisition, expectations are high for Russ in Denver. Will he able to cook?"
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
</div>