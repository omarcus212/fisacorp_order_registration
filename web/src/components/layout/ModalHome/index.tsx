import React from "react";

interface IContentProps {
    children: React.ReactNode,
    className?: string,
}


const ModalHome: React.FC<IContentProps> = ({ children, className }) => {

    return (
        <div className={className || "w-[560px] h-[390px] bg-white border-6 border-[#4887A9] flex flex-col items-center justify-center p-2 gap-6 rounded-lg"}>
            {children}
        </div>
    )
}

export default ModalHome;