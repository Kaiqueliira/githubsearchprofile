const api = "https://api.github.com/users/"

const btnSearch = document.querySelector("#btnSearch");

let nome = document.querySelector('#name')
let htmlUrl = document.querySelector('#html_url')
let linkPerfil = document.querySelector('#link_perfil')
let avatarImg = document.querySelector('#avatarImg')

btnSearch.onclick = async (e) => {
    e.preventDefault()
    const containerArea = document.querySelector(".container")
    const inputValue = document.querySelector('#inputSearch');
    const data = await pegarDados(inputValue.value);
    renderItem(data);
    inputValue.value = "";
    containerArea.style = "display: flex"


}

async function pegarDados(value) {
    const response = await fetch(api + value).then(data => data.json());
    return response
}

function renderItem(data) {
    const { html_url, name, avatar_url, public_repos, created_at } = data;
    nome.innerHTML = name;
    htmlUrl.innerHTML = public_repos;
    linkPerfil.innerHTML = "Acesso ao Perfil"
    linkPerfil.setAttribute("href", html_url)
    avatarImg.setAttribute("src", avatar_url)
}
