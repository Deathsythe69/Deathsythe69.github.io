```javascript
const App = () => {
    return (
        <div>
            <header>
                <h1>Hi, I’m Debasis Panigrahi 👋</h1>
                <p>Frontend Developer | Passionate about UI/UX | Based in Bhubaneswar, India</p>
                <div className="cta-buttons">
                    <a href="resume.pdf" className="btn">Download Resume</a>
                    <a href="#projects" className="btn">View Projects</a>
                    <a href="https://www.linkedin.com/in/debasis-panigrahi" className="btn">Connect on LinkedIn</a>
                </div>
            </header>

            <!-- About Me Section -->
            <section id="about">
                <h2>About Me</h2>
                <p>Frontend Developer | Student | Tech Enthusiast</p>
                <p>I’m currently pursuing B.Tech in Computer Science & Information Technology. With a keen eye for design and usability, I build user interfaces that are clean, efficient, and accessible across devices.</p>
                <p>I’m proficient in HTML, CSS, JavaScript, and frameworks like Bootstrap and React. I enjoy turning creative ideas into real-world applications that enhance user experience.</p>
                <p>When I'm not coding, you'll find me exploring design trends, debugging layouts, or learning new tools to stay ahead in the frontend world.</p>
            </section>

            <!-- Skills Section -->
            <section id="skills">
                <h2>Skills</h2>
                <h3>Frontend</h3>
                <ul>
                    <li>HTML5, CSS3, JavaScript</li>
                    <li>Bootstrap, Tailwind CSS</li>
                    <li>React (Basics), Responsive Design</li>
                </ul>
                <h3>Tools</h3>
                <ul>
                    <li>Git & GitHub</li>
                    <li>VS Code</li>
                    <li>Figma (UI Prototyping)</li>
                </ul>
                <h3>Others</h3>
                <ul>
                    <li>Strong Communication</li>
                    <li>Team Collaboration</li>
                    <li>Problem Solving</li>
                </ul>
            </section>

            <!-- Projects Section -->
            <section id="projects">
                <h2>Projects</h2>
                <div className="project">
                    <h3>Responsive Portfolio Website</h3>
                    <p>Built using HTML, CSS, and JS. Fully responsive for all screen sizes.</p>
                    <a href="#" className="btn">View Code</a>
                    <a href="#" className="btn">Live Demo</a>
                </div>
                <div className="project">
                    <h3>Weather App UI</h3>
                    <p>Clean frontend for a weather app using API integration.</p>
                    <a href="#" className="btn">View Code</a>
                    <a href="#" className="btn">Live Demo</a>
                </div>
                <div className="project">
                    <h3>Landing Page for Product</h3>
                    <p>Product-focused design using Bootstrap and custom CSS animations.</p>
                    <a href="#" className="btn">View Code</a>
                    <a href="#" className="btn">Live Demo</a>
                </div>
            </section>

            <!-- Education Section -->
            <section id="education">
                <h2>Education</h2>
                <p>B.Tech in Computer Science & IT</p>
                <p>Trident Academy of Technology, Bhubaneswar</p>
                <p>(Expected Graduation: 2026)</p>
            </section>

            <!-- Contact Section -->
            <section id="contact">
                <h2>Contact</h2>
                <p>Let’s Build Something Together!</p>
                <p>📍 Bhubaneswar, India</p>
                <p>📧 debasispanigrahi7864@gmail.com</p>
                <p>📞 +91 7008348993</p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/debasis-panigrahi" className="btn">LinkedIn</a>
                    <a href="https://github.com/debasis-panigrahi" className="btn">GitHub</a>
                </div>
            </section>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // Function to create floating icons
    const createIcon = (x, y) => {
        const icon = document.createElement('div');
        icon.className = 'icon';
        icon.style.left = `${x}px`;
        icon.style.top = `${y}px`;
        body.appendChild(icon);

        // Add click effect
        icon.addEventListener('click', () => {
            icon.classList.add('clicked');
            setTimeout(() => body.removeChild(icon), 1000);
        });

        // Remove icon after animation
        setTimeout(() => body.removeChild(icon), 5000);
    };

    // Generate random floating icons
    setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        createIcon(x, y);
    }, 2000);

    // Add click listener to create icons at click position
    body.addEventListener('click', (e) => {
        createIcon(e.clientX, e.clientY);
    });
});
```