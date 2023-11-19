// async = makes a function return a Promise
// await = makes a function wait for a Promise

//alternative to promises producing and consuming code

async function loadfile(){

    const promise = new Promise((resolve, reject) => {
        let fileloaded = true;

        if(fileloaded){
            resolve ("File loaded")
        }
        else{
            reject ("File not loaded")
        }
    })

    try{
        document.getElementById("myh1").innerHTML = await promise
    }
    catch(error){
        document.getElementById("myh1").innerHTML = error
    }
}
loadfile()