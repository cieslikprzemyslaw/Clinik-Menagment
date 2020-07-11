import React from 'react';
import Summary from '../../components/Summary/Summary';


const Home = () => {
    return (
        <article className="home">
            <section className="home__summary">
                <Summary
                    title="Doctors"
                    content="Number of Doctors avaible today "
                    number="0"
                />
                <Summary
                    title="Patients"
                    content="Number of Patients who are register today "
                    number="0"
                />
                <Summary
                    title="Appoitments"
                    content="Avaible appoitments today "
                    number="0"
                />
            </section>
            
        </article>
    );
}

export default Home;