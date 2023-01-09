//this is my about page

let about = document.getElementById("about");
about.innerHTML = `
<section class="about" id="about">
        <div class="max-width">
            <h2 class="title">About me</h2>
            <div class="about-content">
                <div class="column left">
                    <img src = "images/profile.jpg" alt = ""
                        style="border-radius:250px;background-color: rgba(146, 139, 139, 0.068);">
                </div>
                <div class="column right">
                    <div class="text">I'm Shibin C Reji and I'm a <span class="typing-2"></span></div>
                    <p>Aspiring Full Stack Web Developer and capable of writing efficient code using
                        MERN Stack. Ambitious to work and collaborate with other dedicated and enterprising developers.
                        <br>
                        Eager to take up a responsible role within an exciting and inspiring organization, and deliver
                        products that offer a great user experience.
                    </p>
                    <div class="mediaLinksAbout">

                        <a href="https://www.linkedin.com/in/shibincreji/" target="_blank">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/shibincreji" target="_blank">
                            <i class="fab fa-github"></i>
                        </a>
                        
                        <a href="https://twitter.com/shibincreji">
                        <i class="fab fa-twitter"></i>
                        </a>

                        <a href="https://instagram.com/shibincreji">
                        <i class="fab fa-instagram"></i>
                        </a>
                        
                    </div>
                    <p class="iconsAboutSection"> <i class="fas fa-phone"></i> +91-9074035241</p>
                    <p class="iconsAboutSection"><i class="fas fa-envelope"></i> shibincreji24@gmail.com</p>
                    <a href="images/MyResume.pdf"
                        target="_blank" class="resumeToDrive">Resume</a>
                </div>
            </div>
        </div>
    </section>
`;
