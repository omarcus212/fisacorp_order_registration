import { useEffect, useState } from "react";
import Header from "../../components/layout/Header";
import Section from "../../components/layout/Session";
import Table from "../../components/layout/Table";
import { getProducts } from "../../service/products";
import ImageView from "../../components/shared/ImageView";
import CustomButton from "../../components/shared/Button";
import InputSearch from "../../components/shared/InputSearch";

const orderProduct: React.FC = () => {

    const [productData, setproductData] = useState([]);

    const handleEdit = (row: any) => {
        console.log(row);
    }

    const handleDelete = (row: any) => {
        console.log(row);
    }

    const columnsInProduction: Array<Object> = [
        {
            name: 'Img',
            center: true,
            selector: (row: any) => (
                <ImageView imgSrc={row.img} imgAlt={row.name} style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px' }} />
            )
        },
        {
            name: 'Nome',
            center: true,
            width: '35%',
            heigth: '100%',
            selector: (row: any) => row.name,

        },
        {
            name: 'Preço',
            center: true,
            selector: (row: any) => row.price,


        },
        {
            name: 'Estoque',
            center: true,
            selector: (row: any) => row.stock_quantity

        },
        {
            name: 'Action',
            width: '25%',
            center: true,
            selector: (row: any) => (
                <div className="flex flex-col items-center justify-center gap-2 w-[216px] h-20">
                    <CustomButton text="Editar" className="w-full h-8 bg-[#1E6388] text-white font-light font-inter border-none rounded-[4px]" onClick={() => handleEdit(row)} />
                    <CustomButton text="Remover" className="w-full h-8 bg-[#962E2E] text-white font-light font-inter border-none rounded-[4px]" onClick={() => handleDelete(row)} />
                </div>
            )
        },
    ];

    useEffect(() => {

        const PageRequests = async () => {

            const res = await getProducts()
            setproductData(res.data)

        }

        PageRequests()

    }, []);

    return (

        <Section className="flex flex-col p-6 gap-8">

            <Header srcImg="/icon/logo.svg" textLink="Inicio" linkAtive={false} className="p-4" toLink="/" />

            <InputSearch label="" placeholder="Busque aqui ...." icon="/icon/search.svg" />

            <div className="p-6">

                <Table column={columnsInProduction} data={productData} />

            </div>

            <span className="flex w-full  items-center pr-6 justify-end" >

                <p className="text-xl font-medium font-inter text-black">Total: R$ 00,00</p>

            </span>

            <div className="flex w-full justify-between p-6">

                <CustomButton text="Cancelar" className="w-54 h-8 bg-[#A11D1D] hover:bg-[#ccc] text-white font-light font-inter border-none rounded-[4px]" onClick={() => { }} />
                <CustomButton text="Finalizar" className="w-54 h-8 bg-[#1E6388] hover:bg-[#ccc] text-white font-light font-inter border-none rounded-[4px]" onClick={() => { }} />

            </div>

        </Section>
    );
};

export default orderProduct;
