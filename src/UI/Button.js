import { useContext } from "react"
import { MovieContext } from "../Store/MovieContext"
import "./Button.css"

const Button = (props) => {
    const ctx = useContext(MovieContext)
    return (
        <button className={`${props.className} button`} type={props.type ? props.type : "button"} onClick={ctx.onClick} >
            {props.children}
        </button>
    )
}
export default Button