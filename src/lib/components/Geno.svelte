<script>
    import ShortStats from "./ShortStats.svelte";
</script>
    <img src="/geno.png">
    <div>
        <ShortStats header="Dynamic Broncos vs Opponent" completions="api pulla" total="api pulla" yards={100} ypa={0.88} td={0} int={5} qbr={0.55} sacks={13}/>
    </div>

<style lang="scss">
    div {
        padding: 2rem;
        display: flex;
        align-items: center;
    }
    img {
        border-radius: 15%;
    }
</style>