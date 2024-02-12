import { ReactNode, createContext, useContext, useState } from "react";
import { quizdbshape } from "./shape";

interface MyContextProps {
  children: ReactNode;
}
interface MyContextType {
    hidefinishquizQuestion:boolean;
    setHidefinishquizQuestion:React.Dispatch<React.SetStateAction<boolean>>
    isModalOpen:boolean;
    openModal:()=>void;
    closeModal:()=>void;
  }
  

 const CustomModalContext = createContext<MyContextType | undefined>(undefined);


export const Modalcontext: React.FC<MyContextProps> = ({ children }) => {
  
    const [hidefinishquizQuestion,setHidefinishquizQuestion]=useState(true);
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    return <CustomModalContext.Provider value={{ hidefinishquizQuestion,setHidefinishquizQuestion ,openModal,closeModal,isModalOpen}}>{children}</CustomModalContext.Provider>;

  };
  export const useMyModalContext = (): MyContextType => {
    const context = useContext(CustomModalContext);
    if (!context) {
      throw new Error('useMyContext must be used within a MyProvider');
    }
    return context;
  };
