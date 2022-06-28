import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";

type LessonProps = {
    title: string;
    slug: string;
    date: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
    const { slug } = useParams<{slug: string}>();
    const isLessonAvailable = isPast(props.date);
    const dateFormat = format(props.date, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", { locale: ptBR });

    return (
        <Link to={`/evento/aula/${props.slug}`}>
            <span className="text-gray-300">{dateFormat}</span>
            <div className={`rounded border border-gray-500 p-4 mt-2 hover:border-green-500 ${slug === props.slug ? 'bg-green-700 border-green-500' : 'bg-gray-700'}`}>
                <header className="flex items-center justify-between">
                    { isLessonAvailable ? (
                        <span className={`flex gap-2 items-center text-sm font-medium ${slug === props.slug ? 'text-gray-100' : 'text-blue-500'}`}>
                            <CheckCircle size={20} />
                            Conteúdo liberado 
                        </span>
                        ) : (
                        <span className="flex gap-2 items-center text-sm font-medium text-orange-500">
                                <Lock size={20} />
                                Em breve 
                        </span>
                    )}
                    <span className={`text-xs text-white font-medium rounded border  px-2 py-1 ${slug === props.slug ? 'text-gray-100' : 'border-green-500'}`}>
                       { props.type == 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>
                <strong className="text-gray-200 mt-5 block">
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}