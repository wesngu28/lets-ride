<div id="chief">
  <p>Round 1 - Pick 11</p>
  <div>
    <div id="pick-info">
      <div>
        <img
          alt={'seahawks logo'}
          id="logo"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Seattle_Seahawks_logo.svg/2560px-Seattle_Seahawks_logo.svg.png"
        />
        <p>SEA</p>
      </div>
      <p>From Denver</p>
    </div>
    <div id="player-info">
      <img alt={'placeholder for seahawks player'} id="player" src="/default.png" />
      <div>
        <p>???</p>
        <p>??? - College</p>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  #chief {
    display: flex;
    flex-direction: column;
    width: 36rem;
    background-color: #224952;
    border: solid 1px black;
    color: white;
    p {
      text-align: center;
      font-size: 1.2rem;
    }
    div {
      display: flex;
      flex-direction: row;
      align-items: stretch;
      #pick-info {
        border-top: solid 1px black;
        text-align: center;
        flex-direction: column;
        padding: 1rem;
        flex: 1;
        #logo {
          width: 50%;
          height: auto;
          padding: 1rem;
        }
        div {
          p {
            font-size: 1.5rem;
            font-weight: bold;
          }
          flex-direction: row;
          align-items: center;
        }
      }
      #player-info {
        #player {
          width: 43%;
          padding: 1rem;
        }
        padding: 1rem;
        border-top: solid 1px black;
        border-left: solid 1px black;
        flex-direction: row;
        justify-content: space-evenly;
        flex: 1;
        div {
          flex-direction: column;
        }
      }
    }
  }
</style>
