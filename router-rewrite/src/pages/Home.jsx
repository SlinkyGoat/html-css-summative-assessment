import hero from '../assets/person-at-computer.jpg';

export default function Home() {
    return (
        <main>
            <h2>Registered Apprenticeships</h2>

            <section>
                <img
                    className="hero-img hero-img--cropped"
                    src={hero}
                    alt="Professional working at a computer."
                    width="1200"
                    height="400"
                />
                <h3>Change the Way You Build Talent</h3>
            </section>

            <section>
                <p>
                    We help employers develop skilled workers through modern, registered
                    apprenticeships so teams can hire for potential and grow expertise on the job.
                </p>
            </section>

            <section>
                <ul>
                    <li><strong>4,500+</strong> apprentices placed into living-wage roles nationwide.</li>
                    <li><strong>89%</strong> graduate retention by employers.</li>
                    <li><strong>$57,000+</strong> earned while learning through hands-on experience.</li>
                </ul>
            </section>
        </main>
    );
}
