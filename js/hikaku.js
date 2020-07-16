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
for (var i = 0; i < itemnum.length; i++) {
items.splice(i,1)
}
}
