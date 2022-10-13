<script lang="ts">
  let images = ['/RussHamler.png', '/CrowdLove.png', '/ColtHello.png']
  let active: string
  active = images[0]
  setInterval(() => {
    active = images[Math.floor(Math.random() * images.length)]
  }, 5000)
</script>

<div class="width-1/2 flex h-96 justify-center">
  <img
    class="object-cover p-4"
    alt="honestly visual way to represent russ's time with the bronco"
    src={active}
  />
</div>
