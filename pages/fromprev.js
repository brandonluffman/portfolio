import React from 'react'

const fromprev = () => {
  return (
    <div>
          <div class="container-fluid landing-container" id="home">
      <div class="row">
        <div class="landing-content">
            <h1 class="landing-header fade-up">Hi, I&apos;m <span class="landing-name">Brandon Luffman</span>.</h1>
                <div class='console-container word1 fade-up'><span id='text'></span><div class='console-underscore' id='console'>&#95;</div></div>
            <a class="anchor fade-in" href="#contact"><button class="landing-button" type="button"><span class="button-text">Get in touch!</span></button></a>
        </div>
        <div class='landing-img-div fade-left'>
            {/* <img class='landing-img' src="landing-img.webp"> */}
        </div>
      </div>
    </div>











    <div class="container-fluid about-container" id="about">
      <h3 class="about-header" id="about-header">About Me</h3>
      <div class="row about-row">
          <div class="content-col">
          <h3 class="code-text">{`<p>`}</h3>
          <p class="about-content">
              My name is Brandon Luffman, and I am passionate Full-Stack Engineer specializing in React, Javascript, HTML & CSS. 
              My engineer career started in 2019 when I decided to synergize my desires of problem solving, building, and creativity. 
              Since then, I have worked on dozens of web applications ranging from e-commerce stores, blogs and many more. 
              Alongside these skills, I have also developed a keen interest towards learning SEO and Blockchain Development.
          </p>
          <h3 class="code-text code-two">{`</p>`}</h3>
          </div>
          <div class="img-div">
              <div class="img-col">
                  {/* <img class="about-img" src="profile-img.webp"> */}
                  <a href='Resume - Luffman.pdf' class="img-btn" target="_blank"><button class='btn-img'><i class='fa fa-file-text-o'></i></button></a>
              </div>
          </div>
      </div>
    </div>










        <div class="container-fluid skills-container" id="skills">
            <h3 class="skills-header">Technical Skills</h3>

            <div class="row">
                <div class="circle-col">
                    <span class="content"></span>
                </div>
            
           
                <div class="attribute-col">
                    <div class="skill-attribute">
                        <h6 class="attribute-header">React</h6>
                        <div class="progress">
                            <div class="progress-value pv-90"></div>
                        </div>
                        <h6 class="progres-percentage">90%</h6>
                    </div>

                    <div class="skill-attribute">
                        <h6 class="attribute-header">Javascript</h6>
                        <div class="progress">
                            <div class="progress-value pv-80"></div>
                        </div>
                        <h6 class="progres-percentage">80%</h6>
                    </div>

                    <div class="skill-attribute">
                        <h6 class="attribute-header">HTML</h6>
                        <div class="progress">
                            <div class="progress-value pv-100"></div>
                        </div>
                        <h6 class="progres-percentage">100%</h6>
                    </div>

                    <div class="skill-attribute">
                        <h6 class="attribute-header">CSS</h6>
                        <div class="progress">
                            <div class="progress-value pv-100"></div>
                        </div>
                        <h6 class="progres-percentage">100%</h6>
                    </div>

                    <div class="skill-attribute">
                        <h6 class="attribute-header">Sass</h6>
                        <div class="progress">
                            <div class="progress-value pv-90"></div>
                        </div>
                        <h6 class="progres-percentage">90%</h6>
                    </div>

                    <div class="skill-attribute">
                        <h6 class="attribute-header">Node.js</h6>
                        <div class="progress">
                            <div class="progress-value pv-90"></div>
                        </div>
                        <h6 class="progres-percentage">90%</h6>
                    </div>

                    <div class="skill-attribute">
                        <h6 class="attribute-header">Typescript</h6>
                        <div class="progress">
                            <div class="progress-value pv-80"></div>
                        </div>
                        <h6 class="progres-percentage">80%</h6>
                    </div>

                    <div class="skill-attribute">
                        <h6 class="attribute-header">Git</h6>
                        <div class="progress">
                            <div class="progress-value pv-90"></div>
                        </div>
                        <h6 class="progres-percentage">90%</h6>
                    </div>

                </div>
            </div>
        </div>





        <div class="container-fluid projects-container" id="projects">
            <h3 class="projects-header">My Portfolio</h3>
            <div class="row">
            <div class="project-div">
                    <div class="project-image-col">
                        {/* <img class="project-image" src="crypto.webp"> */}
                    </div>
                    <div class="project-content-col">
                        <div class="project-content-div">
                            <p class="project-link featured-project-link">Featured Project</p>
                            <h4 class="project-link tracker-project-link">Crypto Price Tracker</h4>
                            <div class="project-box project-link">
                                <p class="project-desc">A minimal price tracker for cryptoassets using CoinGecko API data and Axios with ranking and filter abilities. </p>
                            </div>
                            <div class="project-languages project-link">
                                <p class="project-desc">
                                    <span class='language-item'>React</span> 
                                    <span class='language-item'>Javascript</span> 
                                    <span class='language-item'>HTML</span> 
                                    <span class='language-item'>CSS</span> 
                                    <span class='language-item'>Axios</span>
                                </p>
                            </div>
                            <div class="project-icons project-link">
                                <a href='https://github.com/brandonluffman/crypto-price-tracker.git' target="_blank"><i class="fa fa-github icon"></i></a>
                                <i class="fa fa-external-link icon"></i>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="project-div-2">
                    <div class="project-content-col-2">
                        <div class="project-content-div-2">
                            <p class="project-link featured-project-link">Featured Project</p>
                            <h4 class="project-link tracker-project-link">To Do Dashboard</h4>
                            <div class="project-box project-link">
                                <p class="project-desc">A simplistic To Do Dashboard built to add, edit, and delete tasks using React.</p>
                            </div>
                            <div class="project-languages project-link">
                                <p class="project-desc">
                                    <span class='language-item-2'>React</span> 
                                    <span class='language-item-2'>Javasript</span> 
                                    <span class='language-item-2'>HTML</span> 
                                    <span class='language-item-2'>CSS</span> 
                                    <span class='language-item-2'>Material Icons</span>
                                </p>
                            </div>
                            <div class="project-icons project-link">
                                <a href='https://github.com/brandonluffman/todo-2.git' target="_blank"><i class="fa fa-github icon-2"></i></a>
                                <i class="fa fa-external-link icon-2"></i>
                            </div>
                    </div>
                </div>
                    <div class="project-image-col-2">
                        {/* <img class="project-image" src="todo.webp"> */}
                    </div>
        </div>

            <div class="project-div">
                        <div class="project-image-col">
                            {/* <img class="project-image" src="landing-page.webp"> */}
                        </div>
                        <div class="project-content-col">
                            <div class="project-content-div">
                                <p class="project-link featured-project-link">Featured Project</p>
                                <h4 class="project-link tracker-project-link">Landing Page Template</h4>
                                <div class="project-box project-link">
                                    <p class="project-desc">A simple white and blue themed landing page template compatible for all devices.</p>
                                </div>
                                <div class="project-languages project-link">
                                    <p class="project-desc-2">
                                        <span class='language-item'>React</span> 
                                        <span class='language-item'>Javascript</span> 
                                        <span class='language-item'>HTML</span> 
                                        <span class='language-item'>CSS</span> 
                                        <span class='language-item'>JSX</span>
                                    </p>
                                </div>
                                <div class="project-icons project-link">
                                    <a href='https://github.com/brandonluffman/react-landing-page.git' target="_blank"><i class="fa fa-github icon"></i></a>
                                    <i class="fa fa-external-link icon"></i>
                                </div>
                            </div>
                        </div>
            </div>
        </div>
        </div>

         

        <div class="container-fluid contact-container" id="contact">
            <h3 class="contact-header">Contact Me</h3>
                <div class="contact-form-div">
                        <div class="contact-col">
                        
                        </div> 

          
                </div>
    </div>

    </div>
  )
}

export default fromprev