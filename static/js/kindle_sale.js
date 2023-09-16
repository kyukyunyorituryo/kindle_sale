templete='<li class="media mb-3 alert-warning ">\n<div class="card mb-3" style="max-width: 800px;">\n	<div class="row g-0">\n		<div class="col-md-4">\n			<img src="<%= image_url %>" class="mr-3 lazyload" alt="<%= title %>" loading="lazy" />\n\n		</div>\n		<div class="col-md-8 alert-warning">\n			<div class="card-body alert-warning">\n				<h5 class="card-title">\n					<%= title %>\n				</h5>\n				<p class="card-text">\n					価格：<%= price %>円、ポイント：<%= point %>\n				</p>\n				<p class="card-text">\n					<%= contributor %>\n				</p>	\n				<p class="card-text">\n					出版社：<%= publisher %>、ASIN：<%= asin %>\n				</p>\n					<p class="card-text">\n						カテゴリー：<%= category %>\n					</p>\n				<a class="btn btn-warning" href="<%= url %>" role="button"  rel="noreferrer" target="_blank">Amazonで詳細を見る\n				</a>\n			</div>\n		</div>\n	</div>\n</div>\n</li>'

nav=[];
function templeterender(items){
for (let i = 0; i < items.length; i++) {
    nav[i] = ejs.render(templete, {
        title: items[i].Title,
        image_url: items[i].ImageURL,
        price:items[i].Price,
        point:items[i].Points,
        url: items[i].URL,
        contributor:items[i].Contributor,
        publisher:items[i].Publisher,
        category:items[i].Category,
        asin:items[i].Asin
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

searchword()

var items
query=getQuery()
if (query!==undefined){
queryword=decodeURI(query)
document.getElementById('searchtext').value=queryword
}

var url = location.href ;
date=url.match(".+/(.+?)\.[a-z]+([\?#;].*)?$")[1]
date=decodeURI(date)
json_data= "https://kyukyunyorituryo.github.io/kindle_sale/json/"+date+".json"
json_data = encodeURI(json_data)
getJSON(json_data)


//dosearch()
  });