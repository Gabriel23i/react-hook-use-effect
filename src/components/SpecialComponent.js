import { useEffect } from 'react'
function SpecialComponent(){
    useEffect(()=>{
        document.title = "Componente visível!";

        return () =>{
            document.title = "React Hooks | useEffect";
        }
    },[]);

    return(
        <div>
            <h3>Cheque o título da página!</h3>
        </div>
    )

}

export default SpecialComponent
