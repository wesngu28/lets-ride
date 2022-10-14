<script lang="ts">
  import Draft from '$lib/components/Draft.svelte'
  import Player from '$lib/components/Player.svelte'
  import Sidebar from '$lib/components/Sidebar.svelte'
</script>

<svelte:head>
  <title>Let's Ride</title>
  <meta name="rating" content="general" />
  <meta name="lang" content="en-us" />
  <meta property="og:title" content="Russ, Where we Riding?" />
  <meta property="og:description" content="Updated view at Russ and Geno's stats and the first round pick." />
  <meta property="og:image" content="/russandgeno.png" />
  <meta name="twitter:title" content="Russ, Where we Riding" />
  <meta name="twitter:description" content="Updated view at Russ and Geno's stats and the first round pick." />
  <meta name="twitter:image" content="/russandgeno.png" />
  <meta name="twitter:creator" content="wesngu28" />
  <meta name="keywords" content="seahawks, broncos, geno smith, russell wilson" />
</svelte:head>
<div class="flex flex-col justify-start lg:flex-row">
  <Sidebar />
  <div class="right-0 flex flex-[3_3_0%] flex-col items-center p-4">
    <Draft />
    <div
      class="h-3/4 place-items-center items-center md:grid md:grid-cols-2 lg:grid-cols-1"
    >
      <Player
        team="7"
        playerID="14881"
        altLogo="logo of the broncos, a team that played in sb xlviii"
        altPlayer="first-year denver qb russell wilson"
        srcLogo="./bronco.png"
        srcPlayer="./russ.png"
        logoName="Denver Broncos"
      />
      <Player
        team="26"
        playerID="15864"
        altLogo="logo of the seattle seahawks"
        altPlayer="geno smith"
        srcLogo="./seahawk.png"
        srcPlayer="./geno.png"
        logoName="Seattle Seahawks"
      />
    </div>
  </div>
</div>
