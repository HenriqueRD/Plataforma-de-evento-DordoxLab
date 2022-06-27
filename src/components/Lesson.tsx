import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link } from "react-router-dom";

type LessonProps = {
    title: string;
    slug: string;
    date: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
    const isLessonAvailable = isPast(props.date);
    const dateFormat = format(props.date, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", { locale: ptBR });

    return (
        <Link to={`/evento/aula/${props.slug}`}>
            <span className="text-gray-300">{dateFormat}</span>
            <div className="rounded border border-gray-500 p-4 mt-2 hover:border-green-500">
                <header className="flex items-center justify-between">
                    { isLessonAvailable ? (
                        <span className="flex gap-2 items-center text-sm font-medium text-blue-500">
                            <CheckCircle size={20} />
                            Conteúdo liberado 
                        </span>
                        ) : (
                        <span className="flex gap-2 items-center text-sm font-medium text-orange-500">
                                <Lock size={20} />
                                Em breve 
                        </span>
                    )}
                    <span className="text-xs text-white font-medium rounded border border-green-500 px-2 py-1">
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