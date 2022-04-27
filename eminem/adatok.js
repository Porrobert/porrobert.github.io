fetch("https://raw.githubusercontent.com/abstractlyZach/write_you_a_love_song/master/data/songs/artists/Eminem.json")
.then(x => x.json())
.then(y => megjelenit(y));

function megjelenit(adatok){
    console.log(adatok)
    tomb=adatok;


    var sz='';

    for (var elem of adatok)
    {
        sz+='<div class="col-sm-3">'
        sz+='<p>' + elem.title + '</p>'
        sz+='</div>'
    }
    document.getElementById("stilus").innerHTML=sz;
}