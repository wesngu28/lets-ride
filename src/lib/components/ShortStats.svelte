<script lang="ts">
  export let header: string
  export let score: string
  export let completions: string
  export let total: string
  export let yards: string
  export let ypa: string
  export let td: string
  export let int: string
  export let qbr: string
  export let sacks: string
</script>

<div>
  <table>
    <div>
      <h2>{header}</h2>
      <p>{score}</p>
    </div>

    <tbody>
      <tr>
        <th>Passes</th>
        <th>Yards</th>
        <th>Yards/Attempt</th>
        <th>Touchdowns</th>
        <th>Interceptions</th>
        <th>QB Rating</th>
        <th>Sacks</th>
      </tr>
      <tr>
        <td>{completions}/{total}</td>
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
      text-align: center;
      h2 {
        margin-bottom: 0;
        font-weight: bold;
      }
      p {
        margin-top: 0;
        font-weight: 500;
      }
    }
    border-collapse: collapse;
    place-items: center;
    th {
      padding: 0.5rem;
      background-color: gray;
      color: white;
    }
    td {
      padding: 0.5rem;
      background-color: gray;
      text-align: center;
    }
  }
</style>
