import React from "react"
import TopSection from './TopSection'
import CardSection from './CardSection'
import ContactSection from './ContactSection'

export default function Main() {

    return (
        <div className="container">
            <section className="top-intro">
                <TopSection />
                <CardSection />
                <ContactSection />
            </section>
        </div>
    )
}
