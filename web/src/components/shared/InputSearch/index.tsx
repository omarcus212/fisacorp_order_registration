import Input from "../Input";
import ImageView from "../ImageView";

interface IInputProps {
    label: string,
    placeholder?: string,
    value?: string,
    name?: string,
    validate?: (name?: string) => boolean,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
    classNameInput?: string,
    classNameLabel?: string,
    classNameDiv?: string,
    icon: string
}

const InputSearch: React.FC<IInputProps> = ({
    label,
    placeholder,
    name,
    value,
    validate,
    onChange,
    icon,
    classNameInput,
    classNameDiv
}) => {

    return (
        <span className={classNameDiv || "flex items-center justify-center w-full h-[54px]"}>

            <div className="relative w-[60%]">

                <Input
                    label={label}
                    type="search"
                    name={name}
                    value={value}
                    onChange={onChange}
                    validate={validate}
                    placeholder={placeholder}
                    classNameInput={classNameInput || "w-full h-[52px] pr-10 pl-4 text-black bg-[#DED8D8] border rounded-lg focus:outline-none"}
                />

                <span className="absolute right-8 top-10 -translate-y-1/2 text-gray-500 pointer-events-none">
                    <ImageView imgSrc={icon} />
                </span>

            </div>

        </span>
    );
}

export default InputSearch;
