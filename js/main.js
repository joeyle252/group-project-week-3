
let textArea = document.getElementById ("contentBox");
let resultArea = document.getElementById('resultArea');


let countLetter = () => {
   let remain = 140 - textArea.value.length;

   if (remain < 0) {
    document.getElementById('charCountArea').innerHTML = `${remain}chars`.fontcolor('red');
   } else {
    document.getElementById('charCountArea').innerHTML = `${remain}chars`;
   }
}

let showTweet = () => {
    document.getElementById('resultArea').innerHTML = `${textArea.value}`;
}

textArea.addEventListener('input',countLetter);
tweetButton.addEventListener('click',showTweet)



