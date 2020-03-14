import {useEffect} from "react"
import useLocalStorage from './UseLocalStorage.js'


const useDark = () => {
    const [values, setValues] = useLocalStorage('dark');

    useEffect( () => {
        if (values === true) {
            document.body.classList.add('dark-mode')
            // document.querySelector('.player').classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    },[values])

    return [values , setValues]
}

export default useDark  