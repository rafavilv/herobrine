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
const pokeButton = document.querySelector("#poke-herobrine");
const pokeCounter = document.querySelector("#poke-counter");
const pokeBubble = document.querySelector("#poke-bubble");
let pokeCount = 0;
let lastMessageIndex = -1;

summonButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!(result instanceof HTMLElement) || !(heroResult instanceof HTMLElement) || !(jumpscare instanceof HTMLDialogElement)) return;

    let messageIndex = Math.floor(Math.random() * messages.length);
    if (messages.length > 1 && messageIndex === lastMessageIndex) {
      messageIndex = (messageIndex + 1) % messages.length;
    }
    lastMessageIndex = messageIndex;
    const message = messages[messageIndex];
    result.textContent = message;
    heroResult.textContent = message;
    document.body.classList.add("summoned");
    window.setTimeout(() => document.body.classList.remove("summoned"), 650);

    if (button.id === "final-summon") {
      jumpscare.showModal();
    }
  });
});

if (pokeButton instanceof HTMLButtonElement && pokeCounter instanceof HTMLElement && pokeBubble instanceof HTMLElement) {
  const reactions = [
    "ei! respeita os mais velhos",
    "67? eu prefiro 68",
    "não fui eu que tirei as folhas da árvore",
    "o Cão Relha mandou você parar",
    "Verity.exe parou de funcionar",
    "voce cutucou o Herobrine. escolha questionavel"
  ];

  pokeButton.addEventListener("click", () => {
    pokeCount += 1;
    pokeCounter.textContent = `CUTUCÕES: ${pokeCount}`;
    pokeBubble.textContent = reactions[Math.floor(Math.random() * reactions.length)];
    pokeButton.classList.remove("poke-bounce");
    void pokeButton.offsetWidth;
    pokeButton.classList.add("poke-bounce");
  });

  pokeButton.addEventListener("animationend", (event) => {
    if (event.animationName === "poke-bounce") pokeButton.classList.remove("poke-bounce");
  });
}

if (jumpscare instanceof HTMLDialogElement && closeJumpscare instanceof HTMLButtonElement) {
  closeJumpscare.addEventListener("click", () => jumpscare.close());
  jumpscare.addEventListener("click", (event) => {
    if (event.target === jumpscare) jumpscare.close();
  });
}
