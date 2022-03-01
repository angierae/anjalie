const hamburger = document.getElementById("burger");
const aside = document.getElementById("aside");
const cross = document.getElementById("cross");
const arrowUp = document.querySelector(".arrow-up")
const arrowDown = document.querySelector(".arrow-down")
const spec = document.querySelector(".spec")

hamburger.addEventListener("click",()=>{
    aside.classList.replace("aside-left","aside-right")
})
cross.addEventListener("click",()=>{
    aside.classList.replace("aside-right","aside-left")
})



// // // //
const UPTRI = document.querySelector(".arrow-up");
const DOWNTRI = document.querySelector(".arrow-down")
const longNouns = ['student of universe.','product designer,', 'metaverse enthusiast,',];
const longWord = document.querySelector('span.longword')

let startSlots = (array, word) => {
    //starting condition 
    const mid = Math.floor(array.length / 2) 
    const startWord = document.createTextNode(array[mid])
    word.appendChild(startWord) //adding initial word to the span 
    // console.log(word.innerHTML) //checking to make sure we good
}
startSlots(longNouns, longWord)

UPTRI.addEventListener("click",()=>{
    animateUp(longWord, longNouns);
})
DOWNTRI.addEventListener("click",()=>{
    animateDown(longWord,longNouns);
})

const animateUp = (word, wordList) => {
    word.style.transform = 'translate(0, -100%)'

    setTimeout( ()=>{ advanceSlot(wordList, word)}, 100)
    setTimeout( () => {word.style.opacity = '0'}, 200)
    setTimeout( () => {word.style.transform = 'translate(0, 100%)'}, 300)
    setTimeout( () => {word.style.opacity = '1'}, 500)
    setTimeout( () => {word.style.transform = 'translate(0, 0)'}, 700)
}
const advanceSlot = (wordList, wordSpan) => {
    //console.log("slot advances")
    //get index of currently displayed word 
    let curWord = wordSpan.textContent; 
    let curPosition = wordList.indexOf(curWord)
    let nextPosition = curPosition + 1
    if (nextPosition >= wordList.length){
        nextPosition = 0
    }
    //console.log(curPosition, nextPosition)

    //create new text node
    word = document.createTextNode(wordList[nextPosition])

    //replace existing text node with new text node 
    wordSpan.replaceChild(word, wordSpan.childNodes[0])

}
const animateDown = (word, wordList) =>{

    word.style.transform = 'translate(0, 100%)'
    setTimeout(()=>{ decreaseSlot(wordList, word)}, 100)
    setTimeout( () => {word.style.opacity = '0'}, 200)
    setTimeout( () => {word.style.transform = 'translate(0, -100%)'}, 300)
    setTimeout( () => {word.style.opacity = '1'}, 500)
    setTimeout( () => {word.style.transform = 'translate(0, 0)'}, 700)
}
const decreaseSlot = (wordList, wordSpan) => {
    let curWord = wordSpan.textContent; 
    let curPosition = wordList.indexOf(curWord)
    let nextPosition = curPosition - 1
    if (nextPosition < 0){
        nextPosition = wordList.length - 1 
    }
        //create new text node
        word = document.createTextNode(wordList[nextPosition])

        //replace existing text node with new text node 
        wordSpan.replaceChild(word, wordSpan.childNodes[0])
    
}