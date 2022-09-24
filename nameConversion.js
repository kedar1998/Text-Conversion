// const text = document.getElementById("text");

const btn = document.querySelector("#convert-btn");

btn.addEventListener('click', function(e){
    e.preventDefault();
    const text = document.getElementById("text").value;
    
    let arr = text.split(" ");

    // CAMEL CASE
    convertCamelCase(arr);

    // Pascal Case
    convertPascalCase(arr);

    // Snake Case
    convertSnakeCase(arr);
    
    // Screaming Snake Case
    convertScreamingSnakeCase(arr);

    // Kebab Case
    convertKababCase(arr);

    // Screaming Kebab Case
    convertScreamingKababCase(arr);
});



// Camel Case
function convertCamelCase(arr){
    let cameltext = "";
    for(let i=0;i<arr.length;i++){
        arr[i] = arr[i].toLowerCase()
        if(i>=1){
            let remainingtext = arr[i].slice(1);
            let firstletter = arr[i][0].toUpperCase();
            let fullletter = firstletter + remainingtext;
            cameltext = cameltext + fullletter;
        }
        else{
            cameltext = cameltext + arr[i];
        }
    }

    document.querySelector("#camel-case").textContent = cameltext;
}



// Pascal Case
function convertPascalCase(arr){
    let pascaltext = "";
    for(let i=0;i<arr.length;i++){
        arr[i] = arr[i].toLowerCase()
        let remainingtext = arr[i].slice(1);
        let firstletter = arr[i][0].toUpperCase();
        let fullletter = firstletter + remainingtext;
        pascaltext = pascaltext + fullletter;

    }

    document.querySelector("#pascal-case").textContent = pascaltext;
}



// Snake Case
function convertSnakeCase(arr){
    let snaketext = "";
    for(let i=0;i<arr.length;i++){
        arr[i] = arr[i].toLowerCase();
        if(i == 0){
            snaketext = snaketext + arr[i];
        }
        else{
            snaketext = snaketext + "_" + arr[i];
        }
    }

    document.querySelector("#snake-case").textContent = snaketext;
}



// Screaming Snake Case
function convertScreamingSnakeCase(arr){
    let screamingsnaketext = "";
    for(let i=0;i<arr.length;i++){
        arr[i] = arr[i].toUpperCase();
        if(i == 0){
            screamingsnaketext = screamingsnaketext + arr[i];
        }
        else{
            screamingsnaketext = screamingsnaketext + "_" + arr[i];
        }
    }

    document.querySelector("#screaming-snake-case").textContent = screamingsnaketext;
}



// Kebab Case
function convertKababCase(arr){
    let kababtext = "";
    for(let i=0;i<arr.length;i++){
        arr[i] = arr[i].toLowerCase();
        if(i == 0){
            kababtext = kababtext + arr[i];
        }
        else{
            kababtext = kababtext + "-" + arr[i];
        }
    }

    document.querySelector("#kebab-case").textContent = kababtext;
}



// Screaming Kebab Case
function convertScreamingKababCase(arr){
    let screamingkababtext = "";
    for(let i=0;i<arr.length;i++){
        arr[i] = arr[i].toUpperCase();
        if(i == 0){
            screamingkababtext = screamingkababtext + arr[i];
        }
        else{
            screamingkababtext = screamingkababtext + "-" + arr[i];
        }
    }

    document.querySelector("#screaming-kebab-case").textContent = screamingkababtext;
}