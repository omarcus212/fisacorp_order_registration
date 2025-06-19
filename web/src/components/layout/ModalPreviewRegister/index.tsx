import React, { useEffect, useState } from "react";
import type { Order, OrderItem } from "../../../interface/orderItem";
import ImageView from "../../shared/ImageView";
import Table from "../Table";
import { getOrderId } from "../../../service/order";
import CustomButton from "../../shared/Button";
import { getTotalList, registerOrderItemListId } from "../../../service/orderItem";
import Text from "../../shared/Text";

interface OrderModalProps {
    className?: string,
    open: boolean,
    data?: OrderItem[] | any,
    id: number | string | any
    onClose: () => void,
}

const ModalPreviewRegister: React.FC<OrderModalProps> = ({ className, open, id, onClose }) => {

    if (!open) return null;

    const [idCostumer, setidCostumer] = useState<number | string>()

    const [order, setOrder] = useState<Order>()

    const [totalPrice, setTotalPrice] = useState<Order>()

    const [dataList, setDataList] = useState<any>()


    const getTotal = async () => {

        const resData = await getTotalList(Number(idCostumer))

        if (!resData) return

        const totalPrice = resData.res[0].total_order_price
        setTotalPrice(totalPrice)

    }

    const getOrdeItens = async () => {

        const resData = await registerOrderItemListId(Number(idCostumer))

        if (!resData) return

        setDataList(resData.res)

    }

    const getOrderIdPreview = async () => {

        const resData = await getOrderId(Number(idCostumer))

        if (!resData) return

        setOrder(resData.res)
    }


    useEffect(() => {

        setidCostumer(id)

        if (idCostumer) {

            getTotal()
            getOrderIdPreview()
            getOrdeItens()
        }

    }, [idCostumer])

    const columnsInProduction: Array<Object> = [
        {
            name: 'Img',
            center: "true",
            selector: (row: any) => (
                <ImageView imgSrc={row.img} imgAlt={row.name} style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px' }} />
            )
        },
        {
            name: 'Nome',
            center: "true",
            width: '35%',
            heigth: '100%',
            selector: (row: any) => row.product_name,

        },
        {
            name: 'Preço',
            center: "true",
            selector: (row: any) => (<p> R$ {row.unit_price} </p>)


        },
        {
            name: 'Quantidade',
            center: "true",
            selector: (row: any) => (<p>{row.quantity} Un. </p>)

        }

    ];

    return (
        <div className={className || "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"}>
            <div className="bg-white w-[80%] rounded-lg shadow-lg p-6 relative">

                <span className="flex w-full">
                    <Text text="Lista do Pedidos" className="text-md font-medium" />
                    <CustomButton text={'X'} onClick={onClose} className="flex w-full items-end justify-end cursor-pointer mb-4 text-gray-500 hover:text-gray-700" />
                </span>

                <div className="bg-white w-full max-h-[80vh] rounded-lg shadow-lg p-3 relative overflow-auto">

                    <div className="flex justify-between items-center">
                        <Text text={`ID do pedido: ${order?.id}`} className="font-semibold font-inter text-base" />
                        <Text text={`Data de entrega: ${order?.delivery_date}`} className="font-semibold items-end justify-end font-inter text-lg" />
                    </div>

                    <div className="flex justify-between text-sm mt-2">
                        <Text text={`Cliente: ${order?.name}`} className="font-semibold font-inter text-base" />
                        <Text text={`Total: R$ : ${totalPrice}`} className="font-semibold items-end justify-end font-inter text-lg" />

                    </div>
                    <div className="p-6">

                        <Table column={columnsInProduction} data={dataList} />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalPreviewRegister;