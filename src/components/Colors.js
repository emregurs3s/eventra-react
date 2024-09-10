import React ,{useState} from "react";
function Colors(){
    const [colors ,setColors] = useState(["Red","Green","Blue"]);
    const handleClick = () =>{
    setColors([...colors,"Grey"]);
    };
return (
    <div>
        
        {colors.map((color, i) => (
            <div key={i}>{color}</div>
        ))}
        <button onClick={handleClick}>
            Renk ekle
        </button>
    </div>
);
}
export default Colors;