
// let textArea = document.getElementById ("contentBox");
// let resultArea = document.getElementById('resultArea');
// let tweetList = 0;
// let id = 0;

// let countLetter = () => {
//    let remain = 140 - textArea.value.length;

//    if (remain < 0) {
//     document.getElementById('charCountArea').innerHTML = `${remain}chars`.fontcolor('red');
//    } else {
//     document.getElementById('charCountArea').innerHTML = `${remain}chars`;
//    }
// }

// let showTweet = () => {
//     document.getElementById('resultArea').innerHTML = `${textArea.value}`;
// }


// textArea.addEventListener('input',countLetter);
// tweetButton.addEventListener('click',showTweet)


// New code
let textArea =  document.getElementById('contentsBox');
let tweetList = []
let id =0;  // must define the id outside.

// count the letter at TextArea
let countLetter = () =>{
   let remain = 140 - textArea.value.length;
    
   if(remain<0){
    document.getElementById('charCountArea').innerHTML = `${remain}chars`.fontcolor("red");
   }else {
    document.getElementById('charCountArea').innerHTML = `${remain}chars`;
   }
   
}

// add event on textarea, should come after define the countLetter function. 
textArea.addEventListener('input',countLetter);


// add the Tweet,  (Khoa way)
 let addTweet=() => {
    let tweet = {
        id:id, // unique value 
        contents: textArea.value 
    }
    tweetList.push(tweet);
    render(tweetList);
    id++;
    textArea.value =""
    countLetter()
}


// retweet function (Khoa way)
let retweet =(originid) =>{

    // 1. find the tweet that you want to retweet
    let originTweet = tweetList.find((item)=> item.id == originid)

    // 2. make the retweet object and it will have same contents with original tweet and parents id 
    let retweetObject = {
        id:id,
        contents: originTweet.contents,
        originTweetID:originid  // referencing
    }

    //3. push retweet object into tweetList
    tweetList.push(retweetObject);

    //5.after everything done, make sure increase the id 
    id++
    
    //6. render tweetList 
    render(tweetList)
    
}


//delete TWeet 
let deleteTweet = (deleteId) =>{
    // 1. remove original tweeter id and retweet id 
    tweetList = tweetList.filter(e=> e.id !== deleteId && e.originTweetID !== deleteId )
    
    // 2. show again. 
    render(tweetList);

}



// Show on screen 
let render= (array) =>{
    let htmlForTweet = array.map((item)=>`<li>${item.contents} <button class="btn btn-primary">like</button><button onclick="retweet(${item.id})">retweet</button><button onclick="deleteTweet(${item.id})">delete</button></li>`).join('')
    document.getElementById('tweetArea').innerHTML= htmlForTweet

}


