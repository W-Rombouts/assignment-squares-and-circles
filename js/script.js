let xArray=[50,100,150,200,250,300,350,400,450,500]
let yArray=[100,200,300,400,500,600]
let ns = "http://www.w3.org/2000/svg"

let mijnsvg = document.createElementNS("http://www.w3.org/2000/svg","svg");
mijnsvg.setAttribute("id","mySvg");
mijnsvg.setAttribute("viewBox","0 0 800 800")
mijnsvg.setAttribute("width", "800px");
mijnsvg.setAttribute("height", "800px");



function addSquare(x,y,color){
    let square = document. createElementNS("http://www.w3.org/2000/svg", "rect");
    square.setAttribute("x", x-10);
    square.setAttribute("y", y-10);
    square.setAttribute("width", 20);
    square.setAttribute("height", 20);
    square.setAttribute("fill", color);
    return square;
}



function addCircle(cx,cy,color){
    let circle = document. createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", 10);
    circle.setAttribute("fill", color);
    return circle;
}

function setRgb(r=0,g=0,b=0) {
    return "rgb("+r+","+g+","+b+")"
}

let red= 255
let rgb = setRgb(r=red)

for (let i = 0; i < yArray.length; i++) {
    for (let ii = 0; ii < xArray.length; ii++) {
        if (ii==0) {
            mijnsvg.appendChild(addSquare(xArray[ii],yArray[i],rgb))
        }
        else{
            mijnsvg.appendChild(addCircle(xArray[ii],yArray[i],rgb))
        }
        
    }
    red = red - (255/yArray.length)
    rgb = setRgb(r=red)
}

document.body.appendChild(mijnsvg)