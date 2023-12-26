import React, { useEffect, useState } from "react";
import "./quiztab.css";
import Quiztabskelton from "./Quiztabskelton";
import { useParams } from "react-router-dom";
type charapara = {
  quizname: string;
  image: string;
  duration: number;
  noOfQuestions: number;
};
const QuizTab = () => {
  const [loading, setLoading] = useState(true);
  const [questiontab, setQuestiontab] = useState<charapara[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8900/quiztab"); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      setQuestiontab(result);
      console.log("inside api caller");
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const jaba = () => {
    console.log("data", id);
  };

  return (
    <>
      <div className="quiztabwraper">
        {questiontab.map((value) => {
          return <Quiztabskelton value={value} />;
        })}
      </div>
    </>
  );
};

export default QuizTab;
