export type tabtrigerstatus = "questionadd"| "quiz";
export interface button{
    children:string;
    className:string;
    setTabtriger:React.Dispatch<React.SetStateAction<tabtrigerstatus>>;
    value:string;
    set:tabtrigerstatus;
 }
 export interface quizdbshape{
    questionId:number|string;
    question:string;
    options?:string[];
    answer:string;
    userAnswer?:string;
 } 
//  type options  ={
//    optionA:string;
//    optionB:string;
//    optionC:string;
//    optionD:string;
//  }

 export interface userAnswers extends quizdbshape{userAnswer?:string};

 export type datashape = 'question ' | 'option' | 'answer';

 export type quizdb = {
   question:String;
   answer:String
   questionnumber:number;
 }