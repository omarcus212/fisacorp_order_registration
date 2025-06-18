import React, { useEffect, useState } from "react";
import type { Order, OrderItem } from "../../../interface/orderItem";
import ImageView from "../../shared/ImageView";
import Table from "../Table";
import { getOrder } from "../../../service/ordem";
import CustomButton from "../../shared/Button";

interface OrderModalProps {
    open: boolean,
    data?: OrderItem[],
    TotalPrice?: string
    onClose: () => void,
}

const ModalPreviewList: React.FC<OrderModalProps> = ({ open, data, TotalPrice, onClose }) => {

    if (!open) return null;

    const [order, setOrder] = useState<Order>()

    useEffect(() => {
        const getOrderInfo = async () => {
            const res = await getOrder()
            setOrder(res)
        }

        getOrderInfo()
    }, [])

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

        }

    ];

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white max-w-3xl w-full rounded-lg shadow-lg p-6 relative">
                <button
                    onClick={onClose}
                    className="w-12 items-end justify-end cursor-pointer mb-2 text-gray-500 hover:text-gray-700"
                >
                    &#10005;
                </button>

                <div className="flex justify-between items-start">
                    <h2 className="text-lg font-semibold">ID do pedido: {order?.id}</h2>
                    <span className="text-sm">Data de entrega: {order?.delivery_date}</span>
                </div>

                <div className="flex justify-between text-sm mt-2">
                    <span className="font-medium">Cliente: {order?.name}</span>
                    <span className="font-medium">Total: R$ {TotalPrice}</span>
                </div>

                <div className="p-6">

                    <Table column={columnsInProduction} data={data} />

                </div>

                <CustomButton text="Finalizar" className="w-full h-8 bg-[#1E6388] hover:bg-[#ccc] text-white font-light font-inter border-none rounded-[4px]" onClick={() => { }} />

            </div>
        </div>
    );
};

export default ModalPreviewList;