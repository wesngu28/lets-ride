<script lang="ts">
  import Draft from '$lib/components/Draft.svelte'
  import Geno from '$lib/components/Geno.svelte'
  import Russ from '$lib/components/Russ.svelte'
  import Sidebar from '$lib/components/Sidebar.svelte'
  import Team from '$lib/components/Team.svelte'
</script>

<div id="page">
  <Sidebar />
  <div id="content">
    <div id="most">
      <div id="unlimited">
        <Russ />
      </div>
    </div>
    <div id="rest">
      <div>
        <Geno />
      </div>
      <div id="teams-draft">
        <div id="teams">
          <Team
            logo="https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Denver_Broncos_logo.svg/2560px-Denver_Broncos_logo.svg.png"
            teamName="Denver Broncos"
          />
          <Team
            logo="https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Seattle_Seahawks_logo.svg/2560px-Seattle_Seahawks_logo.svg.png"
            teamName="Seattle Seahawks"
          />
        </div>
        <div>
          <Draft />
        </div>
      </div>
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

  #page {
    display: flex;
    height: 100vh;
  }

  #content {
    position: absolute;
    right: 0;
    width: 73.25vw;
    display: flex;
    flex-direction: column;
    #most {
      height: 55vh;
      padding: 2rem;
    }
    #rest {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 25vh;
      div {
        padding: 1rem;
      }
      #teams-draft {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
    }
  }

  #teams {
    width: min-content;
    display: flex;
    flex-direction: column;
  }

  #unlimited {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
</style>
