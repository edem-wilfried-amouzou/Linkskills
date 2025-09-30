import "./style.css";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `

  <nav class="sticky top-0 z-50 bg-[#1a1433]/90 backdrop-blur-md shadow-lg">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <a href="/src/index.html" class="text-2xl font-bold tracking-wide text-purple-400 hover:text-purple-300">LinkSkills</a>
      <div class="hidden md:flex space-x-8 text-lg">
        <a href="/src/index.html" class="hover:text-purple-300">Accueil</a>
        <a href="/app/apropos.html" class="hover:text-purple-300">À propos</a>
        <a href="/app/offrir.html" class="hover:text-purple-300">Offrir de l'aide</a>
        <a href="/app/demander.html" class="hover:text-purple-300">Demander de l'aide</a>
        <a href="/app/communaute.html" class="hover:text-purple-300">Communauté</a>
      </div>
      <!-- Menu mobile -->
      <button id="menu-btn" class="md:hidden focus:outline-none text-purple-300">
        ☰
      </button>
    </div>
    <div id="menu" class=" md:hidden flex flex-col space-y-2 px-6 pb-4">
      <a href="/src/index.html" class="hover:text-purple-300">Accueil</a>
      <a href="/app/apropos.html" class="hover:text-purple-300">À propos</a>
      <a href="/app/offrir.html" class="hover:text-purple-300">Offrir de l'aide</a>
      <a href="/app/demander.html" class="hover:text-purple-300">Demander de l'aide</a>
      <a href="/app/communaute.html" class="hover:text-purple-300">Communauté</a>
    </div>
  </nav>

  <!--  Hero -->
  <header class="text-center py-20 px-6">
    <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
      Ensemble, partageons nos <span class="text-purple-400">compétences</span>
      pour construire un monde meilleur
    </h1>
    <p class="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
      SolidarityHub est une plateforme d’entraide où chacun peut <span class="text-purple-300">offrir</span> ou <span class="text-purple-300">demander</span> de l’aide, sans frontière et sans argent.
      Parce que la connaissance ne vaut que lorsqu’elle est partagée.
    </p>
    <a href="communaute.html" class="px-6 py-3 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition duration-300 text-lg font-semibold">
      Rejoindre la communauté
    </a>
  </header>

  <!-- Section Présentation -->
  <section class="max-w-6xl mx-auto py-16 px-6">
    <h2 class="text-3xl font-bold text-center mb-12">Pourquoi LinkSkills ?</h2>
    <div class="grid md:grid-cols-2 gap-10 items-center">
      <img src="/public/partage.png" alt="Entraide" class="rounded-xl shadow-lg" />
      <div class="space-y-4 text-gray-300">
        <p>
          Dans un monde rempli de connaissances, beaucoup restent inaccessibles à cause de barrières <span class="text-purple-300">sociales</span>, <span class="text-purple-300">géographiques</span> ou <span class="text-purple-300">financières</span>.
        </p>
        <p>
          SolidarityHub brise ces frontières invisibles : que tu sois étudiant, passionné ou simple curieux, tu peux apprendre, enseigner et t’entraider gratuitement.
        </p>
        <p class="font-semibold text-purple-300">
          « Partager ton savoir, c’est multiplier sa valeur. »
        </p>
      </div>
    </div>
  </section>

  <!--  Section Fonctionnalités -->
  <section class="bg-[#1a1433]/50 py-16">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-12">Fonctionnalités principales</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="p-6 bg-[#1a1a2e] rounded-xl shadow-lg text-center">
          <div class="text-5xl mb-4">🤝</div>
          <h3 class="text-xl font-bold mb-2">Offrir de l’aide</h3>
          <p class="text-gray-300">Mets à disposition tes compétences pour aider d’autres personnes.</p>
        </div>
        <div class="p-6 bg-[#1a1a2e] rounded-xl shadow-lg text-center">
          <div class="text-5xl mb-4">📚</div>
          <h3 class="text-xl font-bold mb-2">Apprendre</h3>
          <p class="text-gray-300">Découvre de nouvelles compétences grâce à des passionnés comme toi.</p>
        </div>
        <div class="p-6 bg-[#1a1a2e] rounded-xl shadow-lg text-center">
          <div class="text-5xl mb-4">🌍</div>
          <h3 class="text-xl font-bold mb-2">Communauté</h3>
          <p class="text-gray-300">Une communauté ouverte, gratuite et solidaire, sans frontières.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Témoignages -->
  <section class="max-w-6xl mx-auto py-16 px-6">
    <h2 class="text-3xl font-bold text-center mb-12">Ils en parlent</h2>
    <div class="grid md:grid-cols-3 gap-8">
      <div class="bg-[#1a1a2e] p-6 rounded-xl shadow-lg">
        <p class="italic text-gray-300">“J’ai appris les bases du HTML en 3 jours grâce à un étudiant comme moi. Merci SolidarityHub !”</p>
        <p class="mt-4 font-semibold text-purple-300">— Awa, Étudiante</p>
      </div>
      <div class="bg-[#1a1a2e] p-6 rounded-xl shadow-lg">
        <p class="italic text-gray-300">“J’adore partager mes compétences en anglais, et ça m’a permis de rencontrer plein de gens passionnés.”</p>
        <p class="mt-4 font-semibold text-purple-300">— Karim, Passionné de langues</p>
      </div>
      <div class="bg-[#1a1a2e] p-6 rounded-xl shadow-lg">
        <p class="italic text-gray-300">“Un vrai esprit de communauté, on se sent utile et soutenu. Je recommande à tout le monde.”</p>
        <p class="mt-4 font-semibold text-purple-300">— Fatou, Développeuse</p>
      </div>
    </div>
  </section>

  <!--  Call to action -->
  <section class="text-center py-20 bg-[#0f0c29]/80">
    <h2 class="text-3xl md:text-4xl font-bold mb-6">Rejoins dès aujourd’hui la communauté !</h2>
    <a href="offrir.html" class="px-8 py-4 bg-purple-500 text-lg font-semibold rounded-full hover:bg-purple-600 transition duration-300">
      Commencer maintenant
    </a>
  </section>

  <!-- Footer -->
  <footer class="bg-[#1a1433] py-6 text-center text-gray-400 text-sm">
    © 2025 LinkSkills
  </footer>

`;

setupCounter(document.querySelector("#counter"));

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
