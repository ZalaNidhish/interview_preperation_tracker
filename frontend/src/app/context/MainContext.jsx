import { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import {Navigate} from 'react-router'

export const MainContext = createContext();

export const MainProvider = ({children})=>{

    const {user} = useContext(AuthContext)

    if(!user || user.length==0){
        return <Navigate to={'/auth'} /> 
    }

    const [question, setQuestion] = useState(null)
    const [questions, setQuestions] = useState(JSON.parse(localStorage.getItem("tracker_questions")) || [])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isQuestionCardOpen, setIsQuestionCardOpen] = useState(false)
    const [filter, setFilter] = useState('')
    const [otherFilters, setOtherFilters] = useState(['all', 'all', 'all'])

    const totalQuestions = questions.filter(q=>q.email===user.email)
    const completedQuestions = totalQuestions.filter(q=>{
            return q.status == "Completed"            
        }
    )
    const dsa = totalQuestions.filter(q=>{
            return q.category == "DSA"            
        }
    )
    const tech = totalQuestions.filter(q=>{            
            return q.category == "Tech"               
        }
    )
    const github = totalQuestions.filter(q=>{
            return q.category == "Git"                        
        }
    )

    const progress = completedQuestions.length/totalQuestions.length*100 || 0
    
    let targetQuestions = filter.length>0 ? totalQuestions.filter(q=>q.title.toLowerCase().includes(filter.toLowerCase())) : totalQuestions


    targetQuestions = targetQuestions.filter(q => {
        const [category, difficulty, status] = otherFilters;

        const matchesCategory = category === "all" || q.category === category;
        const matchesDifficulty = difficulty === "all" || q.difficulty === difficulty;
        const matchesStatus = status === "all" || q.status === status;

        return matchesCategory && matchesDifficulty && matchesStatus;
    });

    
    return <MainContext.Provider value={{user, setQuestions, questions, progress, totalQuestions, completedQuestions, github, tech, dsa ,targetQuestions, isModalOpen, setIsModalOpen, filter, setFilter, otherFilters, setOtherFilters, isQuestionCardOpen, setIsQuestionCardOpen, question, setQuestion}}>
        {children}
    </MainContext.Provider>

}