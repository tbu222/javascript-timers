function countdown(num){
    let time = setInterval(function(){
    num--;
    if (num <=0){
        clearInterval(time);
        console.log('DONE!');
    }
    else {
        console.log(num);
    }},1000)
}
countdown(4);
function randomGame()
{
    let num = 0;
    let counter = 0;
    let timer = setInterval(function(){
        if (num >0.75){
            clearInterval(timer);
            console.log(`Random Number is ${num} and number of try is ${counter}`)
        }
        else {
            num = Math.random()
            counter+=1;
            console.log(`Random Number is ${num}`);
        }
     },1000)
        
}

setTimeout(function(){
    randomGame()
},5000);