const boredContainerNode = document.getElementById("boredContainer");
const emotionNode = document.getElementById("emotion");
const suggestNode = document.getElementById("suggest");
const findOutBtnNode = document.getElementById("findOutBtn");

findOutBtnNode.addEventListener("click", renderSuggest);

function renderSuggest() {
    suggestNode.innerText = getResponse();
}

function getResponse() {
    fetch("http://www.boredapi.com/api/activity/")
        .then((response) => response.json())
        .then((res) => res.activity);
    return res.activity;
}
