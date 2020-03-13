import React from 'react'
//normal styles
import './Player.css'
import useDark from './UseDark.js'
 
//material-ui
import Button from '@material-ui/core/Button';

const Darkbutton = () => {
    const [darkMode, setDarkMode] = useDark(false)
    const toggleDark = e => {
        e.preventDefault();
        setDarkMode(!darkMode)
    }
    return(
        <Button onClick={toggleDark}>Dark Mode</Button>
    )

}
export default Darkbutton