<?php

$projects = GetProjects();

?>

<div class="container">
    <section id="start" class="center column">
        <div class="detect slide-up">
            <div class="detect pop-out center column">
                <h2 class="align-center">Michel de geus</h2>
                <br>
                <div class="detect bounce center column">
                    <code class="afterColor">&ltFull stack&gt</code>
                    <code class="afterColor2">&ltSoftware Developer&gt</code>
                </div>
                <br>
                <p class="align-center">Will this be my last portfolio? Who knows?</p>
                <br>
                <div class="row">
                    <button link="https://mdegeus.github.io/" target="_blank">Portfolio 2</button>
                    <button link="https://mdegeus.github.io/new" target="_blank">Portfolio 3</button>
                    <button link="https://mdegeus.github.io/portfolio" target="_blank">Current (4)</button>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="center column">
        <h1 class="detect slide-up">Why software developer?</h1>
        <p class="detect slide-up">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint laboriosam iure aspernatur optio quia consectetur a, assumenda exercitationem praesentium vel, vero rerum obcaecati aut quo soluta error at sequi quibusdam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint laboriosam iure aspernatur optio quia consectetur a, assumenda exercitationem praesentium vel, vero rerum obcaecati aut quo soluta error at sequi quibusdam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint laboriosam iure aspernatur optio quia consectetur a, assumenda exercitationem praesentium vel, vero rerum obcaecati aut quo soluta error at sequi quibusdam.
        </p>
    </section>

    <section id="languages" class="center column">
        <h1 class="">Languages</h1>
        <div class="card-deck">
            <div class="container sequance-detect">

                <div class="card detect-child slide-in-left">
                    <h4 class="title">Html</h4>
                    <img class="card-logo resize " src="./img/logo/Default.svg" alt="logo">
                    <div class="card-content">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint laboriosam iure aspernatur optio quia consectetur a, assumenda exercitationem praesentium vel, vero rerum obcaecati aut quo soluta error at sequi quibusdam.</p>
                    </div>
                </div>

                <div class="card detect-child slide-in-left">
                    <h4 class="title">Css</h4>
                    <img class="card-logo resize " src="./img/logo/Default.svg" alt="logo">
                    <div class="card-content">
                        <p>Lorem ipsum quo soluta error at sequi quibusdam.</p>
                    </div>
                </div>

                <div class="card detect-child slide-in-left">
                    <h4 class="title">Java Script</h4>
                    <img class="card-logo resize " src="./img/logo/Default.svg" alt="logo">
                    <div class="card-content">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint laboriosam iure aspernatur optio quia consectetur a, assumenda exercitationem praesentium vel, vero rerum obcaecati aut quo soluta error at sequi quibusdam.</p>
                    </div>
                </div>

                <div class="card detect-child slide-in-left">
                    <h4 class="title">PHP</h4>
                    <img class="card-logo resize " src="./img/logo/Default.svg" alt="logo">
                    <div class="card-content">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint laboriosam iure aspernatur optio quia consectetur a, assumenda exercitationem praesentium vel, vero rerum obcaecati aut quo soluta error at sequi quibusdam.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section id="projects" class="center column">

        <h1>Projects</h1>
        <div class="card-deck">
            <div class="container sequance-detect">

                <?php foreach ($projects as $project): ?>
                    <div class="card detect-child slide-in-left">
                        <h4 class="title"><?= $project->title ?></h4>
                        <img class="card-logo resize " src="./img/logo/Default.svg" alt="logo">
                        <div class="card-content">
                            <p><?= $project->description ?></</p>
                            <p><?= $project->date ?></</p>
                            <button link="projectpage" target="_blank" createPage="p1" delay=100>Project Page</button>
                        </div>
                    </div>
                <?php endforeach; ?>


            </div>
        </div>

    </section>

    <section id="info" class="center column">
        <div class="">
            <h1>Info</h1>
            <ul class="sequance-detect list">
                <li class="detect-child pop-in">
                    Created at 07/01/2022
                </li>
                <li class="detect-child pop-in">
                    This is actually my 4th portfolio Ö, the first one i lost. unfortunately i didnt know how to use github back then and the data got corrupted.
                </li>
                <li class="detect-child pop-in">
                    No 3rd party framework's of any kind are used for this site.
                </li>
            </ul>
        </div>
    </section>

    <section id="contact" class="center column lastpage detect">
        <h1>Contact</h1>
        <div class="form detect slide-up">
            <p>Sent me an email</p>
            <input type="text">
            <input type="text">
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Sent</button>
        </div>
        <button class="toTopButton" view="start">Back to top</button>
    </section>
</div>