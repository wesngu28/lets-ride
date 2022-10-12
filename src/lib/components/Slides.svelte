<script lang="ts">
  let images = ['/RussHamler.png', '/CrowdLove.png', '/ColtHello.png']
  let active: string
  active = images[0]
  setInterval(() => {
    active = images[Math.floor(Math.random() * images.length)]
  }, 5000)
</script>

<div class="flex justify-center h-96 width-1/2">
  <img class="p-4 w-full h-full" alt="honestly visual way to represent russ's time with the bronco" src={active} />
</div>