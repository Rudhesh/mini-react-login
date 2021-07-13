import logo from './pokemon.png'
import './Logo.css';


export default function Logo() {
    return (
        <div className="logo">
            <img src={logo} alt="Codelicious"/>
        </div>
    )
}