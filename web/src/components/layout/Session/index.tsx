import React from "react";

interface IContentProps {
    children: React.ReactNode,
    className?: string,
}


const Section: React.FC<IContentProps> = (props) => {

    return (
        <main>
            <section className={`flex w-full h-full ${props.className}`}>
                {props.children}
            </section >
        </main>
    )
}

export default Section;