<?php include "app/app.php"; $page = 1; head($page); ?>
<body> <header> <?php navbar($page); ?> </header>

<!-- begin fullpage -->
<div id="fullpage">

    <!-- begin section -->
    <div class="section  backimage" data-anchor="view">
        <div class=" aboutme">

            <div class="opaque-bg animated fadeInDown">
                <img src="https://tyrolium.fr/Contenu/Image/Vturias Site.png" alt="logovturias" width="200px" height="200px">
                <h1 style="color:white">VTURIAS<span style="color:var(--color-primary)">/</span>AGENCE</h1>
                <p><span id="holder"></span><span class="blinking-cursor">|</span></p>
            </div>
            <i id="moveDown" class="fa fa-chevron-down fa-3x bounce"></i>

        </div>
    </div>
    <!-- end section -->

    <!-- begin section -->
    <div class="section" data-anchor="about">
        <div class="content">
            <h1 class="wow fadeInDown" data-wow-delay="0.2s">À PROPOS DE NOUS </h1>
            <p class="wow fadeInDown" data-wow-delay="0.2s">


                Bienvenue chez Vturias, votre passerelle vers l'univers captivant des VTubers francophones ! Nous sommes une agence dédiée à la création, à la promotion et à l'essor des talents virtuels dans le monde.nous croyons que chacun a une histoire unique à partager, et notre mission est de donner vie à ces récits. Que vous soyez un créateur de contenu émergent ou un VTuber chevronné, notre équipe dévouée vous accompagne à chaque étape de votre parcours virtuel.


            </p>

            <!--<br><br>
            <div style="display: flex">
                <div style="margin: 20px">
                    <h2 class="wow fadeInDown" data-wow-delay="0.2s">DES VALEURS</h2>
                    <p class="wow fadeInDown" data-wow-delay="0.2s">Hi, I'm Brad Engelhardt! I'm a Silicon Valley based Web Designer & Front-end Developer focused on creating clean, responsive web designs!</p>

                </div>
                <div style="margin: 20px">

                    <h2 class="wow fadeInDown" data-wow-delay="0.2s">PROFESSIONNALISME</h2>
                    <p class="wow fadeInDown" data-wow-delay="0.2s">Hi, I'm Brad Engelhardt! I'm a Silicon Valley based Web Designer & Front-end Developer focused on creating clean, responsive web designs!</p>

                </div>
            </div>-->
        </div>
    </div>
    <!-- end section -->

    <!-- begin section -->
    <div class="section" data-anchor="vtuber">
        <div class="content-slide">
            <div class="slide" onclick="window.location.href = 'https://www.twitch.tv/auroretvv';">
                <h1 style="color: #ca4949!important;" class="wow fadeInDown" data-wow-delay="0.2s">AuroreTVv</h1>
                <p class="wow fadeInDown" data-wow-delay="0.2s">twitch.tv/auroretvv</p>
                <img class="wow fadeInUp" data-wow-delay="0.2s" data-src="assets/vtuber/auroretvv.png">
            </div>
            <!--<div class="slide" onclick="window.location.href = 'https://www.twitch.tv/auroretvv';">
                <h1 style="color: #ca4949 !important;">AuroreTVv</h1>
                <p>twitch.tv/auroretvv</p>
                <img data-src="assets/vtuber/auroretvv.png">
            </div>-->
            <div class="slide" onclick="window.location.href = 'https://www.twitch.tv/manosator';">
                <h1 style="color: black!important;">Manosator</h1>
                <p>twitch.tv/manosator</p>
                <img data-src="assets/vtuber/mano.png">
            </div>
            <div class="slide" onclick="window.location.href = 'https://www.twitch.tv/leareinepoulpe';">
                <h1 style="color: #7e5bf4 !important;">Léa Reine Poulpe</h1>
                <p>twitch.tv/leareinepoulpe</p>
                <img data-src="assets/vtuber/léa.png">
            </div>
            <div class="slide" onclick="window.location.href = 'https://www.twitch.tv/jiyuvt';">
                <h1 style="color: #605d5d !important;">JiyuVT</h1>
                <p>twitch.tv/jiyuvt</p>
                <img data-src="assets/vtuber/jiyu.png">
            </div>
            <div class="slide" onclick="window.location.href = 'https://www.twitch.tv/nonijiangshi';">
                <h1 style="color: #7a1cb7 !important;">NoniJiangshi</h1>
                <p>twitch.tv/nonijiangshi</p>
                <img data-src="assets/vtuber/noni.png">
            </div>
            <div class="slide" onclick="window.location.href = 'https://www.twitch.tv/doublet_creator';">
                <h1 style="color: rgb(255, 60, 0)!important;">DoubleT</h1>
                <p>twitch.tv/doublet_creator</p>
                <img data-src="assets/vtuber/doublet.png">
            </div>
        </div>
    </div>
    <!-- end section -->

    <!-- begin section -->
    <div class="section" data-anchor="create">
        <div class="content" id="create">
            <h1 class="wow fadeInDown" data-wow-delay="0.2s">Création de Vturias </h1>
            <p class="wow fadeInDown" data-wow-delay="0.2s">

                Vturias est le résultat d'un partenariat entre deux entreprises, Tyrolium et L'Aurora. Ces deux entreprises s'allient pour vous offrir un moyen d'être épaulé et guidé tout au long de votre parcours en tant que créateur de contenu virtuel.


            </p>

            <div class="row">

                <div class="col">
                    <a target="_bank" href="https://tyrolium.fr" title="Tyrolium">
                        <img src="https://tyrolium.fr/Contenu/Image/Tyrolium.png" alt="tyrolium">
                    </a>
                </div>

                <div class="col">
                    <a target="_bank" href="https://www.aurorastore.fr" title="aurora">
                        <img src="assets/aurora.png" alt="aurora">
                    </a>
                </div>

            </div>

        </div>
    </div>
    <!-- end section -->

    <!-- begin section -->
    <div class="section" data-anchor="partenaire">

        <div id="partenaire" class="content">


            <h1 class="wow fadeInDown" data-wow-delay="0.2s">Nos Partenaire </h1>
            <p class="wow fadeInDown" data-wow-delay="0.2s">
                Voici les entreprises, organisations et collectivités qui nous font confiance, et qu'on travaille activement à l'amélioration et la création de projets.
            </p>


            <div class="part-desktop">
                <div class="row">

                    <div class="col">
                        <a target="_bank" href="https://www.lafrenchtech-onelse.com/" title="French Tech One Lyon St-Étienne">
                            <img src="https://tyrolium.fr/assets/part/frenchtechlyon.png" alt="frenchtech">
                        </a>
                    </div>

                    <div class="col">
                        <a target="_bank" href="https://www.auvergnerhonealpes.fr/" title="La Region Auvergne-Rhône-Alpes">
                            <img src="https://tyrolium.fr/assets/part/auvergne-Rhone-Alphes.png" alt="Auvergne-Rhône-Alphes">
                        </a>
                    </div>

                    <div class="col">
                        <a target="_bank" href="https://www.grandest.fr/" title="La Region Grand Est">
                            <img src="https://tyrolium.fr/assets/part/grandest.png" alt="Grand Est">
                        </a>
                    </div>

                    <div class="col">
                        <a target="_bank" href="https://www.linkedin.com/company/g%C3%A9n%C3%A9ration-ium/" title="Génératium IUM">
                            <img src="https://tyrolium.fr/assets/part/Generatium-ium.png" alt="generatium-ium">
                        </a>
                    </div>

                </div>
            </div>
        </div>

    </div>
    <!-- end section -->

    <!-- begin section -->
    <div class="section" data-anchor="contact">
        <div class="content wow fadeInDown" data-wow-delay="0.2s">
            <h1>CONTACTEZ-NOUS</h1>
            <p>
                Que ce soit pour envisager une collaboration avec notre agence ou simplement pour nous faire part de vos projets, nous sommes impatients de recevoir de vos nouvelles.</p>
            <br>
            <div class="contact-form">

