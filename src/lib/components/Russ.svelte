<script lang="ts">
  import { getQBLastGame } from '$lib/helpers/getQBLastGame'
    import { getQBSeasonStats } from '$lib/helpers/getQBSeasonStats'
  import { getYardsPerAttempt } from '$lib/helpers/getYardsPerAttempt'
  import { onMount } from 'svelte'
  import Stats from './Stats.svelte'
  let weeklyGameStats = {} as {
    opponent: string
    week: string
    home: string
    away: string
    completions: string
    attempts: string
    yards: string
    compctg: string
    tds: string
    ints: string
    sacks: string
    qbr: string
  }

  let seasonStats ={} as {
    completions: string
    attempts: string
    yards: string
    tds: string
    ints: string
    sacks: string
    qbr: string
  }

  onMount(async () => {
    weeklyGameStats = await getQBLastGame('14881', '7')
    seasonStats = await getQBSeasonStats('14881')
  })

  const completionPercentage = (completions: string, total: string) => {
    const percentage = 100*(Number(completions)/Number(total))
    const decimal = String(percentage).indexOf('.')
    const decimalOverflow = String(percentage).substring(decimal+3, String(percentage).length)
    return String(percentage).replace(decimalOverflow, '')
  }
</script>

<div class="flex flex-col items-start p-6 text-white">
  <div class="flex items-center bg-[#453324] p-4">
    <div class="flex flex-col items-center">
      <img
        class="w-4/6"
        alt="first-year denver qb russell wilson"
        src="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/14881.png"
      />
      <!-- <Stats
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
        /> -->
      <Stats
        headColor="#FB4F14"
        backColor="#324ab2"
        header="Russell Wilson in Denver"
        desc="A prized free agent acquisition, expectations are high for Russ in Denver. Will he able to cook?"
        completions={seasonStats.completions}
        total={seasonStats.attempts}
        ypa={getYardsPerAttempt(seasonStats.attempts, seasonStats.yards)}
        yards={seasonStats.yards}
        td={seasonStats.tds}
        int={seasonStats.ints}
        qbr={seasonStats.qbr}
        sacks={seasonStats.sacks}
      />
    </div>
    <div class="p-4 text-center flex flex-col items-center">
      <h2 class="font-bold text-6xl">
        Week {weeklyGameStats.week} vs {weeklyGameStats.opponent}
      </h2>
      <p class="mt-0 mb-0 text-4xl">
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
      <div class="text-left">
        <p class="text-2xl">{weeklyGameStats.completions}/{weeklyGameStats.attempts} <span class="text-xl">({`${completionPercentage(weeklyGameStats.completions, weeklyGameStats.attempts)}%`})</span></p>
        <p class="text-2xl">{weeklyGameStats.yards} yards <span class="text-xl">({`${getYardsPerAttempt(weeklyGameStats.attempts, weeklyGameStats.yards)} ypa`})</p>
        <p class="text-2xl">{weeklyGameStats.tds}/{weeklyGameStats.ints} TD</p>
        <p class="text-2xl">{weeklyGameStats.qbr} QBR</p>
        <p class="text-2xl">Sacked {weeklyGameStats.sacks} times</p>
      </div>
    </div>
  </div>
</div>
