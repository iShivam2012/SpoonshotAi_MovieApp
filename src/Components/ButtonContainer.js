import Button from "../UI/Button"

const ButtonContainer = () => {
    return (
        <div className="buttonContainer">
            <Button className="selected" >New Release</Button>
            <Button>Upcoming</Button>
            <Button>Action</Button>
            <Button>Comedy</Button>
            <Button>Crime</Button>
            <Button>Drama</Button>
            <Button>Thriller</Button>
            <Button>Sci-Fi</Button>
            <Button>Family</Button>
            <Button>Horror</Button>
        </div>
    )
}

export default ButtonContainer