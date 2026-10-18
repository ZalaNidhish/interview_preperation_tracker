import { useContext } from 'react'
import {useForm} from 'react-hook-form'
import { AuthContext } from '../../../app/context/AuthContext'
import { MainContext } from '../../../app/context/MainContext'

export const useQuestion = ()=>{

    const {register, handleSubmit, formState:{errors}, reset} = useForm()
    const {user} = useContext(AuthContext)
    let {setQuestions, questions, setIsModalOpen, question, setQuestion} = useContext(MainContext)

    const addQuestion = (data)=>{
        const question = {...data, id:Date.now(), email: user.email}
        
        localStorage.setItem('tracker_questions', JSON.stringify([...questions, question]))
        setQuestions(prev=>[...prev, question])
        setIsModalOpen(false)
        reset()
    }

    const editQuestion = (data)=>{

        let updatedQuestion = {...data, id: question.id, email: question.email}

        const updatedQuestionsList = questions.map(q => q.id === question.id ? updatedQuestion : q)
        localStorage.setItem('tracker_questions', JSON.stringify(updatedQuestionsList))
        setQuestions(updatedQuestionsList)
        setIsModalOpen(false)
        setQuestion(null)
        reset()
    }

    const deleteQuestion = (id)=>{
        if(confirm("Are you sure you want to Delete Question")){
            console.log(id);
            let updatedQuestions = questions.filter(q=>q.id!=id)
            localStorage.setItem('tracker_questions', JSON.stringify(updatedQuestions))
            setQuestions(updatedQuestions)
        }
    }

    return {addQuestion, register, handleSubmit, errors, deleteQuestion, editQuestion}
}