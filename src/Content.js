import { useState, useEffect } from "react";

const lessons = [
    {
        id: 1,
        name: 'SPA/MPA'
    },
    {
        id: 2,
        name: 'gioi thieu'
    },
    {
        id: 3,
        name: 'arrow function'
    }
]

function Content() {
    const [lessonId, setLessionId] = useState(1)

    useEffect(() => {

        const handleComment = ({detail}) => {
            console.log(detail)
        }

        window.addEventListener(`lession-${lessonId}`,handleComment)

        return () => {
            window.removeEventListener(`lession-${lessonId}`,handleComment)
        }
    },[lessonId])

    return (
        <div>
            <ul>
                {lessons.map(lesson => {
                    return (
                        <li
                            key={lesson.id}
                            style={{
                                color: lessonId === lesson.id ? 'red' : '#333'
                            }}
                            onClick={() => setLessionId(lesson.id)}
                        >
                            {lesson.name}
                        </li>
                    )
                })}

            </ul>

        </div>

    )
}

export default Content;