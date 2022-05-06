var tomb;

fetch("https://raw.githubusercontent.com/abstractlyZach/write_you_a_love_song/master/data/songs/artists/Eminem.json")
.then(x => x.json())
.then(y => megjelenit(y));

function megjelenit(adatok){
    console.log(adatok)
    tomb=adatok;
    var sz='';
    var sorszam=0;
    for (var elem of adatok.tomb){
        sz+='<div class="col-sm-3">'
        sz+='<div class="doboz" id="'+sorszam+'" onclick="kattintas(this.id)" data-bs-toggle="modal" data-bs-target="#myModal"    >'
        sz+='<p>'+elem.title+'</p>'
        sz+='</div>'
        sz+='</div>'
        sorszam++;
    }
    document.querySelector("#nobeldiv").innerHTML=sz
