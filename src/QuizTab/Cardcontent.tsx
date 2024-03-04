import React, { useEffect, useState } from 'react'
import Quiztabskelton from './Quiztabskelton';
type charapara = {
    quizname: string;
    image: string;
    duration: number;
    noOfQuestions: number;
    id: number;
    category: string;
};
const Cardcontent = ({ selectedValue }: { selectedValue: string }) => {
    const [loading, setLoading] = useState(true);
    const [questiontab, setQuestiontab] = useState<charapara[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        try {
            let response = await fetch("https://api.npoint.io/67f33e35ca22600979ac/quiztab")
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const result = await response.json();
            setQuestiontab(result);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    function filterdata(selectedValue: string, questiontab: charapara[]): charapara[] {
        if (selectedValue === 'All') {
            return questiontab;
        }
        return questiontab.filter((data) => { return data.category === selectedValue })
    }

    useEffect(() => {
        fetchData();
    }, []);


    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error1: {error}</div>;
    }

    return (
        <>
            {
                filterdata(selectedValue, questiontab).map((value) => {
                    return <Quiztabskelton key={value.id} value={value} />;
                })
            }
        </>
    )
}

export default Cardcontent
