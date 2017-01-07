export default `var request = require("request");

var jar = request.jar();
jar.setCookie(request.cookie("foo=bar"), "http://mockbin.com/request");
jar.setCookie(request.cookie("bar=baz"), "http://mockbin.com/request");

var options = { method: 'POST',
  url: 'http://mockbin.com/request',
  qs: { foo: [ 'bar', 'baz' ] },
  headers:
   { 'content-type': 'application/json',
     accept: 'application/json' },
  body: { foo: 'bar' },
  json: true,
  jar: 'JAR' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});`;
