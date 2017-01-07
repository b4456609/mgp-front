export default `HttpResponse<String> response = Unirest.post("http://mockbin.com/request?foo=bar&foo=baz")
  .header("cookie", "foo=bar; bar=baz")
  .header("accept", "application/json")
  .header("content-type", "application/json")
  .body("{\"foo\": \"bar\"}")
  .asString();`;
