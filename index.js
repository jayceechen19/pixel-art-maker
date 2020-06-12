document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('canvas')

    for (var i=0; i<30**2; i++){
        var pixel = document.createElement('div')
        pixel.className = 'pixel'
        canvas.appendChild(pixel)
    }
    var palette= document.createElement('div')
    palette.className = "palette"
    document.body.appendChild(palette)
    
    var colors = ['#ff6699','#ccff66','#ffff66', '#ccffff', '#9966ff', '#ff6666']
    var assignedColor = ''
    colors.forEach(color =>{
        var paint = document.createElement('div')
        paint.className = "paint"
        paint.style.backgroundColor = color

        paint.addEventListener('click', () =>{
            assignedColor = paint.style.backgroundColor
        })

        palette.appendChild(paint)
    })

    document.querySelectorAll('.pixel').forEach(pixel => {
        pixel.addEventListener('click', () =>{
            pixel.style.backgroundColor = assignedColor
        })
    })

        
})