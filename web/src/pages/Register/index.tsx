import { useState } from "react";
import ModalHome from "../../components/layout/ModalHome";
import Section from "../../components/layout/Session";
import CustomButton from "../../components/shared/Button";
import Input from "../../components/shared/Input";
import { registerCustomer, registerOrder } from "../../service/register";
import { useNavigate } from "react-router-dom";
import Text from "../../components/shared/Text";

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

        const user = JSON.parse(localStorage.getItem('user') || '{}');

        if (validarInput() && validarInputData()) {

            const res = await registerCustomer(form.customer)

            if (res == 'success') {

                const res = await registerOrder(user.id, form.date)

                if (res == 'success') {
                    navigate('/orderproduct')
                }
            }

        } else {
            validarInput()
            validarInputData()
        }

    }

    return (
        <Section className="flex items-center justify-center bg-[#1E6388]">
            <ModalHome>
                <Text text="Cadastro de Pedidos" className="flex items-center justify-center text-xl font-medium font-inter text-black" />
                <form className="w-full pl-22 pr-22 flex flex-col items-center justify-center mt-2">
                    <Input type="text" label="Cliente:" classNameLabel="text-xl font-light font-inter" classNameInput="w-full h-8 p-3 border border-[#1E6388] rounded-[6px] text-base outline-none focus:ring-2 focus:ring-[#1E6388]" validate={() => validarInput()} onChange={handleCustomerChange} />
                    <Input type="date" label="Data de entrega: " classNameLabel="text-base font-light font-inter" classNameInput="w-[80%] h-8 p-3 border border-[#1E6388] rounded-[6px] text-base outline-none focus:ring-2 focus:ring-[#1E6388]" validate={() => validarInputData()} onChange={handleDataChange} />
                </form>
                <CustomButton text="Iniciar Pedido" className="w-[50%] bg-[#1E6388] text-white font-light font-inter p-1 mb-8 border border-[#1E6388] rounded-[4px]" onClick={() => { sendInput() }} />
            </ModalHome>
        </Section>
    );
}
export default PageRegister;