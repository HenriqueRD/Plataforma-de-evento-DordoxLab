import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";

const POST_SUBSCRIBER = gql`
    mutation ($name:String!, $email:String!) {
    createSubscriber(data: {name: $name, email: $email}) {
        id
    }}
`
export function Home() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigation = useNavigate();
    const [createSubscriber, { loading }] = useMutation(POST_SUBSCRIBER);
    
    async function handleSubscriber(event:FormEvent) {
        event.preventDefault();
        if(name === '' || email === '') {
            alert('Preencha todos os campos!')
            return;
        }

        await (await createSubscriber({ variables: { name, email}}))

        navigation('/evento')
    }

    return (
        <>
            <Header />
            <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
                <div className="w-full max-w-[1200px] flex items-center justify-between mt-20">
                    <div className="max-w-[650px]">
                        <h1 className="text-4xl font-mediumbold">Construa uma <strong className="text-blue-500">aplicação completa</strong>,<br/> do zero, com <strong className="text-blue-500">React JS</strong></h1>
                        <p className="text-sm text-gray-200 mt-6 leading-relaxed">Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.</p>
                    </div>
                    <div className="flex max-w-[390px] flex-col border-2 rounded bg-gray-700 border-gray-500 p-8">
                        <h2 className="text-2xl font-medium block">Inscreva-se gratuitamente</h2>
                        <form onSubmit={handleSubscriber} className="flex flex-col gap-4 mt-6">
                            <input type="text" placeholder="Seu nome completo" onChange={event => setName(event.target.value)} className="rounded p-4 bg-gray-900" />
                            <input type="text" placeholder="Digite seu email" onChange={event => setEmail(event.target.value)} className="rounded p-4 bg-gray-900" />
                            <button type="submit" disabled={loading} className="p-4 mt-4 bg-green-500 rounded disabled:opacity-50 hover:bg-green-700 transition-colors">GARANTIR MINHA VAGA</button>
                        </form>
                    </div>
                </div>
                <img src="/src/assets/image.png" className="" alt="" /> 
            </div>
        </>
    )
}