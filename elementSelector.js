...............................//js code

 console.log("hello")

let element=document.getElementById('myfirst')
// element=element.className
element.style.color="red"
element.style.backgroundColor="black"

element.innerText="today is thursday"
element.innerHTML='<h1> today is friday</h1>'


let sel=document.querySelector('h1')
sel.style.color="blue"

console.log(sel)



let elems=document.getElementsByClassName("container")
elems=document.getElementsByClassName('child')
console.log(elems[3])
// console.log(element)

let a=document.querySelector(".no")
console.log(a)
a.style.backgroundColor="purple"


........................................................................................................................

html:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div class="container">
        <h1 id="heading"> Welcome to Code With Harry</h1>
        <div id="myfirst" class="child red good" id="first">child 1

            <ul class="this">
                <li class="childul">this</li>
                <li class="childul">is</li>
                <li class="childul">a</li>
                <li class="childul">list </li>
                <li class="childul">of my dreams</li>
            </ul>
        </div>
        <div class="child">child 2</div>
        <div class="child red">child 3</div>
        <div class="child">child 4</div>
        <form action="none.html" method="post">
            <a href="//codewithharry.com">Go to Code With Harry</a>
            <br>
            <br>
            Search this website: <input type="text" name="Hello" id="">
            <input type="button" value="submit">
        </form>
    </div>
    <br>
    <div class="no">this is a dummy div1</div>
    <div class="no">this is a dummy div2</div>
    <div class="no">this is a dummy div3</div>
</body>
<!-- <script src="js/tut12.js"></script> -->
<!-- <script src="js/tut14.js"></script> -->
<script src="elementSelector.js"></script>
</html>
<h1></h1>
