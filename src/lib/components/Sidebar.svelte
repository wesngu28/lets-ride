<script lang="ts">
  import Slides from './Slides.svelte'
  import Header from '../components/Header.svelte'
  import Trade from '../components/Trade.svelte'
</script>

<div class="hidden flex-1 flex-col items-center bg-[#1E293B] p-4 lg:flex lg:w-[42rem]">
  <Header />
  <Slides />
  <Trade />
</div>
