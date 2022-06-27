import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning, Spinner, Image} from "phosphor-react";
import '@vime/core/themes/default.css'
import { gql, useQuery } from "@apollo/client";

const GET_LESSON = gql`
    query MyQuery ($slug: String){
    lesson(where: {slug: $slug}) {
        videoId
        title
        description
        teacher {
            bio
            avatarURL
            name
        }
        challenge {
            url
        }
    }
}`

type LessonProps = {
    lesson: {
        videoId: string,
        title: string,
        description: string,
        teacher: {
            bio: string,
            avatarURL: string,
            name: string,
        }
        challenge?: {
            url?: string,
        }
    }
}

type VideoProps = {
    slugVideo: string,
}

export function Video(props : VideoProps) {
    const { data } = useQuery<LessonProps>(GET_LESSON, { variables: { slug: props.slugVideo } });
    if(!data) {
        return ( 
            <div className="flex-1 items-center justify-between my-auto text-center">
                <span className="text-4xl font-medium flex items-center justify-center gap-8">
                    <Spinner size={70} />
                    Carregando...
                </span>
            </div> 
        )
    }
    return (
        <section className="flex-1">
            <div className="bg-gray-900 flex justify-center">
                <div className="h-full w-full max-w-[1200px] max-h-[60vh] aspect-video">
                    <Player>
                        <Youtube videoId={data.lesson.videoId} />
                        <DefaultUi />
                    </Player>                
                </div>        
            </div>
            <div className="p-8 max-w-[1200px] mx-auto">
                <div className="flex items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
                        <p className="mt-4 text-gray-200 leading-relaxed">{data.lesson.description}</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <a href="https://github.com/HenriqueRD" target="_blank" className="flex items-center justify-center font-medium gap-2 p-4 bg-green-700 rounded hover:bg-green-900 transition-colors">
                            <DiscordLogo size={24}/>
                            COMUNIDADE NO DISCORD
                        </a>
                        {
                            data.lesson.challenge != null &&
                            <a href="https://github.com/HenriqueRD" target="_blank" className="flex items-center justify-center font-medium gap-2 p-4 text-blue-500 border-2 border-blue-500 rounded hover:bg-blue-500 hover:text-gray-900 transition-colors">
                                <Lightning size={24}/>
                                ACESSE O DESAFIO
                            </a>
                        }                        
                    </div>
                </div>
                <div className="flex items-center gap-4 mt-6">
                    <img className="h-16 w-16 rounded-full border-2 border-blue-500" src={data.lesson.teacher.avatarURL} />
                    <div className="flex flex-col">
                        <span className="font-bold text-2xl">{data.lesson.teacher.name}</span>
                        <span className="text-sm text-gray-200">{data.lesson.teacher.bio}</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-20 p-23"> 
                    <a href="https://github.com/HenriqueRD" target="_blank" className="rounded bg-gray-700 overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <FileArrowDown size={40} />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <h2 className="text-2xl font-bold">Material complementar</h2>
                            <p className="text-sm text-gray-200">Acesse o material complementar para acelerar o seu desenvolvimento</p>
                        </div>
                        <div className="h-full p-6 flex items-center justify-center">
                            <CaretRight size={40} />
                        </div>
                    </a>
                    <a href="https://github.com/HenriqueRD" target="_blank" className="rounded bg-gray-700 overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <Image size={40} />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <h2 className="text-2xl font-bold">Wallpapers exclusivos</h2>
                            <p className="text-sm text-gray-200">Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina</p>
                        </div>
                        <div className="h-full p-6 flex items-center justify-center">
                            <CaretRight size={40} />
                        </div>
                    </a>
                </div>
            </div>
        </section>      
    )
}   