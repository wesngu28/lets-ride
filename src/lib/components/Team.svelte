<script lang="ts">
  export let logo: string
  export let teamName: string
  let wins: number = 1
  let losses: number = 1
</script>

<div>
  <img src={logo} />
  <h2>{teamName}</h2>
  <p><span>{wins}</span><span>-</span><span>{losses}</span></p>
</div>

<style lang="scss">
  div {
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    margin: 1rem;
    align-items: center;
    background-color: wheat;
    h2 {
      margin: 0;
      text-align: center;
    }
    p {
      text-align: center;
      span {
        margin: 0.5rem;
      }
    }
    img {
      width: 30%;
      height: auto;
    }
  }
</style>
