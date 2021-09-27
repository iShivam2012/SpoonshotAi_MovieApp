import { Link } from "react-router-dom"
import "./NavigationLink.css"

const NavigationLink = (props) => {
    return (
        <li className="navlink" >
            <Link to={props.url} >
                {props.link}
            </Link>
        </li>
    )
}

export default NavigationLink