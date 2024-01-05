// import { useState } from 'react';
import './App.css';
import Calculator from './Calculator/Calculator';
// import Clock from './Clock';
// import BareInput from './BareInput';
// import BareButton from './BareButton';
// import LoginControl from './LoginControl';
// import CorrectlyState from './CorrectlyState';
// import Form from './Form/Form';
// import UncontrolledComponent from './Form/UncontrolledComponent';
// import ProductList from './ProductList/ProductList';

function App() {
    // const [name, setName] = useState('Name1');
    // const [visible, setVisible] = useState(true);

    return (
        <div className="">
            {/* {visible && <Clock name={name} />}
            <button onClick={() => setName('Name2')}>Change name</button>
            <button onClick={() => setVisible(!visible)}>Hide click component</button>

            <h1>-------------------------------------------</h1>

            <BareInput type="text" value="100" className="input-control" onChange={() => {}} />

            <h1>-------------------------------------------</h1>

            <BareButton /> */}
            {/* <LoginControl isLogin={false} /> */}
            {/* <CorrectlyState /> */}
            {/* <ProductList /> */}
            {/* <Form /> */}
            {/* <UncontrolledComponent /> */}
            <Calculator />
        </div>
    );
}

export default App;
