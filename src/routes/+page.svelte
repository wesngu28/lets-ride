<script lang="ts">
  import Geno from '$lib/components/Geno.svelte'
  import Russ from '$lib/components/Russ.svelte'
  import Sidebar from '$lib/components/Sidebar.svelte'
  import TeamDraft from '$lib/components/TeamDraft.svelte'
</script>

<div class="flex justify-start">
  <Sidebar />
  <div class="right-0 flex flex-[3_3_0%] flex-col items-center p-4">
    <Russ />
    <div class="flex items-center justify-around">
      <Geno />
      <TeamDraft />
    </div>
  </div>
</div>
