import { useEffect, useState } from "react";
import Header from "../../components/layout/Header";
import Section from "../../components/layout/Session";
import InputSearch from "../../components/shared/InputSearch";
import Table from "../../components/layout/Table";
import type { Product } from "../../interface/product";
import type { Order, OrderRequest } from "../../interface/orderItem";
import CustomLink from "../../components/shared/Link";
import { getRegisterOrdersList } from "../../service/order";
import { getProducts } from "../../service/products";
import { columnsInProduction } from "./column";
import CustomButton from "../../components/shared/Button";
import ModalPreviewRegister from "../../components/layout/ModalPreviewRegister";
import { canceled } from "../../service/canceled";

const RegistrationList: React.FC = () => {

    const [dataList, setDataList] = useState<Order | Product | OrderRequest | any>();

    const [search, setSearch] = useState<string>('');

    const [modalPreviewList, setModalPreviewList] = useState<boolean>(false);

    const [idCostumer, setIdCostumer] = useState<number | null>();

    const [list, setList] = useState<'products' | 'registers'>('registers');

    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const getListProduct = async () => {

        setList('products');
        setSearch('');
        setDataList([]);

        const resData = await getProducts('')

        if (resData) {
            setList('products')
            setDataList(resData.res)
        }

    }

    const getListRegister = async () => {

        setList('registers');
        setSearch('');
        setDataList([]);

        const resData = await getRegisterOrdersList('');

        if (resData) {
            setList('registers')
            setDataList(resData.res)
        }

    }

    const conclude = (row: Order) => {

        setIdCostumer(row.customer_id)
        setModalPreviewList(true)

    }

    const exclude = async (row: Order) => {

        const exclude = await canceled(Number(row.customer_id))

        if (!exclude) return

        window.location.reload()
    }

    useEffect(() => {

        if (list === 'products') {

            setIsLoading(true);

            getProducts(search).then((resData) => {

                if (!resData) return

                setDataList(resData.res);

                setIsLoading(false);

            });
        }

        if (list === 'registers') {

            setIsLoading(true);

            getRegisterOrdersList(search).then((resData) => {

                if (!resData) return

                setDataList(resData.res);

                setIsLoading(false);

            });
        }

    }, [search, idCostumer, list])


    const columnsInRegister: Array<Object> = [

        {
            name: 'ID:',
            center: "true",
            selector: (row: any) => row.customer_id


        },
        {
            name: 'Cliente:',
            center: "true",
            selector: (row: any) => row.customer_name,

        },
        {
            name: 'Data de pedido:',
            center: "true",
            selector: (row: any) => row.order_date

        },
        {
            name: 'Data de entrega:',
            center: "true",
            selector: (row: any) => row.delivery_date

        },
        {
            name: 'Action',
            width: '25%',
            center: "true",
            selector: (row: any) => {

                return (
                    <div className="flex flex-col items-center justify-center gap-2 w-[216px] h-20" >

                        <CustomButton text="Ver lista" className="w-full h-8 bg-[#1E6388] text-white font-light font-inter border-none rounded-[4px]" onClick={() => conclude(row)} />

                        <CustomButton text="Cancelar" className="w-full h-8 bg-[#962E2E] text-white font-light font-inter border-none rounded-[4px]" onClick={() => exclude(row)} />

                    </div>
                );
            }

        },

    ];


    return (
        <Section className="flex flex-col p-6 gap-8">

            <Header srcImg="/icon/logo.svg" textLink="Inicio" linkAtive={false} className="p-4" toLink="/" />

            <CustomLink to="/" text="Inicial" className="w-full text-blue-600 font-bold hover:text-blue-500 pr-12 flex items-end justify-end" />

            <InputSearch label="" value={search} placeholder="Busque aqui ...." icon="/icon/search.svg" onChange={handleSearch} />

            <div className="flex flex-col p-6">

                <span className="flex w-full items-end justify-end space-x-2">
                    <CustomLink text="Estoque" to="" className="text-blue-600 underline hover:text-blue-500" onClick={() => getListProduct()} />
                    <CustomLink text="Registros" to="" className="text-blue-600 underline hover:text-blue-500" onClick={() => getListRegister()} />
                </span>

                <Table column={list == 'registers' ? columnsInRegister : columnsInProduction} data={dataList} progressPending={isLoading} />

            </div>

            {modalPreviewList ? (

                <ModalPreviewRegister open={modalPreviewList} onClose={() => setModalPreviewList(false)} id={idCostumer} />

            ) : (<></>)

            }

        </Section>
    );

};

export default RegistrationList;
