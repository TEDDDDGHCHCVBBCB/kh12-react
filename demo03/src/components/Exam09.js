import { useState } from "react";

const Exam09 = () => {
    //객체 배열 상태 변수
    const [monsters, setMonsters] = useState([
        { no: 1, name: "이상해씨", type: "풀" },
        { no: 2, name: "이상해풀", type: "풀밭" },
        { no: 3, name: "이상해꽃", type: "풀꽃밭" },
        { no: 4, name: "이상해나무", type: "풀나무" }
    ]);

    return (
        <>
            <h1>객체 배열 상태변수</h1>

            {monsters.map((monster, index)=>(
                <div key={monster.no}>
                {index}
                -
                {monster.no}
                -
                {monster.name}
                -
                {monster.type}
                </div>
            ))}
        </>

    );
};

export default Exam09;
