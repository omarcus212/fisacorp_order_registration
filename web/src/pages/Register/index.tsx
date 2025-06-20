import { useEffect, useState } from "react";
import ModalHome from "../../components/layout/ModalHome";
import Section from "../../components/layout/Session";
import CustomButton from "../../components/shared/Button";
import Input from "../../components/shared/Input";
import { registerCustomer, registerOrder } from "../../service/register";
import { useLocation, useNavigate } from "react-router-dom";
import Text from "../../components/shared/Text";
import CustomLink from "../../components/shared/Link";

interface FormState {
    customer: string,
    date: string
}

const PageRegister: React.FC = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState<FormState>({
        customer: '',
        date: '',
    });

    const [dataResMsg, setDataMsg] = useState({ status: '', res: '' })

    const handleCustomerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, customer: event.target.value });
    }

    const handleDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, date: event.target.value });
    }

    const validarInput = () => {

        if (!form.customer.trim()) {
            return false
        }

        if (form.customer.trim().length < 4) {
            return false
        }

        return true
    }

    const validarInputData = () => {

        if (!form.date.trim()) {
            return false
        }

        return true
    }

    const sendInput = async () => {

        if (validarInput() && validarInputData()) {

            const resDataCustomer = await registerCustomer(form.customer)

            if (resDataCustomer.status == 'success') {

                const user = resDataCustomer.res

                const resDataOrdem = await registerOrder(user.id, form.date)

                if (resDataOrdem.status == 'success') {

                    localStorage.setItem('user', JSON.stringify({
                        id: resDataCustomer.res.id,
                        name: resDataCustomer.res.name,
                    }));

                    navigate('/orderproduct')

                } else {

                    setDataMsg(resDataOrdem.response.data)
                }

            } else {

                setDataMsg(resDataCustomer.response.data)
            }

        } else {

            validarInput()
            validarInputData()
        }

    }

    const location = useLocation();

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (!user && location.pathname !== '/register') {
            navigate('/register', { replace: true });
        }
    }, [dataResMsg])

    return (
        <Section className="flex flex-col items-center justify-center bg-[#1E6388]">

            <CustomLink to="/registrationlist" text="ver registros" className="text-md font-semibold absolute top-5 right-10 text-white" />

            <ModalHome>

                <Text text="Cadastro de Pedidos" className="flex items-center justify-center text-xl font-medium font-inter text-black p-2" />
                <Text text={dataResMsg.res} className={`text-md font-light font-inter ${dataResMsg.status === 'erro' || dataResMsg.status === 'default' ? 'flex w-full items-center justify-center text-red-500' : 'hidden'}`} />

                <form className="w-full pl-22 pr-22 flex flex-col items-center justify-center mt-2">
                    <Input type="text" label="Cliente:" classNameLabel="text-xl font-light font-inter" classNameInput="w-full h-8 p-3 border border-[#1E6388] rounded-[6px] text-base outline-none focus:ring-2 focus:ring-[#1E6388]" validate={() => validarInput()} onChange={handleCustomerChange} />
                    <Input type="date" label="Data de entrega: " min={new Date().toISOString().split("T")[0]} classNameLabel="text-base font-light font-inter" classNameInput="w-[80%] h-8 p-3 border border-[#1E6388] rounded-[6px] text-base outline-none focus:ring-2 focus:ring-[#1E6388]" validate={() => validarInputData()} onChange={handleDataChange} />
                </form>
                <CustomButton text="Iniciar Pedido" className="w-[50%] bg-[#1E6388] text-white font-light font-inter p-1 mb-8 border border-[#1E6388] rounded-[4px]" onClick={() => { sendInput() }} />
            </ModalHome>
        </Section>
    );
}
export default PageRegister;