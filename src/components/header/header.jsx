import { Link } from "react-router-dom"
import Logo from "./logo/logo"

export default function Header() {
    return (
        <header className="bg-blackHeader">
            <div className='container mx-auto'>
                <div className="flex justify-between">
                    <Logo className="text-yellow"/>
                    <nav className="flex items-center">
                        <Link to="/films">Filmes</Link> {" "} |{" "}
                        <Link to="/char">Personagens</Link>
                    </nav>
                    <Link className="flex items-center" to="/register">Cadastre-se</Link>
                </div>
            </div>
        </header>
    )
}