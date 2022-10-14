<script lang="ts">
  import { alive } from '$lib/helpers/alive.js'
  import { getTeamRecord } from '$lib/helpers/getTeamRecord'
  export let logo: string
  export let teamName: string
  export let alt: string
  export let team: string
  let record: string = 'Getting record...'

  alive(async function fetchData() {
    record = await getTeamRecord(team)
  }, 86400000)
</script>

<div class="m-4 flex flex-col items-center bg-[#453324] p-2 text-center lg:p-4">
  <img class="w-1/6 md:w-auto" {alt} src={logo} />
  <h2 class="m-2">{teamName}</h2>
  <p><span class="m-2">{record}</span></p>
</div>
