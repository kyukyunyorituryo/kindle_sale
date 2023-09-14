var inputfile = document.getElementById("csvfile");
zousho={}
inputfile.addEventListener('change', (event) => {
reader = new FileReader();

csvfile=inputfile.files[0]
reader.readAsText(csvfile)
reader.onload = function (e) {
csv()
.fromString(reader.result)
.then(function(result){
zousho=result
hikaku()
})
}
})
function hikaku(){
itemnum=[]
for (var j = 0; j < items.length; j++) {
for (var i = 0; i < zousho.length; i++) {
if(items[j].Asin==zousho[i].ASIN){itemnum=itemnum.concat(j)}
}
}
console.log(itemnum)
itemnum.sort(function(a,b){
        if( a > b ) return -1;
        if( a < b ) return 1;
        return 0;
});
for (var i = 0; i < itemnum.length; i++) {
console.log(items[itemnum[i]])
items.splice(itemnum[i],1)
}
nav=[]
$('#frame').children().remove();
templeterender(items)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}
