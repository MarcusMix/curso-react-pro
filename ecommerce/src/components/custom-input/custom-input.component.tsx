import { FunctionComponent, InputHTMLAttributes } from 'react'
import { CustomInputContainer } from './custom-input.style'


interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
    hasError?: boolean
}


const CustomInput:FunctionComponent<CustomInputProps> = ({hasError, ...rest}) => {
    return <CustomInputContainer hasError={hasError} {...rest}/>
}

export default CustomInput