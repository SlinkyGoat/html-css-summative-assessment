export default function Contact() {
    return (
        <main>
            <h2>Contact Us</h2>
            <section>
                <p>Send any inquiries using the form below.</p>
                <form action="#" method="post" noValidate>
                    <fieldset>
                        <legend>Send a message</legend>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            autoComplete="name"
                            required
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="you@example.com"
                            autoComplete="email"
                            inputMode="email"
                            required
                        />
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Enter your message"
                            rows="5"
                            required
                        ></textarea>
                        <button type="submit" className="btn">
                            Submit
                        </button>
                    </fieldset>
                </form>
            </section>
        </main>
    );
}
