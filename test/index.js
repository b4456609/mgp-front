var express = require('express')
var cors = require('cors')
var app = express()
var visual = require('./visual')
var cyclicUnTestVisual = require('./cyclicUnTestVisual')
var visualbig = require('./visual-big')
var serviceCall = require('./serviceCall')
var service = require('./service')
var endpoint = require('./endpoint')
var scenario = require('./scenario')
var report1 = require('./report1')
var report0 = require('./report0')
var bdd = require('./bdd')

app.use(cors())

app.post('/api/update', function (req, res) {
  res.send();
})

app.get('/api/bdd', function (req, res) {
  res.send(bdd);
})

app.get('/api/graph/visual', function (req, res) {
  res.send(visual)
})

app.get('/api/graph/serviceCall', function (req, res) {
  res.send(serviceCall)
})

app.get('/api/graph/service', function (req, res) {
  res.send(service)
})

app.get('/api/graph/endpoint', function (req, res) {
  res.send(endpoint)
})

app.get('/api/graph/scenario', function (req, res) {
  res.send(scenario)
})

app.get('/api/test/report', function (req, res) {
  let report = report1;
  if(req.query.page === '0'){
    report = report0
  }
  res.send(report)
})

app.get('/api/setting', function (req, res) {
  res.send({
    "pactHostUrl": "http://140.121.102.161:8880/",
    "bddGitUrl": "https://github.com/b4456609/easylearn-uat.git"
  })
})

app.post('/api/setting', function (req, res) {
  res.send();
})


app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
