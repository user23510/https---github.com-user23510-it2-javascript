let canvas = document.getElementById("mycanvas")
let context = canvas.getContext("2d")

//draw lines

/*
context.fillStyle = "orange"
context.strokeStyle = "purple"
context.lineWidth = 4
context.beginPath()
context.moveTo(0, 0)
context.lineTo(485, 500)
context.lineTo(498, 1000)
context.lineTo(502, 1000)
context.lineTo(515, 500)
context.lineTo(1000, 0)
context.stroke()
context.fill()
*/
context.fillStyle = "green"
context.strokeRect(200,200, 250, 250)
context.fillRect(500, 400, 250, 250)

context.fillStyle = "red"
context.beginPath()
context.arc(500,500, 100, 0, 2 * Math.PI)
context.stroke()
context.fill()


context.font = "50px MV Boli"
context.fillStyle = "black"
context.textAlign = "center"
context.fillText("You Win", canvas.width / 2, canvas.height / 2)
