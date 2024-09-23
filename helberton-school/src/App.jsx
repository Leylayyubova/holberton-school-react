import { useState } from 'react'
import brainSvg from './assets/brain.svg'
import userSvg from './assets/user.svg'
import codeSvg from './assets/code.svg'
import arrowSvg from './assets/arrow.svg'
import iconSvg from './assets/icon.svg'
import downSvg from './assets/down.svg'
import studentPng from './assets/student.png'
import circleSvg from './assets/circle.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok, faDiscord, faYoutube, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram, faTiktok, faDiscord, faYoutube, faTwitter, faLinkedin } from "@fortawesome/free-solid-svg-icons";
import './App.css'

function App() {

  return (
    <>
      <div className="excellent-section">
        <div className="container">
          <div className="content">
            <p>Holberton School, born in the heart of Silicon Valley, stands out for its ambition to make excellent tech training accessible to all, without prerequisites. Faced with a growing demand for IT talent around the world, our pedagogy, resolutely oriented towards practice and real-life situations, ensures our students a successful professional integration as soon as they obtain their diploma.</p>
            <h4>Your Future Starts Now</h4>
            <button>APPLY NOW <img src={arrowSvg} alt="" /></button>
          </div>
          <div className="boxes">
            <div className="box">
              <div className="txt">
                <h3>Machine Learning
                  specialization program</h3>
                <p>Learn and explore the technologies behind today's most important breakthroughs in computer vision, natural language processing, and recommendation systems.</p>
              </div>
              <img src={brainSvg} alt="" />
            </div>
            <div className="box">
              <div className="txt">
                <h3>AR/VR specialization program
                </h3>
                <p>Learn C# and develop interactive VR projects in Unity3D, the world's leading real-time game engine.</p>
              </div>
              <img src={userSvg} alt="" />
            </div>
            <div className="box">
              <div className="txt">
                <h3>Full Stack specialization program
                </h3>
                <p>Develop your skills in Front-End, Back-End and React to create, maintain and improve web applications and APIs.</p>
              </div>
              <img src={codeSvg} alt="" />
            </div>
          </div>
        </div>
        <img className='horse' src={iconSvg} alt="" />
        <img className='down' src={downSvg} alt="" />
      </div>
      <div className="discovery-section">
        <div className="container">
          <div className="content">
            <h4>What is being said
              about Holberton</h4>
            <button>DISCOVER METHODOLOGY <img src={arrowSvg} alt="" /></button>
          </div>
          <div className="imgs">
            <p className='skilled'>
              The flexibility offered by Holberton made it possible for me not to break away from my master's studies, and I even became so skilled that today.
            </p>
            <p className='people'>Real people - real lives - we have
              built products and solutions for.</p>
            <h5>95 %
              of practice</h5>
            <img className='student' src={studentPng} alt="" />
            <img className='student2' src={studentPng} alt="" />
          </div>
        </div>
      </div>
      <div className="team-section">
        <div className="container">
          <h2>Our Team</h2>
          <div className="team-members">
            <div className="member">
              <div className="member-info">
                <span className="member-number">01</span>
                <h3 className="member-name">David Harrison</h3>
              </div>
              <p className="member-role">CEO</p>
            </div>
            <div className="member">
              <div className="member-info">
                <span className="member-number">02</span>
                <h3 className="member-name">Emily Thompson</h3>
              </div>
              <p className="member-role">COO</p>
            </div>
            <div className="member">
              <div className="member-info">
                <span className="member-number">03</span>
                <h3 className="member-name">Ethan Lewis</h3>
              </div>
              <p className="member-role">Software Engineer</p>
            </div>
            <div className="member">
              <div className="member-info">
                <span className="member-number">04</span>
                <h3 className="member-name">Sophia Patel</h3>
              </div>
              <p className="member-role">CTO</p>
            </div>
            <div className="member">
              <div className="member-info">
                <span className="member-number">05</span>
                <h3 className="member-name">Ava Martinez</h3>
              </div>
              <p className="member-role">Cyber Programmer</p>
            </div>
            <div className="member">
              <div className="member-info">
                <span className="member-number">06</span>
                <h3 className="member-name">Benjamin Kim</h3>
              </div>
              <p className="member-role">VP of Engineering</p>
            </div>
          </div>
          <button>MEET THE ENTIRE TEAM <img src={arrowSvg} alt="" /></button>
        </div>
      </div>
      <div className="brigher-section">
        <div className="container">
          <div className="txt">
            <h4>Let’s create a brighter <p>
              tomorrow.
            </p>
            </h4>
            <p>Explore how Holberton's expertise in technology and education can transform your digital journey to the next level.</p>
            <img src={circleSvg} alt="" />
          </div>
          <button>LET`S GO <img src={arrowSvg} alt="" /></button>
        </div>
      </div>
      {/* <div className="talk">
        <div className="container">
          <h4>They talk about us.</h4>
          <div className="logo">
            <img src="" alt="" />
          </div>
        </div>
      </div> */}
      <div className="contact-section">
        <div className="container">
          <ul className='about'>
            <h4>About</h4>
            <li><a href="">Current group</a></li>
            <li><a href="">Admission</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Events</a></li>
            <li><a href="">Funding</a></li>
            <li><a href="">History</a></li>
            <li><a href="">Methodology</a></li>
            <li><a href="">Holberton-Turing Oath</a></li>
            <li><a href="">Take the test</a></li>
          </ul>
          <ul className='programs'>
            <h4>Programs</h4>
            <li><a href="">Fundamentals</a></li>
            <li><a href="">Cybersecurity</a></li>
            <li><a href="">Machine Learning</a></li>
            <li><a href="">Blockchain</a></li>
            <li><a href="">AR/VR</a></li>
            <li><a href="">Full-Stack</a></li>
          </ul>
          <ul className='news'>
            <h4>News & Events</h4>
          </ul>
          <ul className='location'>
            <button>Contact us</button>
            <p>Baku, Azerbaijan</p>
          </ul>
        </div>
      </div>
      <div className="social-section">
        <div className="container">
          <ul>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Terms of use</a></li>
            <li><a href="">Terms of use</a></li>
          </ul>
          <p>© 2024 Significo. All rights reserved.</p>
          <div className="icon">
          <FontAwesomeIcon icon={faTiktok} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faDiscord} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
      </div>
    </>

  )
}

export default App
