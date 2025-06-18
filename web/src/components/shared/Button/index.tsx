interface IButtonProps {
    onClick: any,
    text: string,
    disabled?: boolean
    className?: string,
}

const CustomButton: React.FC<IButtonProps> = ({ onClick, text, className, disabled }) => {

    const disabledClasses = disabled ? 'bg-gray-400 cursor-not-allowed' : 'cursor-pointer';

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${disabledClasses} ${className}`}>
            {text}
        </button>
    );
};

export default CustomButton;
