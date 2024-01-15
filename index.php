<?php include "app/app.php"; $page = 1; head($page); ?>
<body> <header> <?php navbar($page); ?> </header>

<!-- begin fullpage -->

<div id="fullpage">

    <!-- begin section -->

    <div class="section  backimage" data-anchor="aboutme">

        <div class=" aboutme">

            <div class="opaque-bg animated fadeInDown">
                <img src="https://tyrolium.fr/Contenu/Image/Vturias Site.png" alt="logovturias" width="200px" height="200px">
                <h1 style="color:white">VTURIAS<span style="color:var(--color-primary)">/</span>AGENCE</h1>
                <p><span id="holder"></span><span class="blinking-cursor">|</span></p>
            </div>
            <i id="moveDown" class="fa fa-chevron-down fa-3x bounce"></i>

            <div class=" vtuberimage" ><p>te</p></div>
        </div>
    </div>
    <!-- end section -->

    <!-- begin section -->

    <div class="section" data-anchor="skills">
        <div class="content">
            <h1 class="wow fadeInDown" data-wow-delay="0.2s">ABOUT ME</h1>
            <p class="wow fadeInDown" data-wow-delay="0.2s">Hi, I'm Brad Engelhardt! I'm a Silicon Valley based Web Designer & Front-end Developer focused on creating clean, responsive web designs!</p>

            <div class=" wow fadeInUp container-skillbar" data-wow-delay="0.2s">
                <div class="skillbar clearfix " data-percent="90%">
                    <div class="skillbar-title" style="background: #DD1E2F;"><span>HTML5</span></div>
                    <div class="skillbar-bar" style="background: #DD1E2F;"></div>
                    <div class="skill-bar-percent">90%</div>
                </div> <!-- End Skill Bar -->

                <div class="skillbar clearfix " data-percent="80%">
                    <div class="skillbar-title" style="background: #EBB035;"><span>CSS3</span></div>
                    <div class="skillbar-bar" style="background: #EBB035;"></div>
                    <div class="skill-bar-percent">80%</div>
                </div> <!-- End Skill Bar -->

                <div class="skillbar clearfix " data-percent="75%">
                    <div class="skillbar-title" style="background: #218559;"><span>Photoshop</span></div>
                    <div class="skillbar-bar" style="background: #218559;"></div>
                    <div class="skill-bar-percent">75%</div>
                </div> <!-- End Skill Bar -->

                <div class="skillbar clearfix " data-percent="45%">
                    <div class="skillbar-title" style="background: #6840D4;"><span>Rails</span></div>
                    <div class="skillbar-bar" style="background: #6840D4;"></div>
                    <div class="skill-bar-percent">45%</div>
                </div> <!-- End Skill Bar -->

                <div class="skillbar clearfix " data-percent="30%">
                    <div class="skillbar-title" style="background: #06A2CB;"><span>jQuery</span></div>
                    <div class="skillbar-bar" style="background: #06A2CB;"></div>
                    <div class="skill-bar-percent">30%</div>
                </div> <!-- End Skill Bar -->

                <div class="skillbar clearfix " data-percent="20%">
                    <div class="skillbar-title" style="background: #AB4DD2;"><span>PHP</span></div>
                    <div class="skillbar-bar" style="background: #AB4DD2;"></div>
                    <div class="skill-bar-percent">20%</div>
                </div> <!-- End Skill Bar -->
            </div>
        </div>
    </div>
    <!-- end section -->

    <!-- begin section -->

    <div class="section" data-anchor="projects">
        <div class="content-slide">
            <div class="slide">
                <h1 class="wow fadeInDown" data-wow-delay="0.2s">XFAIRE</h1>
                <p class="wow fadeInDown" data-wow-delay="0.2s">Digital streaming service</p>
                <img class="wow fadeInUp" data-wow-delay="0.2s" data-src="https://s3-us-west-2.amazonaws.com/bradengelhardt/assets/xfaire.jpg">
            </div>
            <div class="slide">
                <h1>MACHETE ENERGY</h1>
                <p>Energy drink website</p>
                <img data-src="https://s3-us-west-2.amazonaws.com/bradengelhardt/assets/machete.jpg">
            </div>
            <div class="slide">
                <h1>PORTFOLIO</h1>
                <p>Mockup of a personal portfolio I was working on for a friend.</p>
                <img data-src="https://s3-us-west-2.amazonaws.com/bradengelhardt/assets/cascioportfolio.jpg">
            </div>
            <div class="slide">
                <h1>THATONEBLOG</h1>
                <p>Minimalist blogging platform.</p>
                <img data-src="https://s3-us-west-2.amazonaws.com/bradengelhardt/assets/blog.jpg">
            </div>
            <div class="slide">
                <h1>PIXBORED</h1>
                <p>Website for sharing images and gifs.</p>
                <img data-src="https://s3-us-west-2.amazonaws.com/bradengelhardt/assets/pixbored.jpg">
            </div>
            <div class="slide">
                <h1>PERSONAL WEBSITE</h1>
                <p>Responsive vertical/horizontal header website theme.</p>
                <img data-src="https://s3-us-west-2.amazonaws.com/bradengelhardt/assets/personalsite.jpg">
            </div>
        </div>
    </div>
    <!-- end section -->

    <!-- begin section -->

    <div class="section" data-anchor="contact">
        <div class="content wow fadeInDown" data-wow-delay="0.2s">
            <h1>CONTACT ME</h1>
            <p>Whether you're interested in working with me or just want to say hello, I'd love to hear from you!</p>
            <br>
            <div class="contact-form">

                <div id="form-messages"></div>
                <form id="ajax-contact" method="post" role="form" action="contact.php" data-toggle="validator">
                    <div class="form-group has-feedback wow fadeInLeft" data-wow-delay="0.6s">
                        <input type="text" class="form-control" id="name" name="name" placeholder="NAME" data-error="Field can't be blank!" required>
                        <span class="glyphicon form-control-feedback" aria-hidden="true"></span>
                        <div class="help-block with-errors"></div>
                    </div>

                    <div class="form-group has-feedback wow fadeInRight" data-wow-delay="0.8s">
                        <input type="email" class="form-control" id="email" name="email" placeholder="EMAIL" data-error="Field can't be blank!" required>
                        <span class="glyphicon form-control-feedback" aria-hidden="true"></span>
                        <div class="help-block with-errors"></div>
                    </div>

                    <div class="form-group has-feedback wow fadeInLeft" data-wow-delay="1s">
                        <textarea data-minlength="10" class="form-control" id="message" name="message" placeholder="MESSAGE" data-error="Minimum of 10 characters" required></textarea>
                        <span class="glyphicon form-control-feedback" aria-hidden="true"></span>
                        <div class="help-block with-errors"></div>
                    </div>

                    <div class="hidden">
                        <input type="text" class="form-control" id="human" name="human" placeholder="">
                    </div>
                    <div class="wow fadeInUp" data-wow-delay="1s">
                        <button type="submit" id="submit" name="submit" class="btn btn-lg">SEND MESSAGE</button>
                    </div>
                </form>
                <br>
            </div>
        </div>
    </div>
    <!-- end section -->

    <!-- begin section -->

    <div class="section fp-auto-height">
        <div class="footer">
            <p>CONNECT WITH ME</p>
            <div class="social-links">
                <span><a href="https://www.linkedin.com/in/bradleyengelhardt" target="_blank"><i class="fa fa-linkedin fa-2x"></i></a></span>
                <span><a target="_blank" href="https://twitter.com/bradengelhardt" target="_blank"><i class="fa fa-twitter fa-2x"></i></a></span>
                <span><a href="https://github.com/SquishyAndroid" target="_blank"><i class="fa fa-github fa-2x"></i></a></span>
                <span><a href="https://codepen.io/SquishyAndroid/pens/public/"><i class="fa fa-codepen fa-2x"></i></a></span>
            </div>
        </div>
    </div>
    <!-- end section -->

</div>
<!-- partial -->
<script src="js/scroll.js"></script>
<script src='https://code.jquery.com/jquery-2.1.1.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/js/bootstrap.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.7.4/jquery.fullPage.min.js'></script><script  src="./script.js"></script>



</body> </html>