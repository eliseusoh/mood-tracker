import './App.css';
import { useState } from 'react';

function App() {

  const moods = ['😀','😂','🥰','🥺','😡']
  const [mood, setMood] = useState(null)

  return (
    <div className="app">
      <h1>Hi Elise! How are you feeling today?</h1>

      {/* for every emoji in my moods array, make a button for it */}
      <div className='mood-buttons'>
        {moods.map((mood, index)=>(
          <button 
          key={index}
          onClick={()=> setMood(mood)}>
            {mood}
            </button>
        ))}
      </div>

        {/* show this message only if a mood is selected */}
        {mood && (
          <div className='selected-mood'>
            <h4>Your mood today is: {mood}</h4>
          </div>
        )}
      

    </div>
  );
}

export default App;
