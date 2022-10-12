<script lang="ts">
  import Slides from './Slides.svelte'
  import Header from '../components/Header.svelte'
  import Trade from '../components/Trade.svelte'
</script>

<div class="flex h-screen w-[42rem] flex-1 flex-col items-center bg-[#1E293B] p-4">
  <Header />
  <Slides />
  <Trade />
</div>
