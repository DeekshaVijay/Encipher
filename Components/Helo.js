import React , {useState} from "react";
function Hello() {
    const [show, setShow] = useState(false);
    return (
        <>
            <button onClick={() => setShow(!show)}>Click</button>
            {show && <p>Hello React</p>}
        </>
    )
}
export default Hello;