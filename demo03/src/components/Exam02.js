import { useState } from 'react';
import kiaImage from '../assets/images/pt.png';

function Exam02() {
    //이 화면의 상태(state)는 한 개이다.
    const[size, setSize] = useState(200);

    // function small(){
    //     //size =100;//React에서 절대 사용 불가
    //     setSize(200);//React스러운 방법
    // }
    // function normal(){
    //     setSize(400);
    // }
    // function big(){
    //     setSize(800);
    // }

    return (
        <>
            <h1>두 번째 예제</h1>
            <button onClick={()=>setSize(200)}>작게</button>
            <button onClick={()=>setSize(400)}>기본</button>
            <button onClick={()=>setSize(700)}>크게</button>
            <br/>
            <img src={kiaImage} width={size} height={size}/>
        </>
    );
} 

export default Exam02;