<script lang="ts">
    import { onMount } from "svelte";
    import ShortStats from "./ShortStats.svelte";
    import Stats from "./Stats.svelte";

    onMount(async()=> {
        const lastGameResponse = await fetch('https://site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/14881/gamelog')
        const lastGameJson = await lastGameResponse.json()
        console.log(lastGameJson.seasonTypes[0].categories[0].events[0].stats)
    })
</script>

<div>
    <img
        src="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/14881.png"
    />
    <div>
        <Stats
            headColor="#002244"
            backColor="#9be28"
            header="Russell Wilson's career stats with Seattle"
            desc="Russell Wilson spent the majority of his career in Seattle, becoming
                known as a top quarterback and leading the Hawks to 2 super bowls."
            completions="3,079 completions"
            total="4,735 attempts"
            completepctg={65}
            yards={37059}
            ypa={7.8}
            td={292}
            int={87}
            tdintratio={3.35}
            rushes={4689}
            sacks={427}
            fumbles={87}
            qbr={101.8}
        />
        <ShortStats
            header="Dynamic Broncos vs Opponent"
            completions="api pulla"
            total="api pulla"
            yards={100}
            ypa={0.88}
            td={0}
            int={5}
            qbr={0.55}
            sacks={13}
        />
        <Stats
            headColor="#FB4F14"
            backColor="#324ab2"
            header="Russell Wilson in Denver"
            desc="A prized free agent acquisition, expectations are high for Russ in Denver. Will he able to cook?"
            completions="api pulla"
            total="api pulla"
            completepctg={12.25}
            yards={333}
            ypa={1.1}
            td={1}
            int={10}
            tdintratio={0.1}
            qbr={10.0}
            rushes={10}
            sacks={65}
            fumbles={33}
        />
    </div>
</div>

<style lang="scss">
    div {
        padding-left: 2rem;
        padding-right: 2rem;
        display: flex;
        align-items: center;
        div {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
</style>
