export default `curl --request POST \\
  --url 'http://mockbin.com/request?foo=bar&foo=baz' \\
  --header 'accept: application/json' \\
  --header 'content-type: application/json' \\
  --cookie 'foo=bar; bar=baz' \\
  --data '{"foo": "bar"}'`;
