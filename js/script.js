class Advice {
    constructor(id, advice) {
        this.id = id;
        this.advice = advice;
    }

    getId() {
        return this.id;
    }
    getAdvice() {
        return this.advice;
    }
};


async function fetchAdvice() {
    let advice = new Advice();
    let response = await fetch('https://api.adviceslip.com/advice');

    console.log(response.status); // 200
    // console.log(response.statusText); // OK

    if (response.status === 200) {

        let data = await response.text();

        // handle data

        return advice = new Advice(JSON.parse(data).slip.id, JSON.parse(data).slip.advice);
    }
}
async function onLoad() {
    let advice = await fetchAdvice();
    console.log(advice);
    document.getElementById("advice").innerHTML = advice.advice;
    document.getElementById("id-advice").innerHTML = advice.id;

}
function ramdomAdvice() {
    onLoad();
}
window.onload = () => onLoad();