import React ,{useState} from "react";

function Form()
{
    const[form,setForm] = useState({name:"",surname:"",gender:"0"});
    const handleChange=(e)=> {
        setForm({...form,[e.target.name]:e.target.value});
    };
    return(
        <div>
            <div>
        <div>
            İsim
        </div>
        
        <input placeholder="İsim" name="name"value={form.name} onChange={handleChange}/>
        <input placeholder="Soyisim" name = "surname"value={form.surname}onChange={handleChange}/>
            </div>
        <br/>
        <div>
            Cinsiyet
            <select name="gender"value={form.gender} onChange={handleChange}>
            <option value="0">Erkek</option>
            <option value="1">Kadın</option>
            </select>
        </div>
        <br/>
<div>
    İsim:
    <strong>
        {form.name} 
        {form.surname}
    </strong>

</div>
<div>
    Cinsiyet
    <strong>{form.gender  === "0" ? "Erkek ": "Kadın"}</strong>
</div>
        
        </div>



    );
}
export default Form;