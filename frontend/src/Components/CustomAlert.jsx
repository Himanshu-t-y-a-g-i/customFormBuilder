import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import "../Styles/Universal.css";

export const CustomAlert = ({ desc }) => {
    const { isAlert, alertDesc, alertType } = useSelector(store => store.userReducer);
    if (!isAlert) {
        return;
    }
    return (
        <Alert className='alert' color={"black"} position={"absolute"} width={{ 'base': '100vw', 'lg': '25vw', 'md': '50vw', 'sm': '80vw' }} margin={{ 'lg': '15px 37.5vw', 'md': '15px 25vw', 'sm': '15px 10vw', 'base': '15px 0' }} borderRadius={"20px"} justifyContent={"center"} fontSize={"16px"} status={alertType}>
            <AlertIcon />
            <AlertTitle>{alertDesc}</AlertTitle>
            <AlertDescription>{desc}</AlertDescription>
        </Alert>
    )
}