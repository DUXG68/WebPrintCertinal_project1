import { useState } from 'react';
import './css/App.css';
import './css/Certificate.css';
import data from './datajson.json';


const logo = require('./img/certinal.png');

function App() {
  const print = ()=>{

const nameInput: any =document.getElementsByClassName('nameInput');
nameInput[0].style.left= data.nameInputLeft;
nameInput[0].style.top= data.nameInputTop;
nameInput[0].style.fontSize= data.nameInputFontSize;

const evaluateInput: any =document.getElementsByClassName('evaluateInput');
evaluateInput[0].style.left= data.evaluateInputLeft;
evaluateInput[0].style.top= data.evaluateInputTop;
evaluateInput[0].style.fontSize= data.evaluateInputFontSize;

const dateInput: any =document.getElementsByClassName('dateInput');
dateInput[0].style.left= data.dateInputLeft;
dateInput[0].style.bottom= data.dateInputBottom;
dateInput[0].style.fontSize= data.dateInputFontSize;

const leftSide : any =document.getElementsByClassName('left-side ');
leftSide[0].style.width= '100%';

const rightSide : any =document.getElementsByClassName('right-side ');
rightSide[0].style.display= 'none';

const contentWrapper: any =document.getElementsByClassName('content-wrapper');
contentWrapper[0].style.width= '100%';
contentWrapper[0].style.height= '100%';
contentWrapper[0].style.border= 'none';
 window.print();

const backGround: any= document.getElementsByClassName('root');
backGround[0].style.display='none';
  } 
  
  const [name, setName] = useState('');
  const [evaluate, setEvaluate] = useState('');
  const [date, setDate] = useState('');
  const handleName = (e:React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }
  const handleEvaluate = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEvaluate(e.target.value);
  }
  const handleDate = (e:React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  }

  return (
    <div className='root'>
     
        <div className='left-side'>
           <div className='content-wrapper' id='main'>
             <div id='printable'>
             <span className='nameInput'>{name}</span>
             <span className='evaluateInput'>{evaluate}</span>
            <span className='dateInput'>{date}</span>
             <img src={logo} alt="" className='backG' />
            </div>
          </div>
        </div>

        <div className='right-side'>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">Họ và tên của học viên</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Ex: Đặng Danh Dũng" onChange={handleName}/>
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">Nhận xét</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Ex: for the great efforts ..." onChange={handleEvaluate} />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput3" className="form-label">Ngày nhận chứng chỉ</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Ex: June 04, 2021" onChange={handleDate}/>
          </div>
          <div className="buttonPrint">
          <button onClick={print} type="button" className="btn btn-success">Print</button>
          </div>
        </div>
    </div>
  )
}

export default App;
