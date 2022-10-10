<script lang="ts">
    import { onMount } from "svelte";
    export let header: string;
    export let completions: string;
    export let total: string;
    export let yards: number;
    export let ypa: number;
    export let td: number;
    export let int: number;
    export let qbr: number;
    export let sacks: number;

    let table: HTMLTableElement;

</script>

<div>
    <table bind:this={table}>
        <div>
            <h2>{header}</h2>
        </div>
    
        <tbody>
            <tr>
                <th>Passes</th>
                <th>Yards</th>
                <th>Yards per Attempt</th>
                <th>Touchdowns</th>
                <th>Interceptions</th>
                <th>QB Rating</th>
                <th>Sacks</th>
            </tr>
            <tr>
                <td>{completions}<br />{total}</td>
                <td>{yards}</td>
                <td>{ypa}</td>
                <td>{td}</td>
                <td>{int}</td>
                <td>{qbr}</td>
                <td>{sacks}</td>
            </tr>
        </tbody>
    </table>
</div>

<style lang="scss">
    table {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        div {
            color: white;
            h2 {
                padding: 1rem;
                font-weight: bold;
                text-align: center;
            }
        }
        padding: 1rem;
        border-collapse: collapse;
        place-items: center;
        th {
            padding: 1rem;
            background-color: gray;
            color: white;
        }
        td {
            padding: 1rem;
            background-color: gray;
            text-align: center;
        }
    }
</style>
