// The Date object is used to work with dates & times

//let date = new Date();
//let date = new Date(0);
//let date = new Date(2023, 0, 1);
//let date = new Date("January 2, 2023 00:00:00");

//date = date.toLocaleDateString();

const mylabel = document.getElementById("mylabel")

update()
setInterval(update, 1000)


function update(){

    let date = new Date();
    mylabel.innerHTML = formattime(date);

    function formattime(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        //let amorpm = hours >= 12 ? "pm" : "am";

        //hours = (hours % 12) || 12;

        hours = formatzeros(hours)
        minutes = formatzeros(minutes)
        seconds = formatzeros(seconds)

        return `${hours}:${minutes}:${seconds} `//${amorpm}
    }
    function formatzeros(time){
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }
}
