function imageExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status != 404;
}

for(var i = 1; i < 500; i++){
    if(imageExists("mystith.github.io/backgrounds/" + i + ".png")){
        document.getElementById('bgtablebody').innerHTML += "<hr width='100%'><p class='robotosmol'>Background ID:" + i + "</p><br><img src='mystith.github.io/backgrounds/" + i + ".png' alt='bg' height='300' width='1040'><br>";
    } else {
        break;
    }
}

var str = "";
if(location.search.length > 0){
    document.getElementById("leaderboards").innerHTML += "<table><tbody id='leaderboardsbody'></tbody></table><a class='viewmore robotosmol'>view more</div>"
    var link = location.search.split('=')[1];
    if(link.includes("&")){
        link = link.split('&')[0];
    }

    var img = document.createElement('img');
    img.src = atob(link);
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);

    for(var x = 0; x < img.width; x++){
        for(var y = 0; y < img.height; y++){
            var pixelData = canvas.getContext('2d').getImageData(x, y, 1, 1).data;
            if(pixelData[2] > 0) {
                x = img.width;
                y = img.height;
                break;
            }
            str += String.fromCharCode(pixelData[0]);
        }
    }
    str = str.split('><|><');
} else {
    document.body.innerHTML += "<p class='robotosmolish'>use the n!top command within nekozi to see global leaderboards</p>"
}

$(document).ready(function(){$( ".viewmore" ).on( "click", function() {
    
      });
    });
