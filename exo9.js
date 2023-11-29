function ModifText(letext)
{
    alert("je vais modifier la div");
    document.getElementById("MaDivNum1").innerHTML = letext;
    var divs = document.getElementsByName("lesdivs");
    alert("je vais modifier les divs");
    for (var i = 0; i < divs.length; i++)
    {
        divs[i].innerHTML = letext
    }
}
ModifText("Hello");