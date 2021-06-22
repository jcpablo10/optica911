import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <div className="nav__container">
                <img className="nav__logo" src="/logo_optica911.png" />
            </div>
            <div className="nav__container">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a className="nav__link">
                            Productos
                        </a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link">
                            Servicios
                        </a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link">
                            Pymes
                        </a>
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
