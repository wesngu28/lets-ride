<script lang="ts">
    import Draft from '$lib/components/Draft.svelte'
    import Player from '$lib/components/Player.svelte'
  import Sidebar from '$lib/components/Sidebar.svelte'
</script>

<div class="flex flex-col lg:flex-row justify-start">
  <Sidebar />
  <div class="flex flex-[3_3_0%] flex-col items-center right-0 p-4">
    <Draft />
    <div class="md:grid md:grid-cols-2 place-items-center lg:grid-cols-1 h-3/4 items-center">
      <Player team="7" altLogo="logo of the broncos, a team that played in sb xlviii" altPlayer="first-year denver qb russell wilson" srcLogo="./bronco.png" srcPlayer="./russ.png" logoName ="Denver Broncos" />
      <Player team="26" altLogo="logo of the seattle seahawks" altPlayer="geno smith" srcLogo="./seahawk.png" srcPlayer="./geno.png" logoName ="Seattle Seahawks" />
    </div>
  </div>
</div>
