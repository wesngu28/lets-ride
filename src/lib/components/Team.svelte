<script lang="ts">
  export let logo: string
  export let teamName: string
  export let alt: string
  let wins: number = 1
  let losses: number = 1
</script>

<div class="m-4 flex flex-col items-center bg-slate-600 p-4 text-center">
  <img alt={alt} src={logo} />
  <h2 class="m-2">{teamName}</h2>
  <p><span class="m-2">{wins}</span><span>-</span><span class="m-2">{losses}</span></p>
</div>
