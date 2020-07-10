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
//日付を選択して切り替える
function selectdays(day){

nav=[]
var items
json_data= "https://kyukyunyorituryo.github.io/new_epub/json/"+day+"j.json"
getJSON(json_data)
$('#frame').children().remove();
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
document.getElementById('release').textContent=day+'の新刊'
}

function getNextYMD(now){
    now.setDate(now.getDate() + 1);
    var y = now.getFullYear();
    var m = ("00" + (now.getMonth()+1)).slice(-2);
    var d = ("00" + now.getDate()).slice(-2);
    var result = y + m + d;
    return result;
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
   query=query_array.day
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

$('#datetimepicker1').on("dp.change", function(e){

selectdays($(this).val())
});
var items

var url = location.href ;
//frameに子要素がなかったら実行する
child=document.getElementById('frame').children
if (child.length==0){
nextday='芳文社'
json_data= "https://kyukyunyorituryo.github.io/new_epub/json/"+nextday+"j.json"
getJSON(json_data)
    for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}
else{
date='芳文社'
json_data= "https://kyukyunyorituryo.github.io/new_epub/json/"+date+"j.json"
getJSON(json_data)
    for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}
  });