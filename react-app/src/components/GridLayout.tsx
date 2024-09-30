import "./GridLayout.css";
import ButtonSection from "./ButtonSection";

function GridLayout() {
  return (
    <div className="container">
      <div className="square-1">
        <h2>Isaac D. Larson</h2>
        <div className="content">
          <p className="text-above-line">
            Student in Computer Science & Eletrical Engineering
          </p>
          <div className="line"></div>
        </div>
        <ButtonSection></ButtonSection>
      </div>
      <div className="square-2">
        <div className="photo">
          <img src="/images/myImage.png"></img>
        </div>
      </div>
      <div className="square-3">
        <h2>About Me</h2>
        <div className="line2"></div>
        <p>
          Hi, I’m Isaac! I’m a dual major in Computer Science and Electrical
          Engineering at the University of Arizona. I’m eager to apply my skills
          to transformative, cutting-edge technologies that have the potential
          to make a lasting impact.
        </p>
      </div>
      <div className="square-5">
        <div className="projsquare-1">
          <h1>
            <img src="/images/prjImg.png" alt="logo" />
            Projects
          </h1>
          <div className="line5"></div>
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
          <h3>Barbershop Website</h3>
          <p>
            Designed a website for my friend that's a barber.
            stylistmicahmadson.com
          </p>
          <div className="tags">
            <span className="tag">Reactx</span>
            <span className="tag">Typescript</span>
            <span className="tag">Bootstrap</span>
          </div>
        </div>
      </div>

      <div className="square-6">
        <div className="worksquare-1">
          <h1>
            <img src="/images/work.png" alt="logo" />
            Work Experience
          </h1>
          <div className="line4"></div>
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
        </div>
        <div className="worksquare-3">
          <img src="/images/aspera_Cropped.png"></img>
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
            Prepared and served a variety of beverages and food items at
            Dunkin', delivering exceptional customer service while maintaining a
            clean and efficient workspace.
          </p>
          <div className="tags">
            <span className="tag">Customer Service</span>
            <span className="tag">Multitasking</span>
            <span className="tag">Efficiency</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridLayout;
