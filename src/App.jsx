import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title='Easy' targetTime={1}/>
        <TimerChallenge title='Not Easy' targetTime={5}/>
        <TimerChallenge title='Getting Hard' targetTime={10}/>
        <TimerChallenge title='Pro player' targetTime={15}/>
      </div>
    </>
  );
}

export default App;
