const init = [
  {
    'id': 'easylearn-note endpoint / POST',
    httpMethod: 'POST',
    path: '/',
    code: {
      java: `HttpResponse<String> response = Unirest.post("http://mockbin.com/request?foo=bar&foo=baz")
        .header("cookie", "foo=bar; bar=baz")
        .header("accept", "application/json")
        .header("content-type", "application/json")
        .body("{"foo": "bar"}")
        .asString();`,
      js: `var request = require("request");

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
      });`,
      cli: `curl --request POST \\
        --url 'http://mockbin.com/request?foo=bar&foo=baz' \\
        --header 'accept: application/json' \\
        --header 'content-type: application/json' \\
        --cookie 'foo=bar; bar=baz' \\
        --data '{"foo": "bar"}'`,
    },
  }
];
const app = (state = init, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default app;
