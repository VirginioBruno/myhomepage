function fadeOut(element) {
    var initialOpacity = 1;  // initial opacity
    var timer = setInterval(function () {
        if (initialOpacity <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = initialOpacity;
        element.style.filter = 'alpha(opacity=' + initialOpacity * 100 + ")";
        initialOpacity -= initialOpacity * 0.1;
    }, 50);
}

function fadeIn(element) {
    var initialOpacity = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (initialOpacity >= 1){
            clearInterval(timer);
        }
        element.style.opacity = initialOpacity;
        element.style.filter = 'alpha(opacity=' + initialOpacity * 100 + ")";
        initialOpacity += initialOpacity * 0.1;
    }, 20);
}

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }

    rawFile.send(null);
}