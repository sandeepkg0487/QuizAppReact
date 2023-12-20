import { ReactNode, createContext, useContext, useState } from "react";
import { quizdbshape, userAnswers } from "./shape";

interface MyContextProps {
  children: ReactNode;
}
interface MyContextType {
    questiondb: quizdbshape[],
    setQuestiondb: React.Dispatch<React.SetStateAction<quizdbshape[]>>,
    setI:React.Dispatch<React.SetStateAction<number>>;
    i:number;
  }
  

 const CustomContext = createContext<MyContextType | undefined>(undefined);


export const CustomProvider: React.FC<MyContextProps> = ({ children }) => {
  
  const [questiondb, setQuestiondb] = useState<quizdbshape[]>([]);
    const [i, setI] = useState(0);
    return <CustomContext.Provider value={{ questiondb,setQuestiondb,i,setI}}>{children}</CustomContext.Provider>;

  };
  export const useMyContext = (): MyContextType => {
    const context = useContext(CustomContext);
    if (!context) {
      throw new Error('useMyContext must be used within a MyProvider');
    }
    return context;
  };
