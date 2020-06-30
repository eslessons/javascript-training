var http = new XMLHttpRequest();
var url = 'https://jsonplaceholder.typicode.com/posts';
// var method = 'GET';
var method = 'POST';

var data = 'title=Post%20Title&body=Body';

http.open(http, url);
http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
http.onreadystatechange = function () {
  if (http.readyState === XMLHttpRequest.DONE && http.status === 201) {
    console.log(JSON.parse(http.responseText)[0].id);
  } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 201) {
    console.log('Error!');
  }
};
http.send(data);
