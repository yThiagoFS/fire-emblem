function rotateYDIV()
{
 y=document.getElementById("conteudo1")
clearInterval(rotYINT)
rotYINT=setInterval("startYRotate()",10)
}