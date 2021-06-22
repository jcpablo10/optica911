import React from 'react'

const Section = ({children}) => {
    return (
        <section>
            <section className="section__background">
                <section className="section__content">
                    {children}
                </section>
            </section>
        </section>
    )
}

export default Section
