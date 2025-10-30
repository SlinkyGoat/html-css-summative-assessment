import people from "../assets/happy-people.jpg";
import adam from "../assets/adam.jpg";
import henok from "../assets/henok.png";
import jaha from "../assets/Jaha.jpeg";
import spencer from "../assets/spencer.jpeg";

export default function About() {
    return (
        <main id="main">
            <h2>About Us</h2>
            <section className="intro">
                <img
                    src={people}
                    alt="Happy people high fiving at work."
                    width="1200"
                    height="600"
                />
                <h3>Our Mission</h3>
                <p>
                    Apprenti bridges tech talent gaps by adapting the time-tested
                    apprenticeship model to modern workforce needs.
                </p>
            </section>
            <div className="people">
                <section className="person">
                    <h3>Jaha Knight</h3>
                    <img className="avatar" src={jaha} alt="Jaha Knight" />
                    <p>
                        Jaha Knight serves as a director of product strategy at Apprenti,
                        aligning roadmap priorities with organizational goals while
                        mentoring teams to deliver user-centric, measurable outcomes.
                    </p>
                </section>

                <section className="person">
                    <h3>Adam Ustby</h3>
                    <img className="avatar" src={adam} alt="Adam Ustby" />
                    <p>
                        Adam Ustby is a senior operations leader at Apprenti, optimizing
                        processes, data systems, and partner delivery to drive sustainable
                        growth and workforce impact.
                    </p>
                </section>

                <section className="person">
                    <h3>Henok Ketema</h3>
                    <img className="avatar" src={henok} alt="Henok Ketema" />
                    <p>
                        Henok Ketema is a senior program manager at Apprenti, leading
                        cross-functional initiatives that scale apprenticeship pathways and
                        strengthen engineering operations across the organization.
                    </p>
                </section>

                <section className="person">
                    <h3>Spencer Lohrmann</h3>
                    <img
                        className="avatar"
                        src={spencer}
                        alt="Spencer Lohrmann"
                    />
                    <p>
                        Spencer Lohrmann is a senior executive at Apprenti, guiding
                        strategic growth and innovation while championing talent development
                        across the organization.
                    </p>
                </section>
            </div>
        </main>
    );
}
