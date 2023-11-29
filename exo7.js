
for (var i = 1; i <= N; i++)
{
    factoriel += i;
    factoriel = Addition(factoriel, i);
}

alert("Le calcul fait " + factoriel);
alert("Le calcul fait " + factoriel);

function Addition (a, b)
{
    return a + b;
}