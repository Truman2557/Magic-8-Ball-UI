document.getElementById('askButton').addEventListener("click", function(){
    let answer = '';
    let randomIndex = Math.floor(Math.random() * 5);
    if(randomIndex === 0){
        let answer = "Yes";
    } else if(randomIndex === 1){
        let answer = "No";
    } else if(randomIndex === 2){
        let answer = "Ask Again Later";
    } else if(randomIndex === 3){
        let answer = "Definately";
    } else if(randomIndex === 4){
        let answer = "figure out code later"
    }
});