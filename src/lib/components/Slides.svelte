<script lang="ts">
  let images = [
    '/RussHamler.png',
    '/CrowdLove.png',
    '/ColtHello.png',
    'fly.png',
    'grouphug.png',
    'gilmore.png'
  ]
  let unhide: HTMLImageElement
  let active = 0
  setInterval(() => {
    active = Math.floor(Math.random() * images.length)
  }, 5000)
</script>

<div class="width-1/2 flex h-96 justify-center">
  {#each images as image, i}
    <img
      class={`object-cover p-4 ${i === active ? 'block animate-slideshow' : 'hidden'}`}
      alt="honestly visual way to represent russ's time with the bronco"
      src={image}
    />
  {/each}
</div>
