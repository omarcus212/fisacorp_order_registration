import React from "react";

interface ITextTittle {
    className?: string,
    text?: string
}


const Text: React.FC<ITextTittle> = ({ className, text }) => {

    return (

        <p className={`flex flex-wrap w-full ${className}`}>{text}</p>
    )
}

export default Text;