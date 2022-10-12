<script lang="ts">
  import Draft from '$lib/components/Draft.svelte'
  import Geno from '$lib/components/Geno.svelte'
  import Russ from '$lib/components/Russ.svelte'
  import Sidebar from '$lib/components/Sidebar.svelte'
  import Team from '$lib/components/Team.svelte'
    import TeamDraft from '$lib/components/TeamDraft.svelte'
    import TeamHolder from '$lib/components/TeamHolder.svelte'
</script>

<div class="flex justify-start">
  <Sidebar />
  <div id="content">
    <div id="most">
      <Russ />
    </div>
    <div class="flex justify-around items-center">
      <Geno />
      <TeamDraft />
    </div>
  </div>
</div>

<style lang="scss">
  :global(body) {
    margin: 0;
    padding: 0;
    height: 100vh;
    font-family: Roboto, Arial, sans-serif;
    overflow-x: hidden;
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-y: hidden;
    &::-webkit-scrollbar {
      display: none;
    }
    background-image: linear-gradient(60deg, #fb4f14, #003087);
  }

  #content {
    right: 0;
    flex: 3;
    align-items: center;
    display: flex;
    padding: 1rem;
    flex-direction: column;
    #most {
      padding: 2rem;
      align-items: center;
    }
  }

</style>
