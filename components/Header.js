import React from 'react'


const Header = () => {
    return (
        <header class="section header">
            <div className="section__background--blue">
                <div className="section__content">
                    <div className="section__grid header__grid">
                        <div className="header__item">
                            <h1 className="title header__title">Óptica911, tu óptica de confianza</h1>                    
                            <h2 className="subtitle header__subtitle">¡Ven a conocernos ya!</h2>
                            <a className="button__primary--red ">
                                Encuentra una sucursal
                            </a>
                        </div>
                        <div className="header__item">
                            <img className="header__img" src="/header__image.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
