import Link from 'next/link';
import { useState } from 'react';

function Home() {
    return ( 
        <div>
            <h1>Home updated (nova versão em produção...)</h1> 
            <Link  href="/sobre">
                <a>Acessar página sobre</a>
            </Link>
            <Contador />
        </div>
    )    
}

function Contador() {
    const [contador,setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home;