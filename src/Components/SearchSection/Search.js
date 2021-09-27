import Container from "../../UI/Container"
import "./Search.css"
import { FaSistrix } from "react-icons/fa";
import { useHistory } from "react-router"

const Search = (props) => {

    const history = useHistory();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("submit")
        history.push("/showresults")
    }

    return (
        <Container className="searchCard" >
            <section className="textMsg">
                <h1 className="normalText" >Find perfect {props.type} for <span className="boldText">evening</span></h1>
            </section>
            <form className="searchBar" onSubmit={onSubmitHandler} >
                <input className="inputComponent" value={props.value} onChange={props.onChange} type="text" placeholder={`Search ${props.type}`} required />
                <FaSistrix className="icon" />
                <button className="btn" type="submit" value="Search">SEARCH</button>
            </form>
        </Container>
    )
}
export default Search