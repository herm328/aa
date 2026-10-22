
import './App.css';

function App() {
  return (
    <>
      <header className="navbar">
        <a href="#home" className="logo">
          Dev<span>.</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-text">
            <p className="eyebrow">WELCOME TO MY PROFILE</p>
            <h1>
              Hi, I'm <span>Your Name</span>
            </h1>
            <h2>Frontend Developer</h2>

            <p className="description">
              I create modern, responsive, and user-friendly websites
              using React, JavaScript, HTML, and CSS. I love learning
              new technologies and turning creative ideas into reality.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="btn primary">
                Contact Me ↗
              </a>
              <a href="#about" className="btn secondary">
                About Me
              </a>
            </div>
          </div>

          <div className="profile-visual">
            <div className="profile-circle">
              <img
                src="https://placehold.co/320x320/24203b/c4b5fd?text=Your+Photo"
                alt="Your profile"
              />
            </div>
            <div className="floating-card">
              <span className="online-dot"></span>
              Ready to create
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <p className="eyebrow">GET TO KNOW ME</p>
          <h2>About <span>Me</span></h2>
          <p>
            I'm an aspiring developer passionate about building
            beautiful digital experiences. I enjoy solving problems,
            improving my coding skills, and creating websites that
            work well on mobile phones, tablets, and computers.
          </p>
        </section>

        <section className="section" id="skills">
          <p className="eyebrow">WHAT I WORK WITH</p>
          <h2>My <span>Skills</span></h2>

          <div className="skills-grid">
            <div className="skill-card">HTML5</div>
            <div className="skill-card">CSS3</div>
            <div className="skill-card">JavaScript</div>
            <div className="skill-card">React</div>
            <div className="skill-card">Vite</div>
            <div className="skill-card">Responsive Design</div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>Have a project in <span>mind?</span></h2>
          <p>
            I'm always interested in learning, collaborating,
            and exploring new opportunities.
          </p>
          <a
            className="btn primary"
            href="mailto:your.email@example.com"
          >
            Send Me an Email ↗
          </a>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="logo">
          Dev<span>.</span>
        </a>
        <p>Built with React ❤️</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}

export default App;

