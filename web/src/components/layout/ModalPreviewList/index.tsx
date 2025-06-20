import React, { useEffect, useState } from "react";
import type { Order, OrderItem, OrderRequest } from "../../../interface/orderItem";
import ImageView from "../../shared/ImageView";
import Table from "../Table";
import { getOrder } from "../../../service/order";
import CustomButton from "../../shared/Button";
import { registerOrderItemList } from "../../../service/orderItem";
import { useNavigate } from "react-router-dom";
import Text from "../../shared/Text";

interface OrderModalProps {
    className?: string,
    open: boolean,
    data?: OrderItem[] | any,
    TotalPrice?: string
    onClose: () => void,
}

const ModalPreviewList: React.FC<OrderModalProps> = ({ className, open, data, TotalPrice, onClose }) => {

    if (!open) return null;

    const navigate = useNavigate();

    const [order, setOrder] = useState<Order>()

    const [orderItem, setOrderItem] = useState<OrderRequest | undefined>();

    const [dataResMsg, setDataResMsg] = useState({ status: '', res: '' })


    const validate = () => {

        if (!order) return false

        if (!data) return false

        return true
    }

    const createOrderItem = () => {

        if (validate()) {

            const orderListItem: OrderRequest = {
                order_id: Number(order?.id),
                data: data ?? []

            }
            setOrderItem(orderListItem)
            return orderListItem;
        }

    }

    const handleClick = () => {

        const orderList = createOrderItem();

        if (orderList) {

            sendOrderItem(orderList)
        }

    }

    const sendOrderItem = async (orderItem: OrderRequest) => {

        const res = await registerOrderItemList(orderItem);

        if (res.status == "success") {

            setDataResMsg(res)
            localStorage.removeItem('user')
            navigate('/')

        } else {

            setDataResMsg(res.response.data)
        }

    }

    useEffect(() => {

        const getOrderInfo = async () => {

            const res = await getOrder()

            if (res.res) {
                setOrder(res?.res)
            } else {
                setOrder({ name: 'undefined', customer_id: null, created_at: '', delivery_date: '', id: null })
            }


        }

        getOrderInfo()


    }, [orderItem, dataResMsg])

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
            selector: (row: any) => row.name,

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
                        <Text text={`Total: R$ : ${TotalPrice}`} className="font-semibold items-end justify-end font-inter text-lg" />

                    </div>

                    <Text text={dataResMsg.res} className={`text-md font-light font-inter ${dataResMsg.status === 'erro' || dataResMsg.status === 'default' ? 'flex w-full items-center justify-center text-red-500' : 'flex w-full items-center justify-center text-green-500'}`} />

                    <div className="p-6">

                        <Table column={columnsInProduction} data={data} />

                    </div>

                    <CustomButton text="Finalizar" className="w-full h-8 bg-[#1E6388] hover:bg-[#ccc] text-white font-light font-inter border-none rounded-[4px]" onClick={() => handleClick()} />
                </div>
            </div>
        </div>
    );
};

export default ModalPreviewList;