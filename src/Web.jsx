

import './Web.css';

const projects = [
  {
    title: 'Personal Portfolio',
    description: 'A modern portfolio showcasing my skills and experience.',
    tags: ['React', 'CSS', 'Vite'],
  },
  {
    title: 'E-commerce Website',
    description: 'A clean shopping interface with responsive product cards.',
    tags: ['JavaScript', 'React'],
  },
  {
    title: 'Task Manager',
    description: 'A simple application to organize everyday tasks.',
    tags: ['React', 'CSS'],
  },
];

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'Vite',
  'Responsive Design',
];

function App() {
  return (
    <>
      <header className="navbar">
        <a href="#home" className="logo">Dev<span>.</span></a>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="nav-button">Contact ↗</a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <p className="availability">● Available for opportunities</p>
            <p className="eyebrow">HELLO, I'M A DEVELOPER</p>
            <h1>
              Building digital experiences that{' '}
              <span>make a difference.</span>
            </h1>
            <p className="description">
              I'm a frontend developer passionate about creating
              beautiful, accessible, and user-friendly websites.
            </p>
            <div className="actions">
              <a href="#projects" className="primary-button">
                Explore my work ↗
              </a>
              <a href="#contact" className="secondary-button">
                Let's talk
              </a>
            </div>
          </div>

          <div className="code-card">
            <div className="code-header">
              <span>MY WORKSPACE</span>
              <span>● ● ●</span>
            </div>
            <pre>
              <span className="purple">const</span> developer = {'{'}
              {'\n\n'}  name: <span className="green">'Your Name'</span>,
              {'\n'}  skills: [<span className="green">'React'</span>, <span className="green">'CSS'</span>],
              {'\n'}  passion: <span className="green">'Building for web'</span>
              {'\n\n'}{'}'};
              {'\n\n'}<span className="purple">function</span> createWebsite() {'{'}
              {'\n'}  <span className="purple">return</span> <span className="green">'Ideas into reality'</span>;
              {'\n'}{'}'}
            </pre>
            <p className="code-footer">● Ready to build something great</p>
          </div>
        </section>

        <section className="section about" id="about">
          <p className="eyebrow">01 / GET TO KNOW ME</p>
          <h2>Curious mind. <span>Creative builder.</span></h2>
          <p className="description">
            I enjoy turning ideas into websites that look great and
            work smoothly. I'm developing my skills in modern frontend
            technologies and learning something new with every project.
          </p>
        </section>

        <section className="section" id="skills">
          <p className="eyebrow">02 / MY TOOLKIT</p>
          <h2>Skills &amp; <span>technologies.</span></h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span>0{index + 1}</span>
                <h3>{skill}</h3>
                <p>Explore and create ↗</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <p className="eyebrow">03 / SELECTED WORK</p>
          <h2>Projects I've <span>built.</span></h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className={`project-art art-${index + 1}`}>
                  <span>0{index + 1}</span>
                  <strong>✳</strong>
                  <small>CREATIVE DEVELOPMENT</small>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a href="#contact">Discuss a project ↗</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <p className="eyebrow">04 / LET'S CONNECT</p>
          <h2>Have a project in mind?</h2>
          <p className="description">
            Let's collaborate, share ideas, and build something meaningful.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="primary-button"
          >
            Send me an email ↗
          </a>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="logo">Dev<span>.</span></a>
        <p>Built with React ❤️</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}

export default App;
