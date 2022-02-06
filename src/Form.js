import React ,{useState} from 'react'

function Form(){
    const [nam,setNam]=useState();
    const [fnam,setFnam]=useState();
    const [ema , setEma]=useState();
    const [fema , setFema]=useState();
    const [phn , setPhn]=useState();
    const [fphn , setFphn]=useState();
    const [passs,setPasss]=useState();
    const [fpasss ,  setFpasss]=useState();
    function submits(e){
        e.preventDefault();
        // const val1=e.target.value;
        console.log(nam)
        console.log(ema)
        console.log(phn)
        console.log(passs);
        // setNam(e.target.value)
        setFnam(nam);
        setFema(ema);
        setFphn(phn);
        setFpasss(passs);
    }
    function names(e){
        setNam(e.target.value)
    }
    function email(e){
        setEma(e.target.value);
    }
    function phone(e){
        setPhn(e.target.value);
    }
    function pass(e){
        setPasss(e.target.value)
    }
    return(
        <div className="main">
        <h1>ENTER YOUR DETAILS HERE!!!</h1>
            <form onSubmit={submits}>
                <input type="text" placeholder="enter your name" onChange={names} value={nam} />
                <input tye="text" placeholder="enter your email" onChange={email} 
                 value={ema}
                />
                <input tye="text" placeholder="enter your phone nuber" onChange={phone} value={phn} />
                <input tye="text" placeholder="enter your password" onChange={pass} value={passs} />
                <button type="submit">Submit</button>
            </form>
            <div>
            <h1>{fnam}</h1>
            <h1>{fema}</h1>
            <h1>{fphn}</h1>
            <h1>{fpasss}</h1>
            </div>
        </div>
    )
}
export default Form;