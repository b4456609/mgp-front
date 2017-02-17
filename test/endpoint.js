module.exports = [
  {
    "id": "easylearn_user endpoint /folder GET",
    "httpMethod": "GET",
    "path": "/folder",
    "code": {
      "java": "OkHttpClient client = new OkHttpClient();\n\nRequest request = new Request.Builder()\n  .url(\"http://host/folder\")\n  .get()\n  .build();\n\nResponse response = client.newCall(request).execute();",
      "curl": "curl --request GET \\\n  --url http://host/folder",
      "node": "var request = require(\"request\");\n\nvar options = { method: 'GET', url: 'http://host/folder' };\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n\n  console.log(body);\n});\n"
    }
  },
  {
    "id": "easylearn_user endpoint /login POST",
    "httpMethod": "POST",
    "path": "/login",
    "code": {
      "java": "OkHttpClient client = new OkHttpClient();\n\nRequest request = new Request.Builder()\n  .url(\"http://host/login\")\n  .post(null)\n  .build();\n\nResponse response = client.newCall(request).execute();",
      "curl": "curl --request POST \\\n  --url http://host/login",
      "node": "var request = require(\"request\");\n\nvar options = { method: 'POST', url: 'http://host/login' };\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n\n  console.log(body);\n});\n"
    }
  },
  {
    "id": "easylearn_user endpoint /folder POST",
    "httpMethod": "POST",
    "path": "/folder",
    "code": {
      "java": "OkHttpClient client = new OkHttpClient();\n\nRequest request = new Request.Builder()\n  .url(\"http://host/folder\")\n  .post(null)\n  .build();\n\nResponse response = client.newCall(request).execute();",
      "curl": "curl --request POST \\\n  --url http://host/folder",
      "node": "var request = require(\"request\");\n\nvar options = { method: 'POST', url: 'http://host/folder' };\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n\n  console.log(body);\n});\n"
    }
  },
  {
    "id": "easylearn_user endpoint /folder/pack/{id} DELETE",
    "httpMethod": "DELETE",
    "path": "/folder/pack/{id}",
    "code": {
      "java": "OkHttpClient client = new OkHttpClient();\n\nRequest request = new Request.Builder()\n  .url(\"http://host/folder/pack/%7Bid%7D\")\n  .delete(null)\n  .build();\n\nResponse response = client.newCall(request).execute();",
      "curl": "curl --request DELETE \\\n  --url http://host/folder/pack/%7Bid%7D",
      "node": "var request = require(\"request\");\n\nvar options = { method: 'DELETE', url: 'http://host/folder/pack/%7Bid%7D' };\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n\n  console.log(body);\n});\n"
    }
  },
  {
    "id": "easylearn_user endpoint /folder/{id} DELETE",
    "httpMethod": "DELETE",
    "path": "/folder/{id}",
    "code": {
      "java": "OkHttpClient client = new OkHttpClient();\n\nRequest request = new Request.Builder()\n  .url(\"http://host/folder/%7Bid%7D\")\n  .delete(null)\n  .build();\n\nResponse response = client.newCall(request).execute();",
      "curl": "curl --request DELETE \\\n  --url http://host/folder/%7Bid%7D",
      "node": "var request = require(\"request\");\n\nvar options = { method: 'DELETE', url: 'http://host/folder/%7Bid%7D' };\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n\n  console.log(body);\n});\n"
    }
  },
  {
    "id": "easylearn_user endpoint /pack GET",
    "httpMethod": "GET",
    "path": "/pack",
    "code": {
      "java": "OkHttpClient client = new OkHttpClient();\n\nRequest request = new Request.Builder()\n  .url(\"http://host/pack\")\n  .get()\n  .build();\n\nResponse response = client.newCall(request).execute();",
      "curl": "curl --request GET \\\n  --url http://host/pack",
      "node": "var request = require(\"request\");\n\nvar options = { method: 'GET', url: 'http://host/pack' };\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n\n  console.log(body);\n});\n"
    }
  },
  {
    "id": "easylearn_pack endpoint / GET",
    "httpMethod": "GET",
    "path": "/",
    "code": {
      "java": "OkHttpClient client = new OkHttpClient();\n\nRequest request = new Request.Builder()\n  .url(\"http://host/\")\n  .get()\n  .build();\n\nResponse response = client.newCall(request).execute();",
      "curl": "curl --request GET \\\n  --url http://host/",
      "node": "var request = require(\"request\");\n\nvar options = { method: 'GET', url: 'http://host/' };\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n\n  console.log(body);\n});\n"
    }
  },
  {
    "id": "easylearn_user endpoint /folder PUT",
    "httpMethod": "PUT",
    "path": "/folder",
    "code": {
      "java": "OkHttpClient client = new OkHttpClient();\n\nRequest request = new Request.Builder()\n  .url(\"http://host/folder\")\n  .put(null)\n  .build();\n\nResponse response = client.newCall(request).execute();",
      "curl": "curl --request PUT \\\n  --url http://host/folder",
      "node": "var request = require(\"request\");\n\nvar options = { method: 'PUT', url: 'http://host/folder' };\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n\n  console.log(body);\n});\n"
    }
  },
  {
    "id": "easylearn_webback endpoint /note POST",
    "httpMethod": "POST",
    "path": "/note",
    "code": {
      "java": "OkHttpClient client = new OkHttpClient();\n\nRequest request = new Request.Builder()\n  .url(\"http://host/note\")\n  .post(null)\n  .build();\n\nResponse response = client.newCall(request).execute();",
      "curl": "curl --request POST \\\n  --url http://host/note",
      "node": "var request = require(\"request\");\n\nvar options = { method: 'POST', url: 'http://host/note' };\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n\n  console.log(body);\n});\n"
    }
  },
  {
    "id": "easylearn_pack endpoint /version PUT",
    "httpMethod": "PUT",
    "path": "/version",
    "code": {
      "java": "OkHttpClient client = new OkHttpClient();\n\nRequest request = new Request.Builder()\n  .url(\"http://host/version\")\n  .put(null)\n  .build();\n\nResponse response = client.newCall(request).execute();",
      "curl": "curl --request PUT \\\n  --url http://host/version",
      "node": "var request = require(\"request\");\n\nvar options = { method: 'PUT', url: 'http://host/version' };\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n\n  console.log(body);\n});\n"
    }
  },
  {
    "id": "easylearn_note endpoint / POST",
    "httpMethod": "POST",
    "path": "/",
    "code": {
      "java": "OkHttpClient client = new OkHttpClient();\n\nRequest request = new Request.Builder()\n  .url(\"http://host/\")\n  .post(null)\n  .build();\n\nResponse response = client.newCall(request).execute();",
      "curl": "curl --request POST \\\n  --url http://host/",
      "node": "var request = require(\"request\");\n\nvar options = { method: 'POST', url: 'http://host/' };\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n\n  console.log(body);\n});\n"
    }
  },
  {
    "id": "easylearn_pack endpoint /{packId}/version POST",
    "httpMethod": "POST",
    "path": "/{packId}/version",
    "code": {
      "java": "OkHttpClient client = new OkHttpClient();\n\nRequest request = new Request.Builder()\n  .url(\"http://host/%7BpackId%7D/version\")\n  .post(null)\n  .build();\n\nResponse response = client.newCall(request).execute();",
      "curl": "curl --request POST \\\n  --url http://host/%7BpackId%7D/version",
      "node": "var request = require(\"request\");\n\nvar options = { method: 'POST', url: 'http://host/%7BpackId%7D/version' };\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n\n  console.log(body);\n});\n"
    }
  },
  {
    "id": "easylearn_pack endpoint / POST",
    "httpMethod": "POST",
    "path": "/",
    "code": {
      "java": "OkHttpClient client = new OkHttpClient();\n\nRequest request = new Request.Builder()\n  .url(\"http://host/\")\n  .post(null)\n  .build();\n\nResponse response = client.newCall(request).execute();",
      "curl": "curl --request POST \\\n  --url http://host/",
      "node": "var request = require(\"request\");\n\nvar options = { method: 'POST', url: 'http://host/' };\n\nrequest(options, function (error, response, body) {\n  if (error) throw new Error(error);\n\n  console.log(body);\n});\n"
    }
  }
]
