// Required by Webpack - do not touch
require.context('../fonts/', true, /\.(eot|ttf|woff|woff2)$/i)
require.context('../images/', true, /\.(png|jpg|jpeg|gif|svg)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

//TODO - Your ES6 JavaScript code (if any) goes here
import 'bootstrap'


function render() {
    let cvs = document.querySelector('canvas')

    if (cvs.getContext) {
        let ctx = cvs.getContext('2d')

        // Clearing face
        // ctx.clearRect()

        // Head
        // ctx.fillStyle = document.getElementById('c').value
        ctx.fillStyle = "yellow"
        ctx.beginPath()
        ctx.arc(400, 200, 75, 0, 2 * Math.PI)
        ctx.fill()

        // Smile
        ctx.moveTo(425, 200)
        ctx.arc(200, 200, 15, 0, Math.PI, false)





    }
}