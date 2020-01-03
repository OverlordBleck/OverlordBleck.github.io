function calcModifier(element) {
    var str, mod, text;
    str = document.getElementById(element).value;
    text = mod = Math.floor((str/2)-5);

    if (mod >= 0) {
        text = "+" + text
    }

    document.getElementById(element + "mod").innerHTML = text;
}