<!--                <div id="form-messages"></div>-->
                <form method="post" role="form" action="https://formspree.io/f/movaknve">
                    <div class="form-group has-feedback wow fadeInUp" data-wow-delay="0.6s">
                        <input type="text" class="form-control" id="name" name="name" placeholder="NOM" data-error="Field can't be blank!" required>
                        <span class="glyphicon form-control-feedback" aria-hidden="true"></span>
                        <div class="help-block with-errors"></div>
                    </div>

                    <div class="form-group has-feedback wow fadeInDown" data-wow-delay="0.8s">
                        <input type="email" class="form-control" id="email" name="email" placeholder="EMAIL" data-error="Field can't be blank!" required>
                        <span class="glyphicon form-control-feedback" aria-hidden="true"></span>
                        <div class="help-block with-errors"></div>
                    </div>

                    <div class="form-group has-feedback wow fadeInUp" data-wow-delay="1s">
                        <textarea data-minlength="10" class="form-control" id="message" name="content" placeholder="MESSAGE" data-error="Minimum of 10 characters" required></textarea>
                        <span class="glyphicon form-control-feedback" aria-hidden="true"></span>
                        <div class="help-block with-errors"></div>
                    </div>

                  <!--  <div class="hidden">
                        <input type="hidden" class="form-control" id="human" name="human" placeholder="">
                    </div>-->
                    <div class="wow fadeInUp" data-wow-delay="1s">
                        <button type="submit" id="submit" name="submit" class="btn btn-lg">ENVOYÉ VOTRE MESSAGE</button>
                    </div>
                </form>
                <br>
            </div>
        </div>
    </div>
    <!-- end section -->

    <!-- begin section -->
    <div class="section fp-auto-height"  data-anchor="end">

        <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
            Copyright © 2017-2024 All Rights Reserved by <a class="text-reset fw-bold" href="https://tyrolium.fr/">Tyrolium</a>.

            <div id="reseau-footer">
                <div class="nav-item active">
                    <a class="nav-link" href="https://twitter.com/Vturias_Project"><i class="fa-brands fa-x-twitter"></i></a>
                </div>
                <div class="nav-item active">
                    <a class="nav-link" href="https://discord.gg/nUc8kED8st"><i class="fa-brands fa-discord"></i></a>
                </div>
                <div class="nav-item active">
                    <a class="nav-link" href="https://www.instagram.com/vturias_project/"><i class="fa-brands fa-instagram"></i></a>
                </div>
                <div class="nav-item active">
                    <a class="nav-link" href="https://www.youtube.com/@VturiasProject"><i class="fa-brands fa-youtube"></i></a>
                </div>
                <div class="nav-item active">
                    <a class="nav-link" href="https://www.tiktok.com/@vturias_project"><i class="fa-brands fa-tiktok"></i></a>
                </div>
                <div class="nav-item active">
                    <a class="nav-link" href="https://www.linkedin.com/company/vturias/"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>

    </div>
    <!-- end section -->

</div>
<!-- end fullpage -->


<!-- JavaScript -->
<script src='https://code.jquery.com/jquery-2.1.1.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/js/bootstrap.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.7.4/jquery.fullPage.min.js'></script>
<script src="js/scroll.js"></script>

<!-- NOTIF -->
<script src='https://unpkg.com/izitoast/dist/js/iziToast.min.js'></script>
<script  src="js/notif.js"></script>


<?php if (!empty($_GET['err'])) { ?>

        <script>
            if(Text != 1){
                iziToast.error({
                    title: 'Erreur',
                    position: 'bottomRight',
                    message: 'Une erreur est survenue | Code : <?php echo $_GET['err']; ?>'
                });
            }
        </script>

<?php } if (!empty($_GET['true'])) {?>
    <script>
        if(Text != 1){
            iziToast.success({
                title: 'OK',
                position: 'bottomRight',
                message: 'Votre demande a bien été envoyé !'
            });
        }
    </script>
<?php } ?>


</body> </html>