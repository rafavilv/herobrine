const messages = [
  "67 blocos... 66... 65... ele percebeu.",
  "ERRO 67: você não devia ter vindo.",
  "Cão Relha detectado. Herobrine? Logo atrás.",
  "Verity carregando... não, não carregou.",
  "Invocação concluída. (brincadeira. talvez.)"
];

const result = document.querySelector("#summon-result");
const heroResult = document.querySelector("#hero-summon-result");
const jumpscare = document.querySelector("#herobrine-jumpscare");
const closeJumpscare = document.querySelector(".jumpscare-close");
const summonButtons = document.querySelectorAll("#summon-button, #final-summon");
let messageIndex = 0;

summonButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!(result instanceof HTMLElement) || !(heroResult instanceof HTMLElement) || !(jumpscare instanceof HTMLDialogElement)) return;

    const message = messages[messageIndex];
    result.textContent = message;
    heroResult.textContent = message;
    messageIndex = (messageIndex + 1) % messages.length;
    document.body.classList.add("summoned");
    window.setTimeout(() => document.body.classList.remove("summoned"), 650);

    if (button.id === "final-summon") {
      jumpscare.showModal();
    }
  });
});

if (jumpscare instanceof HTMLDialogElement && closeJumpscare instanceof HTMLButtonElement) {
  closeJumpscare.addEventListener("click", () => jumpscare.close());
  jumpscare.addEventListener("click", (event) => {
    if (event.target === jumpscare) jumpscare.close();
  });
}
