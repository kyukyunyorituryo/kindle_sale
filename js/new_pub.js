templete='            <li class="media mb-3 alert-warning ">\n  <div class="img-container--table-cell d-flex align-items-center">\n    <img src="<%= image_url %>" class="mr-3" alt="<%= title %>"/>\n  </div>\n                <div class="media-body ml-3">\n                    <h5><%= title %></h5>\n                    <p>価格：<%= price %>円</p>\n                    <p><%= contributor %></p>\n                    <p><%= publisher %></p>\n<p>カテゴリー：<%= category %></p>\n                    <a href="<%= url %>" target="_blank"><button type="button" class="btn btn-warning">Amazonで詳細を見る</button> </a>\n                </div>\n            </li>'

nav=[];
function templeterender(items){
for (let i = 0; i < items.length; i++) {
    nav[i] = ejs.render(templete, {
        title: items[i].Title,
        image_url: items[i].ImageURL,
        price:items[i].Price,
        url: items[i].URL,
        contributor:items[i].Contributor,
        publisher:items[i].Publisher,
        category:items[i].Category
    })
    }}

function getJSON(json_data) {
	var req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if(req.readyState == 4 && req.status == 200){
			var data = JSON.parse(req.responseText);
			items = data	;
		}
	};
	req.open("GET",json_data, false);
	req.send(null);
	templeterender(items)
}

//コミックをクリックすると、コミックだけが表示される。
function comicfn(){
var comic = document.getElementById('comic');
comic.addEventListener('click', function() {
nav=[]
comics = items.filter(word => word.Category.includes('コミック'));
$('#frame').children().remove();
templeterender(comics)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}
//アダルトをクリックすると、単行本だけが表示される。
function adultfn(){
var adult = document.getElementById('adult');
adult .addEventListener('click', function() {
nav=[]
adults =  items.filter(word => word.Category.includes('アダルト'));
$('#frame').children().remove();
templeterender(adults)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}

//BL
function blfn(){
var bl = document.getElementById('bl');
bl.addEventListener('click', function() {
nav=[]
bls = items.filter(word => word.Category.includes('ボーイズラブ'));
$('#frame').children().remove();
templeterender(bls)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}


//ビジネス・経済
function businessfn(){
var business = document.getElementById('business');
business.addEventListener('click', function() {
nav=[]
businesss = items.filter(word => word.Category.includes('ビジネス・経済'));
$('#frame').children().remove();
templeterender(businesss)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}

//その他
function otherfn(){
var other = document.getElementById('other');
other.addEventListener('click', function() {
nav=[]
others = items.filter(word => word.Category.includes('その他'));
$('#frame').children().remove();
templeterender(others)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}
//趣味
function hobbyfn(){
var hobby = document.getElementById('hobby');
hobby.addEventListener('click', function() {
nav=[]
hobbys = items.filter(word => word.Category.includes('趣味'));
$('#frame').children().remove();
templeterender(hobbys)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}
//文学
function literaturefn(){
var literature = document.getElementById('literature');
literature.addEventListener('click', function() {
nav=[]
literatures = items.filter(word => word.Category.includes('文学'));
$('#frame').children().remove();
templeterender(literatures)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}
//絵本
function picturebookfn(){
var picturebook = document.getElementById('picturebook');
picturebook.addEventListener('click', function() {
nav=[]
picturebooks = items.filter(word => word.Category.includes('絵本'));
$('#frame').children().remove();
templeterender(picturebooks)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}
function searchword(){
var searchbook = document.getElementById('search');
searchbook.addEventListener('click', dosearch, false);
}
function dosearch(){
nav=[]
var searchtext = document.getElementById('searchtext').value;
searchbooks = items.filter(word => (word.Title.includes(searchtext)||word.Publisher.includes(searchtext)||word.Contributor.includes(searchtext)||word.Category.includes(searchtext)));
$('#frame').children().remove();
templeterender(searchbooks)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}


var getQuery = function() {
	var query_array = [];
	
	// クエリ文字列を取得して「&」で分割
	var query_list = window.location.search.substring(1).split('&');

	// 値取得用のテンポラリ変数
	var tmp_arr;
	
	// 分割したクエリ文字列の配列から、値を取り出す
	query_list.forEach( function(e, i, a) {
		tmp_arr = e.split('=');
		query_array[ tmp_arr[0] ] = tmp_arr[1];
	})
   query=query_array.search
	return query; 
}

document.addEventListener("DOMContentLoaded", function(){
//    console.log(nav)
comicfn()
adultfn()
blfn()
businessfn()
otherfn()
hobbyfn()
literaturefn()
picturebookfn()
searchword()

var items
query=getQuery()
if (query!==undefined){
queryword=decodeURI(query)
document.getElementById('searchtext').value=queryword
}
var url = location.href ;
//frameに子要素がなかったら実行する
child=document.getElementById('frame').children

if (child.length==0){
nextday='芳文社'
json_data= "https://kyukyunyorituryo.github.io/kindle_sale/json/"+nextday+"j.json"
json_data = encodeURI(json_data)
getJSON(json_data)
    for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}
else{
date=url.replace(/^.+kindle_sale\/html\/(.+?).html/g, '$1')
date=decodeURI(date)
json_data= "https://kyukyunyorituryo.github.io/kindle_sale/json/"+date+"j.json"
json_data = encodeURI(json_data)
getJSON(json_data)
    for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}
dosearch()
  });