const p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/gi;
var str = 'サポートサイトはhttp://www.wings.msn.to/です。';
str += 'サンプル紹介サイトはHTTP://www.web-deli.com/もよろしく!';

const result = str.match(p);
for (var i = 0, len = result.length; i < len; i++) {
	console.log(result[i]);
}