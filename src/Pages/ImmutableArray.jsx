import React, {useState} from "react";


export default function ImmutableArray(){
    const myArray = ['Khen', 'Hafiz', 'Adit']
    const [array, setArray] = useState(myArray)

    function changeArray(){
        const newArray = [...array]
        newArray[0] = 'Bill'
        newArray.push('Gates')
        setArray(newArray)
    }
    return(
        <>
         <div className="bg-white shadow-md rounded-md mx-4 my-6 px-4 py-2">
            <h1 className="text-gray-500 text-center font-semibold">IMMUTABLE REACTJS MATA KULIAH FRONTEND</h1>
            <div className="mt-8">
            <h2 className="text-center text-gray-500">Bagian Immutable Array</h2>
            {
                array.map(array => (
                    <h3 key={array} className="text-center text-gray-500 mt-4">{array}</h3>
                ))
            }
            <button onClick={changeArray} className="flex mx-auto mt-6 mb-4 px-4 py-1 bg-indigo-500 text-white rounded-md shadow-md shadow-indigo-500 hover:bg-indigo-600 hover:shadow-indigo-600 transition duration-300">Change Array</button>
            </div>
        </div>
        </>
    )
}