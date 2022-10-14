<script lang="ts">
  import { getTeamRecord } from '$lib/helpers/getTeamRecord'
    import { onMount } from 'svelte'
  export let logo: string
  export let teamName: string
  export let alt: string
  export let team: string
  let record: string
    onMount(async () => {
      record = await getTeamRecord(team)
    })
</script>

<div class="m-4 flex flex-col items-center bg-slate-600 p-2 lg:p-4 text-center">
  <img class="w-1/6 md:w-auto" {alt} src={logo} />
  <h2 class="m-2">{teamName}</h2>
  <p><span class="m-2">{record}</span></p>
</div>
