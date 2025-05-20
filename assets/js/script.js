const inputSenha = document.querySelector("#input-senha");
const olhoSenha = document.querySelector("#olho-senha");
let senhaVisivel = false;

olhoSenha.addEventListener("click", mudarTipoSenha);

function mudarTipoSenha() {
  senhaVisivel = !senhaVisivel;
  if (senhaVisivel === true) {
    inputSenha.setAttribute("type", "text");
    olhoSenha.textContent = "visibility_off";
  } else {
    inputSenha.setAttribute("type", "password");
    olhoSenha.textContent = "visibility";
  }
}
