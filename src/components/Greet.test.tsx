import { render,screen} from "@testing-library/react"
import Greet from "./Greet"

test("Greeting component",()=>{
    render(<Greet />)
    const textelemnet = screen.getByText('Greet')
    expect(textelemnet).toBeInTheDocument()

})

test("Greet component by name",()=>{
    render(<Greet name="Anandhu"/>)
    const textelement = screen.getByText('Greet Anandhu')
    expect(textelement).toBeInTheDocument();



})