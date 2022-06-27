import { ArrowRight, Warning } from "phosphor-react";
import { useParams } from "react-router-dom"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Video } from "../components/Video"

export function Event() {
    const { slug } = useParams<{ slug: string }>();
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                {
                    slug ? <Video slugVideo={slug} /> : (
                        <div className="flex-1 items-center my-auto justify-between text-center">
                            <span className="text-4xl font-medium flex items-center gap-8 justify-center">                            
                                <Warning size={80} />Escolha uma aula ao lado <ArrowRight size={80} />
                            </span>
                        </div>
                    )
                }
                <Sidebar />
            </main>
        </div>
    )
}