import { ReactNode, createContext, useContext, useState } from "react";
import { userAnswers } from "./shape";

interface MyContextProps {
  children: ReactNode;
}
interface MyContextType {
    selectedValue: userAnswers[],
    setSelectedValue:React.Dispatch<React.SetStateAction<userAnswers[]>>
  }
  

 const CustomContext = createContext<MyContextType | undefined>(undefined);


export const CustomProvider: React.FC<MyContextProps> = ({ children }) => {
  
    const [selectedValue, setSelectedValue] = useState<userAnswers[]>([]);
    return <CustomContext.Provider value={{selectedValue,setSelectedValue}}>{children}</CustomContext.Provider>;

  };
  export const useMyContext = (): MyContextType => {
    const context = useContext(CustomContext);
    if (!context) {
      throw new Error('useMyContext must be used within a MyProvider');
    }
    return context;
  };
