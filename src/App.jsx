
import "./App.css";

const projects = [
  {
    title: "Web Development",
    description: "Building modern websites with HTML, CSS and React.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Team Collaboration",
    description: "Working together to create useful digital products.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Developer Workspace",
    description: "Designing and developing creative web solutions.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  },
];

export default function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <a className="logo" href="#home">MyPortfolio</a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-text">
            <p className="eyebrow">HELLO, WORLD!</p>
            <h1>
              my name is hermela
               <span>Web Developer</span>
            </h1>
            <p className="intro">
              I create beautiful websites and enjoy turning ideas into
              real digital experiences.
            </p>
            <a className="button" href="#projects">
              View My Projects
            </a>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
              alt="Computer and coding workspace"
            />
          </div>
        </section>

        <section className="about section" id="about">
          <p className="eyebrow">GET TO KNOW ME</p>
          <h2>About Me</h2>
          <p>
            I am learning web development and building my skills in
            HTML, CSS, JavaScript and React. I enjoy solving problems
            and creating websites that are easy to use.
          </p>
        </section>

        <section className="section" id="projects">
          <p className="eyebrow">MY WORK</p>
          <h2>Featured Projects</h2>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <img
                  className="project-image"
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>Contact Me</h2>
          <p>Have a project idea? I would love to hear from you.</p>
          <a className="button" href="mailto:hello@example.com">
            Send Me an Email
          </a>
        </section>
      </main>

      <footer>
        <p>© 2026 MyPortfolio. Built with React.</p>
      </footer>
    </div>
  );
}



