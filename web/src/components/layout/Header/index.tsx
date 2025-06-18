import { Link } from "react-router-dom";
import ImageView from "../../shared/ImageView";

interface Header {
    className?: string,
    classNameLink?: string,
    classNameImg?: string,
    linkAtive?: boolean,
    textLink?: string,
    toLink: string,
    srcImg: string
}

const Header: React.FC<Header> = ({ srcImg, className, classNameImg, classNameLink, textLink, linkAtive, toLink }) => {

    return (
        <header className={className || "flex flex-col w-full h-20 p-6 gap-6"}>

            <ImageView imgSrc={srcImg} classNameImg={classNameImg || "w-auto h-auto"} style={{ width: '142px', height: 'auto' }} />

            <span className="flex flex-col items-end w-full h-[5px]">

                {linkAtive &&

                    <Link to={toLink} className={classNameLink || "w-full text-xl font-semibold font-inter text-[#12638F]"}>{textLink}</Link>
                }

                <hr className="w-full border-t-2 border-[#1E6388] mb-6 mt-6" />

            </span>

        </header>
    );

}

export default Header;