import { useState } from 'react';
import './Keyboard.css';

const Keyboard = () => {

    const [answer, setAnswer] = useState('');
    const [input, setInput] = useState('');

    let text1 = '';

    const [operatorEnter, setOperatorEntered] = useState(false);
    const [resetCal, SetResetCal] = useState(true);


    function numberEntered(num){
        setAnswer(answer + "" + num);
        console.log(text1);
        setOperatorEntered(false);
        SetResetCal(false);
    }

    function operatorEntered(operator){
        if(resetCal) return;
        if(operatorEnter){
            let array = answer.split(' ');
            array[array.length - 2] = operator;
            setAnswer(array.join(' '));
        }else{
            setAnswer(answer + " " + operator + " ");
            setOperatorEntered(true);
        }
        console.log(answer);
    }

    function calculation(formula){
        let arFormula = formula.split(' ');
        console.log('cal-start');
        console.log(arFormula);
        if(arFormula.length === 1) {
            setAnswer(formula);
            return formula;
        }
        let operator;
        for(let i = 1; i < arFormula.length - 1; i+=2){
            let ans;
            let num1 = Number.parseFloat(arFormula[i-1]);
            let num2 = Number.parseFloat(arFormula[i+1]);
            operator = arFormula[i];

            if(arFormula[i] === '%'){
                ans = num1 % num2;
            }else if(arFormula[i] === 'X'){
                ans = num1 * num2;
            }else if(arFormula[i] === '/'){
                ans = num1 / num2;
            }else if(arFormula[i] === '+'){
                ans = num1 + num2;
            }else if(arFormula[i] === '-'){
                ans = num1 - num2;
            }

            arFormula[i-1] = ans + "";
            arFormula.splice(i, 2);

        }
        console.log('cal-end ' + operator);
        console.log(arFormula);

        calculation(arFormula.join(' '));
    }

    function solveFormula(){
        // setAnswer(calculation(answer));
        console.log(calculation(answer));
        
        setInput(answer);
        SetResetCal(true);
    }

    return ( 
        <div className='keyboard glass-pane'>
            
            <h3 id='operation'>{input}</h3>
            <h1 id='input'>{answer}</h1>

            <button className='allClearBtn grey-btn' onClick={()=>{ 
                setAnswer('');
                setInput('');
                SetResetCal(true);
             }}>
                <div>AC</div>
            </button>
            <button className='deleteBtn grey-btn' onClick={()=>{ setAnswer(answer.substring(0, answer.length - 1)) }}>
                <div>Del</div>
            </button>
            <button className='precentageKey grey-btn' onClick={()=>{ operatorEntered('%') }}>
                <div>%</div>
            </button>
            <button className='nKey operator' onClick={()=>{ operatorEntered('/') }}>
                <div>/</div>
            </button>

            <button className='nKey' onClick={()=>{ numberEntered('7') }}>
                <div>7</div>
            </button>
            <button className='nKey' onClick={()=>{ numberEntered('8') }}>
                <div>8</div>
            </button>
            <button className='nKey' onClick={()=>{ numberEntered('9') }}>
                <div>9</div>
            </button>
            <button className='multiplicationKey operator' onClick={()=>{ operatorEntered('X') }}>
                <div>X</div>
            </button>

            <button className='nKey' onClick={()=>{ numberEntered('4') }}>
                <div>4</div>
            </button>
            <button className='nKey' onClick={()=>{ numberEntered('5') }}>
                <div>5</div>
            </button>
            <button className='nKey' onClick={()=>{ numberEntered('6') }}>
                <div>6</div>
            </button>
            <button className='substractionKey operator' onClick={()=>{ operatorEntered('-') }}>
                <div>-</div>
            </button>

            <button className='nKey' onClick={()=>{ numberEntered('1') }}>
                <div>1</div>
            </button>
            <button className='nKey' onClick={()=>{ numberEntered('2') }}>
                <div>2</div>
            </button>
            <button className='nKey' onClick={()=>{ numberEntered('3') }}>
                <div>3</div>
            </button>
            <button className='additionKey operator' onClick={()=>{ operatorEntered('+') }}>
                <div>+</div>
            </button>

            <button className='nKey' id='key0' onClick={()=>{ numberEntered('0') }}>
                <div>0</div>
            </button>
            <button className='dotKey' onClick={()=>{ numberEntered('.') }}>
                <div>.</div>
            </button>
            <button className='equalKey operator' onClick={()=>{ solveFormula() }}>
                <div>=</div>
            </button>

        </div>
     );
}
 
export default Keyboard;