import './Keyboard.css';

const Keyboard = () => {
    return ( 
        <div className='keyboard glass-pane'>
            
            <h3>1234567890</h3>
            <h1>+1234567890</h1>

            <button className='allClearBtn grey-btn'>
                <div>AC</div>
            </button>
            <button className='deleteBtn grey-btn'>
                <div>Del</div>
            </button>
            <button className='precentageKey grey-btn'>
                <div>%</div>
            </button>
            <button className='nKey operator'>
                <div>/</div>
            </button>

            <button className='nKey'>
                <div>7</div>
            </button>
            <button className='nKey'>
                <div>8</div>
            </button>
            <button className='nKey'>
                <div>9</div>
            </button>
            <button className='multiplicationKey operator'>
                <div>X</div>
            </button>

            <button className='nKey'>
                <div>4</div>
            </button>
            <button className='nKey'>
                <div>5</div>
            </button>
            <button className='nKey'>
                <div>6</div>
            </button>
            <button className='substractionKey operator'>
                <div>-</div>
            </button>

            <button className='nKey'>
                <div>1</div>
            </button>
            <button className='nKey'>
                <div>2</div>
            </button>
            <button className='nKey'>
                <div>3</div>
            </button>
            <button className='additionKey operator'>
                <div>+</div>
            </button>

            <button className='nKey' id='key0'>
                <div>0</div>
            </button>
            <button className='dotKey'>
                <div>.</div>
            </button>
            <button className='equalKey operator'>
                <div>=</div>
            </button>

        </div>
     );
}
 
export default Keyboard;