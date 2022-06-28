import classNames from "classnames";
import { useGetLessonsQuery } from "../graphql/generated";
import { ActionMenu } from "../interfaces/ActionMenu";
import { Lesson } from "./Lesson";


export function Sidebar(props: ActionMenu) {
    const { data } = useGetLessonsQuery()

    return (
        <aside className={classNames("w-[348px] bg-gray-700 p-6 border-l border-gray-600 xl:w-auto xl:relative xl:block", {
            "block sm:w-full sm:absolute sm:z-50 sm:top-15 sm:right-0 " : props.isOpen,
            "hidden" : !props.isOpen,
        })}>
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronograma de aulas
            </span>

            <div className="flex flex-col gap-8">
                {data?.lessons.map(lesson => {
                    return(
                        <Lesson 
                            key={lesson.id}
                            title={lesson.title}
                            slug={lesson.slug}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                            isOpen={props.isOpen} 
                            setActionMenu={props.setActionMenu}
                        />
                    )
                })}

            </div>
        </aside>
    )
}