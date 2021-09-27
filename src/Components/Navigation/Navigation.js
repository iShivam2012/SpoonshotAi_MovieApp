import Container from "../../UI/Container";
import NavigationLink from "./NavigationLink";
import NavLogo from "./NavLogo";
import "./Navigation.css"

const Navigation = () => {
    return (
        <nav>
            <Container>
                <NavLogo />
                <ul className="nav">
                    <NavigationLink url="/movieshome" link="Movies" />
                    <NavigationLink url="/tvshows" link="TV Shows" />
                    <NavigationLink url="/" link="Kids" />
                </ul>

            </Container>
        </nav>
    )
}
export default Navigation;