<script lang="ts">
  let images = ['/RussHamler.png', '/CrowdLove.png', '/ColtHello.png']
  let active: string
  active = images[0]
  setInterval(() => {
    active = images[Math.floor(Math.random() * images.length)]
  }, 5000)
</script>

<div>
  <img alt="honestly visual way to represent russ's time with the bronco" src={active} />
</div>

<style lang="scss">
  div {
    display: flex;
    justify-content: center;
    width: 50vw;
  }
  img {
    padding: 1rem;
    width: 50%;
    height: auto;
  }
</style>
