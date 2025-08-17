import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__content">
        <h2 className="about__title">About The author</h2>
        <p className="about__subtitle">
          Hi, I'm Eian Jennings, an aspiring developer focused on building
          responsive, accessible, and well formatted web applications. Core
          technologies that I used include HTML5, CSS3, JavaScript, React, APIs,
          Git, Vite, Node.js.
          <br></br>
          <br></br>A lot of things that I've learned from Triple Ten includes
          strengthening component architecture, state management with React
          hooks, clean asynchronous data handling, and semantic UI patterns. I
          enjoy creating and editing code into clean, maintainable code and
          collaborating across design and engineering to control user‑centered
          features.
        </p>
      </div>
      <img
        className="about__avatar"
        src="https://media.licdn.com/dms/image/v2/D4E03AQF3oRWwblcdfQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724184823955?e=2147483647&v=beta&t=oefPnJCMmxNzqcrXCpe6gru0Uapj7qrCL9jzS_fspqo"
        alt="Eian Jennings"
      />
    </section>
  );
}

export default About;
