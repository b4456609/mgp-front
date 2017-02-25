module.exports = {
  "serviceWithEndpointPair" : [ {
    "source" : "S1",
    "className" : "",
    "target" : "S1 endpoint /path2 PUT"
  }, {
    "source" : "S1",
    "className" : "group4",
    "target" : "S1 endpoint /path3 PUT"
  }, {
    "source" : "S1",
    "className" : "group1 group7 cyclic-enhance7 group8 cyclic-enhance8",
    "target" : "S1 endpoint /path0 POST"
  }, {
    "source" : "S1",
    "className" : "group2 cyclic2 group5 cyclic5",
    "target" : "S1 endpoint /path1 DELETE"
  }, {
    "source" : "S3",
    "className" : "group2 cyclic2 group5 cyclic5 group6 cyclic6",
    "target" : "S3 endpoint /path0 GET"
  }, {
    "source" : "S0",
    "className" : "",
    "target" : "S0 endpoint /path2 DELETE"
  }, {
    "source" : "S0",
    "className" : "group0 cyclic0 group2 cyclic2 group3 cyclic3 group5 cyclic5 group6 cyclic6",
    "target" : "S0 endpoint /path3 POST"
  }, {
    "source" : "S0",
    "className" : "group0 cyclic0 group2 cyclic2 group3 cyclic3 group5 cyclic5 group6 cyclic6",
    "target" : "S0 endpoint /path1 GET"
  }, {
    "source" : "S0",
    "className" : "",
    "target" : "S0 endpoint /path0 GET"
  }, {
    "source" : "S4",
    "className" : "group1 group7 cyclic-enhance7 group8 cyclic-enhance8",
    "target" : "S4 endpoint /path0 PUT"
  }, {
    "source" : "S2",
    "className" : "group3 cyclic3",
    "target" : "S2 endpoint /path0 PUT"
  }, {
    "source" : "S2",
    "className" : "group4",
    "target" : "S2 endpoint /path1 DELETE"
  }, {
    "source" : "S2",
    "className" : "group1 group7 cyclic-enhance7 group8 cyclic-enhance8",
    "target" : "S2 endpoint /path3 POST"
  }, {
    "source" : "S2",
    "className" : "group5 cyclic5",
    "target" : "S2 endpoint /path2 DELETE"
  } ],
  "nodes" : [ {
    "id" : "S1 endpoint /path1 DELETE",
    "label" : "/path1 DELETE",
    "className" : "group2-start cyclic2-start group5 cyclic5",
    "group" : 1
  }, {
    "id" : "S3 endpoint /path0 GET",
    "label" : "/path0 GET",
    "className" : "group2 cyclic2 group5 cyclic5 group6-start cyclic6-start",
    "group" : 1
  }, {
    "id" : "S2 endpoint /path2 DELETE",
    "label" : "/path2 DELETE",
    "className" : "group5-start cyclic5-start",
    "group" : 1
  }, {
    "id" : "S1 endpoint /path2 PUT",
    "label" : "/path2 PUT",
    "className" : "",
    "group" : 1
  }, {
    "id" : "S0 endpoint /path1 GET",
    "label" : "/path1 GET",
    "className" : "group0-start cyclic0-start group2 cyclic2 group3 cyclic3 group5 cyclic5 group6 cyclic6",
    "group" : 1
  }, {
    "id" : "S0 endpoint /path3 POST",
    "label" : "/path3 POST",
    "className" : "group0 cyclic0 group2 cyclic2 group3 cyclic3 group5 cyclic5 group6 cyclic6",
    "group" : 1
  }, {
    "id" : "S2 endpoint /path0 PUT",
    "label" : "/path0 PUT",
    "className" : "group3-start cyclic3-start",
    "group" : 1
  }, {
    "id" : "S1 endpoint /path3 PUT",
    "label" : "/path3 PUT",
    "className" : "group4",
    "group" : 1
  }, {
    "id" : "S2 endpoint /path1 DELETE",
    "label" : "/path1 DELETE",
    "className" : "group4-start",
    "group" : 1
  }, {
    "id" : "S2 endpoint /path3 POST",
    "label" : "/path3 POST",
    "className" : "group1 group7 cyclic-enhance7 group8 cyclic-enhance8",
    "group" : 1
  }, {
    "id" : "S4 endpoint /path0 PUT",
    "label" : "/path0 PUT",
    "className" : "group1 group7-start cyclic-enhance7-start group8-start cyclic-enhance8-start",
    "group" : 1
  }, {
    "id" : "S1 endpoint /path0 POST",
    "label" : "/path0 POST",
    "className" : "group1-start group7 cyclic-enhance7 group8 cyclic-enhance8",
    "group" : 1
  }, {
    "id" : "S0 endpoint /path0 GET",
    "label" : "/path0 GET",
    "className" : "",
    "group" : 1
  }, {
    "id" : "S0 endpoint /path2 DELETE",
    "label" : "/path2 DELETE",
    "className" : "",
    "group" : 1
  }, {
    "id" : "S1",
    "label" : "S1",
    "className" : "group1 group2 cyclic2 group4 group5 cyclic5 group7 cyclic-enhance7 group8 cyclic-enhance8",
    "group" : 2
  }, {
    "id" : "S3",
    "label" : "S3",
    "className" : "group2 cyclic2 group5 cyclic5 group6 cyclic6",
    "group" : 2
  }, {
    "id" : "S0",
    "label" : "S0",
    "className" : "group0 cyclic0 group2 cyclic2 group3 cyclic3 group5 cyclic5 group6 cyclic6",
    "group" : 2
  }, {
    "id" : "S4",
    "label" : "S4",
    "className" : "group1 group7 cyclic-enhance7 group8 cyclic-enhance8",
    "group" : 2
  }, {
    "id" : "S2",
    "label" : "S2",
    "className" : "group1 group3 cyclic3 group4 group5 cyclic5 group7 cyclic-enhance7 group8 cyclic-enhance8",
    "group" : 2
  } ],
  "providerEndpointWithConsumerPair" : [ {
    "source" : "S1",
    "className" : "untest group1 group7 cyclic-enhance7 group8 cyclic-enhance8",
    "target" : "S4 endpoint /path0 PUT"
  }, {
    "source" : "S1",
    "className" : "untest group2 cyclic2 group5 cyclic5",
    "target" : "S3 endpoint /path0 GET"
  }, {
    "source" : "S3",
    "className" : "untest group2 cyclic2 group5 cyclic5 group6 cyclic6",
    "target" : "S0 endpoint /path1 GET"
  }, {
    "source" : "S0",
    "className" : "untest group0 cyclic0 group2 cyclic2 group3 cyclic3 group5 cyclic5 group6 cyclic6",
    "target" : "S0 endpoint /path3 POST"
  }, {
    "source" : "S4",
    "className" : "untest group1 group7 cyclic-enhance7 group8 cyclic-enhance8",
    "target" : "S2 endpoint /path3 POST"
  }, {
    "source" : "S4",
    "className" : "untest group7 cyclic-enhance7 group8 cyclic-enhance8",
    "target" : "S1 endpoint /path0 POST"
  }, {
    "source" : "S2",
    "className" : "group3 cyclic3",
    "target" : "S0 endpoint /path1 GET"
  }, {
    "source" : "S2",
    "className" : "untest group4",
    "target" : "S1 endpoint /path3 PUT"
  }, {
    "source" : "S2",
    "className" : "group5 cyclic5",
    "target" : "S1 endpoint /path1 DELETE"
  } ],
  "scenarioEndpointPair" : [ ]
}
