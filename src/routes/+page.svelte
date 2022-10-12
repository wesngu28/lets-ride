<script lang="ts">
  import Geno from '$lib/components/Geno.svelte'
  import Russ from '$lib/components/Russ.svelte'
  import Sidebar from '$lib/components/Sidebar.svelte'
  import TeamDraft from '$lib/components/TeamDraft.svelte'
</script>

<div class="flex justify-start">
  <Sidebar />
  <div class="flex flex-col flex-[3_3_0%] p-4 items-center right-0">
    <Russ />
    <div class="flex items-center justify-around">
      <Geno />
      <TeamDraft />
    </div>
  </div>
</div>
