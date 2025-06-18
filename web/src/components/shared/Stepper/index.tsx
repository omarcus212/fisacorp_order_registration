import React from 'react';

type StepperProps = {
    className?: string,
    min?: number,
    max?: number,
    value?: number,
    handleMin: any,
    handleMax: any
};

const Stepper: React.FC<StepperProps> = ({
    className,
    min = 1,
    max = 10,
    value = 1,
    handleMin,
    handleMax
}) => {

    return (
        <div className={className || "flex items-center space-x-2"}>
            <button
                onClick={handleMin}
                disabled={value <= min}
                className="px-3 mb-1 text-xl font-medium text-black rounded disabled:opacity-50"
            >
                -
            </button>
            <span className="w-10 text-center text-black text-lg font-medium">{value}</span>
            <button
                onClick={handleMax}
                disabled={value >= max}
                className="px-3 mb-1 text-xl font-medium text-black rounded disabled:opacity-50"
            >
                +
            </button>
        </div >
    );
};

export default Stepper;
