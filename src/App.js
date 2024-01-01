import { useState } from 'react';
import './App.css';
import Clock from './Clock';

function App() {
    const [name, setName] = useState('Name1');

    return (
        <>
            <Clock name={name} />
            <button onClick={() => setName('Name2')}>Change name</button>
        </>
    );
}

export default App;
