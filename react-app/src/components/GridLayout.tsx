import "./GridLayout.css";
import ButtonSection from "./ButtonSection";

function GridLayout() {
  return (
    <div className="container">
      <section id="home" className="square-1">
        <h2>Isaac D. Larson</h2>
        <div className="content">
          <p className="text-above-line">
            Student in Computer Science & Eletrical Engineering
          </p>
          <div className="line"></div>
        </div>
        <ButtonSection></ButtonSection>
      </section>
      <div className="square-2">
        <div className="photo">
          <img src="./images/myImage.png" alt="me"></img>
        </div>
      </div>
      <section id="about" className="square-3">
        <h2>About Me</h2>
        <div className="line"></div>
        <p>
          Hi, I’m Isaac! I’m a dual major in Computer Science and Electrical
          Engineering at the University of Arizona. I’m eager to apply my skills
          to transformative, cutting-edge technologies that have the potential
          to make a lasting impact.
        </p>
      </section>
      <section id="projects" className="square-5">
        <div className="projsquare-1">
          <h1>Projects</h1>
          <div className="line"></div>
        </div>
        <div className="projsquare-2">
          <h3>My Portfolio</h3>
          <p>
            Designed responsive eportfolio website that I continue to update!
          </p>
          <div className="tags">
            <span className="tag">React</span>
            <span className="tag">Typescript</span>
            <span className="tag">Bootstrap</span>
          </div>
        </div>
        <div className="projsquare-3">
          <h3>Barbershop Landing Page</h3>
          <p>Coming Soon . . .</p>
          <div className="tags">
            <span className="tag">React</span>
            <span className="tag">Typescript</span>
            <span className="tag">Bootstrap</span>
          </div>
        </div>
        <div className="projsquare-4">
          <h3>Course Coding Projects</h3>
          <p>
            My coding projects at University so far! Includes algorithm
            development, data strucutres, OOP, processing and analyzing large
            datasets, games, implementing digital circuits and lots more!&nbsp;
            <a
              href="https://github.com/Isaacdl2/ClassProjects/tree/main"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </p>
          <div className="tags">
            <span className="tag">Python</span>
            <span className="tag">C++</span>
            <span className="tag">Java</span>
            <span className="tag">Verilog</span>
          </div>
        </div>
        <div className="projsquare-5"></div>
        <div className="projsquare-6"></div>
        <div className="projsquare-7"></div>
      </section>

      <section id="work" className="square-6">
        <div className="worksquare-1">
          <h1>Work Experience</h1>
          <div className="line"></div>
        </div>
        <div className="worksquare-2">
          <h3>Software Developer Intern - Aspera Satellite</h3>
          <p>
            Worked on the Aspera satellite as part of the NASA Pioneer Program,
            collaborating with teams to develop command and lab software that
            enhances satellite operations.&nbsp;
            <a
              href="https://www.nasa.gov/centers-and-facilities/goddard/nasa-selects-4-concepts-for-small-missions-to-study-universes-secrets/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more...
            </a>
          </p>
          <div className="tags">
            <span className="tag">Python</span>
            <span className="tag">SpiceyPy</span>
            <span className="tag">Testing</span>
          </div>
          <img src="./images/ascending_node_logo.png" alt="logo" />
          <img src="./images/nasa_logo.png" alt="logo" />
        </div>
        <div className="worksquare-3">
          <img src="./images/aspera_Cropped.png"></img>
        </div>
        <div className="worksquare-4">
          <h3>Technical Consultant - University of Arizona</h3>
          <p>
            Provided IT support to students and faculty at the University of
            Arizona, troubleshooting technical issues and colloborating with
            teams to promote efficient use of technology resources across the
            university.
          </p>
          <div className="tags">
            <span className="tag">Technical Troubleshooting</span>
            <span className="tag">Customer Service</span>
            <span className="tag">Problem Solving</span>
            <span className="tag">Collaboration</span>
          </div>
          <img src="./images/UA-LOGO.png" alt="logo" />
          <img src="./images/uits.jpg" alt="logo" />
        </div>
        <div className="worksquare-5">
          <h3>Math Tutor - Horizon High School</h3>
          <p>
            Provided one-on-one tutoring for students outside of class at
            Horizon High School, helping them improve their understanding of
            mathematical concepts and enhance their problem-solving skills.
          </p>
          <div className="tags">
            <span className="tag">Mentorship</span>
            <span className="tag">Communication</span>
            <span className="tag">Problem Solving</span>
          </div>
          <img src="./images/horizon_high_h.png" alt="logo" />
          <img src="./images/horizon_high_dog.png" alt="logo" />
        </div>
        <div className="worksquare-6">
          <h3>Assistant Youth Wrestling Coach - NPWC</h3>
          <p>
            Assisted in coaching youth wrestlers at North Phoenix Wrestling
            Club, providing instruction on techniques, fostering teamwork, and
            promoting sportsmanship among athletes.
          </p>
          <div className="tags">
            <span className="tag">Leadership</span>
            <span className="tag">Teamwork</span>
            <span className="tag">Adaptability</span>
            <span className="tag">Communication</span>
          </div>
        </div>
        <div className="worksquare-7">
          <h3>Barista - Dunkin'</h3>
          <p>
            Designed Prepared and served a variety of beverages and food items
            at Dunkin', delivering exceptional customer service while
            maintaining a clean and efficient workspace.
          </p>
          <div className="tags">
            <span className="tag">Customer Service</span>
            <span className="tag">Multitasking</span>
            <span className="tag">Efficiency</span>
          </div>
          <img src="./images/dunkin_logo.png" alt="logo" />
        </div>
      </section>
      <section id="contact" className="square-4">
        <h2>Contact Me!</h2>
        <div className="line"></div>
        <p>✉️ Email: ilarson@arizona.edu</p>
        <p>📞 Phone: +1 219-299-0631 (Text or Call)</p>
      </section>
    </div>
  );
}

export default GridLayout;
