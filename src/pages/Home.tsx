import { Header } from "../components/Header";

export function Home() {
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
                        <form action="" className="flex flex-col gap-4 mt-6">
                            <input type="text" placeholder="Seu nome completo" className="rounded p-4 bg-gray-900" />
                            <input type="email" placeholder="Digite seu email" className="rounded p-4 bg-gray-900" />
                            <button type="submit" className="p-4 mt-4 bg-green-500 rounded hover:bg-green-700 transition-colors">GARANTIR MINHA VAGA</button>
                        </form>
                    </div>
                </div>
                <img src="/src/assets/image.png" className="" alt="" /> 
            </div>
        </>
    )
}