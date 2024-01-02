import { useState } from 'react';
import './App.css';
import Clock from './Clock';

function App() {
    const [name, setName] = useState('Name1');
    const [visible, setVisible] = useState(true);

    return (
        <>
            {visible && <Clock name={name} />}
            <button onClick={() => setName('Name2')}>Change name</button>
            <button onClick={() => setVisible(!visible)}>Hide click component</button>
        </>
    );
}

export default App;
