<script lang="ts">
    import Geno from "$lib/components/Geno.svelte";
    import Russ from "$lib/components/Russ.svelte";
    import Sidebar from "$lib/components/Sidebar.svelte";
    import Team from "$lib/components/Team.svelte";
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
            <Geno />
            <div id="teams">
                <Team logo="https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Denver_Broncos_logo.svg/2560px-Denver_Broncos_logo.svg.png" teamName="Denver Broncos"/>
                <Team logo="https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Seattle_Seahawks_logo.svg/2560px-Seattle_Seahawks_logo.svg.png" teamName="Seattle Seahawks"/>
            </div>
            <div>
                <p>A specter is haunting Europe—the specter of Communism. All the powers of old Europe have entered into a holy alliance to exorcise this specter; Pope and Czar, Metternich and Guizot, French radicals and German police spies.</p>
                <p>A specter is haunting Europe—the specter of Communism. All the powers of old Europe have entered into a holy alliance to exorcise this specter; Pope and Czar, Metternich and Guizot, French radicals and German police spies.</p>
                <p>A specter is haunting Europe—the specter of Communism. All the powers of old Europe have entered into a holy alliance to exorcise this specter; Pope and Czar, Metternich and Guizot, French radicals and German police spies.</p>
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
            height: max-content;
            padding: 2rem;
        }
        div {
            display: flex;
        }
        #rest {
            height: 25vh;
            div {
                display: flex;
                flex-direction: column;
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
