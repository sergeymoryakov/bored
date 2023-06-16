const CHECKED_CLASSNAME = "checked";
const CHECKED_BTN_VALUE = "Try Again";
const CHECKED_EMOTION = "Wow, not bored anymore 🔥";

const boredContainerNode = document.getElementById("boredContainer");
const emotionNode = document.getElementById("emotion");
const suggestNode = document.getElementById("suggest");
const findOutBtnNode = document.getElementById("findOutBtn");

findOutBtnNode.addEventListener("click", renderSuggest);

function renderSuggest() {
    getResponse()
        .then((activity) => {
            suggestNode.innerText = activity;
            emotionNode.innerText = CHECKED_EMOTION;
            findOutBtnNode.innerText = CHECKED_BTN_VALUE;
            boredContainerNode.classList.toggle(CHECKED_CLASSNAME);
        })
        .catch((error) => {
            console.log("Error:", error);
        });
}

function getResponse() {
    return fetch("http://www.boredapi.com/api/activity/")
        .then((response) => response.json())
        .then((res) => res.activity);
}
