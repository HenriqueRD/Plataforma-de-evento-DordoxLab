import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

const GET_LESSONS = gql`
    query {
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
        id
        lessonType
        availableAt
        title
        slug
        }
}`

type LessonType = {
    lessons: Array<{
        id: string;
        lessonType: 'live' | 'class';
        availableAt: string;
        title: string;
        slug: string;
    }>
}

export function Sidebar() {
    const { data } = useQuery<LessonType>(GET_LESSONS);

    return (
        <aside className="w-[350px] bg-gray-700 p-6 border-l border-gray-600">
            <strong className="text-2xl pb-5 mb-6 border-b-2 border-gray-600 block">
                Cronograma das aulas
            </strong>
            <div className="flex flex-col gap-8">
                {
                    data?.lessons.map(lesson => {
                        return(
                            <Lesson
                                key={lesson.id}
                                title={lesson.title}
                                slug={lesson.slug}
                                date={new Date(lesson.availableAt)}
                                type={lesson.lessonType}
                            />
                        )
                    }) 
                }
            </div>     
        </aside>
    )
}