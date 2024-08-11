// Code Keypad Component Here

function Keypad (){
    function handleChannge(){
        return(
            <p>Entering password...</p>
        )
    }
    return (
        <div>
            <input type="password" name="password" placeholder="password" onChange={()=>handleChannge()}/>
        </div>
    )
}

export default Keypad;