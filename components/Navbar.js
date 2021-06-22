import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <div className="nav__container">
                <Link href="./">
                    <a>
                        <img className="nav__logo" src="/logo_optica911.png" />
                    </a>
                </Link>
            </div>
            <div className="nav__container">
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link href="/productos">
                            <a className="nav__link">
                                Productos
                            </a>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link href="/servicios">
                            <a className="nav__link">
                                Servicios
                            </a>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link href="/pymes">
                            <a className="nav__link">
                                Pymes
                            </a>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link">
                            ¡Promociones!
                        </a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link--red">
                            ¡Visitanos ya!
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
