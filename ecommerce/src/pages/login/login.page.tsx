import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import validator from 'validator'
import { AuthError, AuthErrorCodes, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useContext } from 'react'

//Components
import CustomButton from "../../components/custom-button/custom-button.component"
import CustomInput from '../../components/custom-input/custom-input.component'
import Header from "../../components/header/header.component"
import InputErrorMessage from '../../components/input-error-message/input-error-message.component'
import { useNavigate } from 'react-router-dom'

//Styles
import { LoginContainer, LoginHeadline, LoginInputContainer, LoginSubtitle, LoginContent } from "./login.styles"

// Ultilities
import { auth, db, googleProvider } from '../../config/firebase.config'
import { UserContext } from '../../contexts/user.context'

interface LoginForm {
    email: string;
    password: string;
}

const LoginPage = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,
        setError
    } = useForm<LoginForm>()

    const { isAuthenticated } = useContext(UserContext)

    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/')
        }
    }, [isAuthenticated])

    const handleSubmitPress = async (data: LoginForm) => {
        try {
            const userCrendentials = await signInWithEmailAndPassword(auth, data.email, data.password)
            console.log({ userCrendentials })
        } catch (error) {
            const _error = error as AuthError

            if (_error.code === AuthErrorCodes.INVALID_PASSWORD) {
                return setError('password', { type: 'mismatch' })
            }

            if (_error.code === AuthErrorCodes.USER_DELETED) {
                return setError('email', { type: 'notFound' })
            }
        }
    }

    const handleSignInWithGoogleProvider = async () => {
        try {
            const userCrendentials = await signInWithPopup(auth, googleProvider)

            const querySnapshot = await getDocs(query(collection(db, 'users'), where('id', '==', userCrendentials.user.uid)))

            const user = querySnapshot.docs[0]?.data()

            if (!user) {
                const firstName = userCrendentials.user.displayName?.split(' ')[0]
                const lastName = userCrendentials.user.displayName?.split(' ')[1]

                await addDoc(collection(db, 'users'), {
                    id: userCrendentials.user.uid,
                    email: userCrendentials.user.email,
                    firstName,
                    lastName,
                    provide: 'google'
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Header />
            <LoginContainer>
                <LoginContent>

                    <LoginHeadline>Entre com a sua conta</LoginHeadline>

                    <CustomButton startIcon={<BsGoogle size={18} />}
                        onClick={handleSignInWithGoogleProvider}
                    >Entrar com o Google
                    </CustomButton>

                    <LoginSubtitle>ou entre com seu e-mail</LoginSubtitle>

                    <LoginInputContainer>
                        <p>E-mail</p>
                        <CustomInput
                            hasError={!!errors?.email}
                            placeholder='Digite seu e-mail'
                            {...register('email', {
                                required: true, validate: (value) => {
                                    return validator.isEmail(value)
                                }
                            })}
                        />

                        {errors?.email?.type === 'required' && (
                            <InputErrorMessage>O email é obrigatório.</InputErrorMessage>
                        )}

                        {errors?.email?.type === 'validate' && (
                            <InputErrorMessage>Insira um email valido!</InputErrorMessage>
                        )}

                        {errors?.email?.type === 'notFound' && (
                            <InputErrorMessage>Email não cadastrado!</InputErrorMessage>
                        )}
                    </LoginInputContainer>

                    <LoginInputContainer>
                        <p>Senha</p>
                        <CustomInput
                            hasError={!!errors?.password}
                            placeholder='Digite sua senha'
                            type="password"
                            {...register('password', { required: true })}
                        />



                        {errors?.password?.type === 'required' && (
                            <InputErrorMessage>A senha é obrigatória.</InputErrorMessage>
                        )}

                        {errors?.password?.type === 'mismatch' && (
                            <InputErrorMessage>Senha inválida.</InputErrorMessage>
                        )}
                    </LoginInputContainer>

                    <CustomButton
                        startIcon={<FiLogIn size={18} />}
                        onClick={() => handleSubmit(handleSubmitPress)()}>
                        Entrar
                    </CustomButton>

                </LoginContent>
            </LoginContainer>
        </>
    )
}

export default LoginPage