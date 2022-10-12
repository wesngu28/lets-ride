<script lang="ts">
  export let logo: string
  export let teamName: string
  export let alt: string
  let wins: number = 1
  let losses: number = 1
</script>

<div class="p-4 text-center flex flex-col m-4 items-center bg-slate-600">
  <img alt={alt} src={logo} />
  <h2 class="m-2">{teamName}</h2>
  <p><span class="m-2">{wins}</span><span>-</span><span class="m-2">{losses}</span></p>
</div>