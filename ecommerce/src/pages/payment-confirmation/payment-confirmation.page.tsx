import { FunctionComponent, useContext, useEffect } from "react"
import { Navigate, useNavigate, useSearchParams } from "react-router-dom"
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineHome } from 'react-icons/ai'


// styles
import { PaymentConfirmationContainer, PaymentConfirmationContent } from "./payment-confirmation.styles"

// components
import CustomButton from "../../components/custom-button/custom-button.component"
import Header from "../../components/header/header.component"

// ultilities
import Colors from "../../themes/themes.colors"
import { CartContext } from "../../contexts/cart.context"

const PaymentConfirmationPage: FunctionComponent = () => {

    const { clearProducts } = useContext(CartContext)
    const [searchParams] = useSearchParams()
    const status = searchParams.get('sucess')
    const isCanceled = searchParams.get('canceled') === 'true'

    const navigate = useNavigate()

    const handleGoToHomePageClick = () => {
        navigate('/')
    }

    useEffect(() => {
        if (status === 'true') {
            clearProducts()
        }
    }, [status])

    return (
        <>
            <Header />

            <PaymentConfirmationContainer>
                <PaymentConfirmationContent>

                    {status === 'true' && (
                        <>
                            <AiOutlineCloseCircle size={120} color={Colors.sucess} />
                            <p>Sua compra foi finalizada com sucesso!</p>
                        </>
                    )}

                    {(status === 'false' || isCanceled) && (
                        <>
                            <AiOutlineCheckCircle size={120} color={Colors.error} />
                            <p>Ocoreu um erro ao finalizar sua compra. Por favor tente novamente!</p>
                        </>
                    )}


                    <CustomButton startIcon={<AiOutlineHome />} onClick={handleGoToHomePageClick}>Ir para a página inicial</CustomButton>
                </PaymentConfirmationContent>
            </PaymentConfirmationContainer>
        </>


    )
}

export default PaymentConfirmationPage