// document.getElementById('btn-dice').addEventListener('click', () =>{
//     getAdvice()
// })

// async function adviceGenerator(){
//     const url = "https://api.adviceslip.com/advice"
//     const response = await fetch(url)
//     return await response.json()
// }

// async function adviceGenarated(slip_id){
//     const url = `https://api.adviceslip.com/advice/${slip_id}`
//     const response = await fetch(url)
//     return await response.json()
// }

// async function getAdvice(){
//     const advicePool = await adviceGenerator()
//     const advice = await adviceGenarated(advicePool.slip.id)
//     document.querySelector('.advice-id').innerHTML = advice.slip.id
//     document.querySelector('.advice-description').innerHTML = advice.slip.advice
// }

// getAdvice()

const adviceUpdateBtn = document.querySelector('.advice-update')
const adviceId = document.querySelector('.advice-id')
const adviceDescription = document.querySelector('.advice-description')

async function getAdvice(){
    const response = await fetch('https://api.adviceslip.com/advice')
    const adviceJson = await response.json();
    const adviceNumber = `Advice #${adviceJson.slip.id}`;
    const adviceText = `"${adviceJson.slip.advice}"`;

    adviceId.innerHTML = adviceNumber 
    adviceDescription.innerHTML = adviceText 
}

adviceUpdateBtn.addEventListener('click', getAdvice)

getAdvice();