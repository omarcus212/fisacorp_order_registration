import { useEffect, useState } from "react";
import Header from "../../components/layout/Header";
import Section from "../../components/layout/Session";
import Table from "../../components/layout/Table";
import { getProducts } from "../../service/products";
import ImageView from "../../components/shared/ImageView";
import CustomButton from "../../components/shared/Button";
import InputSearch from "../../components/shared/InputSearch";
import Text from "../../components/shared/Text";
import Stepper from "../../components/shared/Stepper";
import type { Product } from "../../interface/product";
import type { OrderItem } from "../../interface/orderItem";
import formatCurrency from "../../utils/Price";
import ModalPreviewList from "../../components/layout/ModalPreviewList";
import { canceled } from "../../service/canceled";
import { useNavigate } from "react-router-dom";

const orderProduct: React.FC = () => {

    const navigate = useNavigate();

    const [productData, setProductData] = useState<Product[]>();

    const [productList, setProductList] = useState<OrderItem[]>([]);

    const [modalPreviewList, setModalPreviewList] = useState<boolean>(false);

    const [search, setSearch] = useState<string>();

    const [total, setTotal] = useState<string>();


    const handleAdd = (row: Product) => {

        const found = productList?.find(item => item.product_id === row.id);

        if (!found) {

            setProductList([
                ...productList,
                {
                    product_id: row.id,
                    name: row.name,
                    quantity: 1,
                    unit_price: row.price,
                    img: row.img
                },
            ]);
        }

        totalPrice();

    }

    const getDataProducts = async (searchValue?: string) => {
        const resData = await getProducts(searchValue);
        return resData.res;
    }

    const verifyListQuanty = async (product: any) => {

        const updatedStockData = await getDataProducts();

        const stockItem = updatedStockData.find((item: any) => item.id === product.product_id);
        const cartItem = productList.find((item: any) => item.product_id === product.product_id);

        if (!stockItem || !cartItem) return;

        const stockQuantity = stockItem.stock_quantity ?? 0;
        const cartQuantity = cartItem.quantity ?? 0;

        if (stockQuantity > cartQuantity) {
            return true
        }

        return false
    }

    const handleUpdatePlus = async (product: any) => {

        const stockItem = await verifyListQuanty(product)

        if (stockItem) {

            const updatedList = productList.map(item => {
                if (item.product_id === product.product_id) {
                    return {
                        ...item,
                        quantity: item.quantity !== null ? item.quantity + 1 : 0
                    };
                }
                return item;
            });

            setProductList(updatedList);
        }
    };

    const handleUpdateLess = async (product: any) => {

        const stockItem = productData?.find((item: any) => item.id === product.product_id);
        const cartItem = productList.find((item: any) => item.product_id === product.product_id);

        if (!stockItem || !cartItem) return;

        const updatedList = productList.map(item => {
            if (item.product_id === product.product_id) {
                return {
                    ...item,
                    quantity: item.quantity !== null ? item.quantity - 1 : 0
                };
            }
            return item;
        });

        setProductList(updatedList);

    };

    const handleRemove = (row: Product) => {

        const updatedList = productList.filter(item => item.product_id !== row.id)
        setProductList(updatedList)

    }

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const totalPrice = () => {

        let total = 0;

        for (let index = 0; index < productList.length; index++) {

            total += Number(productList[index].unit_price) * Number(productList[index].quantity);

        }

        const totalPrice = formatCurrency(total)
        setTotal(totalPrice)
    }

    const conclude = () => {
        setModalPreviewList(true)
    }

    const cancel = async () => {

        const token = localStorage.getItem("user")


        if (token) {

            const user = JSON.parse(token)

            const id = Number(user.id)
            const resData = await canceled(id);

            if (resData) {

                localStorage.removeItem("user")
                navigate('/register')
            }

        }

    }

    useEffect(() => {

        const PageRequests = async () => {

            const resData = await getProducts(search)

            setProductData(resData.res)

        }

        PageRequests()
        totalPrice()

    }, [productList, modalPreviewList, search]);


    const columnsInProduction: Array<Object> = [
        {
            name: 'Img:',
            center: "true",
            selector: (row: any) => (
                <ImageView imgSrc={row.img} imgAlt={row.name} style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px' }} />
            )
        },
        {
            name: 'Nome:',
            center: "true",
            width: '35%',
            heigth: '100%',
            selector: (row: any) => row.name,

        },
        {
            name: 'Preço:',
            center: "true",
            selector: (row: any) => (<p> R$ {row.price} </p>)


        },
        {
            name: 'Estoque:',
            center: "true",
            selector: (row: any) => (<p> {row.stock_quantity} Un.</p>)

        },
        {
            name: 'Action',
            width: '25%',
            center: "true",
            selector: (row: any) => {

                const isInCart = productList.find(item => item.product_id === row.id);

                return (
                    <div className="flex flex-col items-center justify-center gap-2 w-[216px] h-20">

                        {isInCart ? (
                            <Stepper key={isInCart.product_id} handleMax={() => handleUpdatePlus(isInCart)} handleMin={() => handleUpdateLess(isInCart)} value={productList.find(item => item.product_id === row.id)?.quantity || 0} className="w-54 h-8 flex items-center justify-center space-x-14 text-white font-light font-inter border border-blue-500 rounded-[4px]" />
                        ) : (

                            <CustomButton text="Editar" disabled={row.stock_quantity == 0 ? true : false} className="w-full h-8 bg-[#1E6388] text-white font-light font-inter border-none rounded-[4px]" onClick={() => handleAdd(row)} />
                        )
                        }
                        <CustomButton text="Remover" disabled={row.stock_quantity == 0 ? true : false} className="w-full h-8 bg-[#962E2E] text-white font-light font-inter border-none rounded-[4px]" onClick={() => handleRemove(row)} />
                    </div>
                );
            }

        },
    ];

    return (

        <Section className="flex flex-col p-6 gap-8">

            <Header srcImg="/icon/logo.svg" textLink="Inicio" linkAtive={false} className="p-4" toLink="/" />

            <InputSearch label="" placeholder="Busque aqui ...." icon="/icon/search.svg" onChange={handleSearch} />

            <div className="p-6">

                <Table column={columnsInProduction} data={productData} />

            </div>

            <Text text={"Total: R$ " + total} className="text-xl font-medium items-center pr-6 justify-end font-inter text-black" />

            <div className="flex w-full justify-between p-6">

                <CustomButton text="Cancelar" className="w-54 h-8 bg-[#A11D1D] hover:bg-[#ccc] text-white font-light font-inter border-none rounded-[4px]" onClick={() => { cancel() }} />
                <CustomButton text="Finalizar" className="w-54 h-8 bg-[#1E6388] hover:bg-[#ccc] text-white font-light font-inter border-none rounded-[4px]" onClick={() => conclude()} />

            </div>

            {modalPreviewList ? (

                <ModalPreviewList open={modalPreviewList} onClose={() => setModalPreviewList(false)} data={productList} TotalPrice={total} />

            ) : (<></>)

            }

        </Section>
    );
};

export default orderProduct;
