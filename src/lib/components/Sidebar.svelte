<script lang="ts">
    import Slides from "./Slides.svelte";
    import Header from "../components/Header.svelte";
    import Trade from "../components/Trade.svelte"
</script>

<div>
    <Header />
    <Slides />
    <Trade />
</div>

<style lang="scss">
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        top: 0;
        left: 0;
        position: absolute;
        width: 25vw;
        height: 100vh;
        background-color: rgb(30 41 59);
        padding-left: 1rem;
        padding-right: 1rem;
    }
</style>