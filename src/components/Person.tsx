import { useState } from 'react';


export default function Person(){
//    const person = 'Armistrong'
   const [person2, setPerson] = useState<string>('Armstrong' )

   setTimeout(() => {

    setPerson((state)=>{
        console.log(state)
        return 'John'
    })

    }, 2000); 
   return <div>
       <h1>Perfil</h1>
       <p>Este é o perfil de {person2}</p>
   </div>
}