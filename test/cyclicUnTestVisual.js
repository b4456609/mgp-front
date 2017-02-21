module.exports = {
  "serviceWithEndpointPair": [
    {
      "source": "S0",
      "className": "group0 cyclic0 group3",
      "target": "S0 endpoint /path1 GET"
    },
    {
      "source": "S0",
      "className": "group0 cyclic0",
      "target": "S0 endpoint /path0 PUT"
    },
    {
      "source": "S0",
      "className": "",
      "target": "S0 endpoint /path2 PUT"
    },
    {
      "source": "S0",
      "className": "",
      "target": "S0 endpoint /path3 PUT"
    },
    {
      "source": "S2",
      "className": "",
      "target": "S2 endpoint /path5 POST"
    },
    {
      "source": "S2",
      "className": "",
      "target": "S2 endpoint /path6 POST"
    },
    {
      "source": "S2",
      "className": "group4 cyclic4",
      "target": "S2 endpoint /path1 DELETE"
    },
    {
      "source": "S2",
      "className": "",
      "target": "S2 endpoint /path8 GET"
    },
    {
      "source": "S2",
      "className": "group2",
      "target": "S2 endpoint /path7 PUT"
    },
    {
      "source": "S2",
      "className": "group0 cyclic0 group3",
      "target": "S2 endpoint /path0 DELETE"
    },
    {
      "source": "S2",
      "className": "",
      "target": "S2 endpoint /path3 PUT"
    },
    {
      "source": "S2",
      "className": "group1 group4 cyclic4",
      "target": "S2 endpoint /path2 POST"
    },
    {
      "source": "S2",
      "className": "",
      "target": "S2 endpoint /path4 POST"
    },
    {
      "source": "S1",
      "className": "group1 group4 cyclic4",
      "target": "S1 endpoint /path0 GET"
    },
    {
      "source": "S1",
      "className": "group2",
      "target": "S1 endpoint /path1 POST"
    }
  ],
  "nodes": [
    {
      "id": "S0 endpoint /path0 PUT",
      "label": "/path0 PUT",
      "className": "group0-start cyclic0-start",
      "group": 1
    },
    {
      "id": "S2 endpoint /path0 DELETE",
      "label": "/path0 DELETE",
      "className": "group0 cyclic0 group3-start",
      "group": 1
    },
    {
      "id": "S0 endpoint /path1 GET",
      "label": "/path1 GET",
      "className": "group0 cyclic0 group3",
      "group": 1
    },
    {
      "id": "S0 endpoint /path3 PUT",
      "label": "/path3 PUT",
      "className": "",
      "group": 1
    },
    {
      "id": "S0 endpoint /path2 PUT",
      "label": "/path2 PUT",
      "className": "",
      "group": 1
    },
    {
      "id": "S2 endpoint /path7 PUT",
      "label": "/path7 PUT",
      "className": "group2",
      "group": 1
    },
    {
      "id": "S1 endpoint /path1 POST",
      "label": "/path1 POST",
      "className": "group2-start",
      "group": 1
    },
    {
      "id": "S2 endpoint /path3 PUT",
      "label": "/path3 PUT",
      "className": "",
      "group": 1
    },
    {
      "id": "S2 endpoint /path6 POST",
      "label": "/path6 POST",
      "className": "",
      "group": 1
    },
    {
      "id": "S2 endpoint /path2 POST",
      "label": "/path2 POST",
      "className": "group1 group4 cyclic4",
      "group": 1
    },
    {
      "id": "S1 endpoint /path0 GET",
      "label": "/path0 GET",
      "className": "group1-start group4 cyclic4",
      "group": 1
    },
    {
      "id": "S2 endpoint /path5 POST",
      "label": "/path5 POST",
      "className": "",
      "group": 1
    },
    {
      "id": "S2 endpoint /path1 DELETE",
      "label": "/path1 DELETE",
      "className": "group4-start cyclic4-start",
      "group": 1
    },
    {
      "id": "S2 endpoint /path8 GET",
      "label": "/path8 GET",
      "className": "",
      "group": 1
    },
    {
      "id": "S2 endpoint /path4 POST",
      "label": "/path4 POST",
      "className": "",
      "group": 1
    },
    {
      "id": "S0",
      "label": "S0",
      "className": "group0 cyclic0 group3",
      "group": 2
    },
    {
      "id": "S2",
      "label": "S2",
      "className": "group0 cyclic0 group1 group2 group3 group4 cyclic4",
      "group": 2
    },
    {
      "id": "S1",
      "label": "S1",
      "className": "group1 group2 group4 cyclic4",
      "group": 2
    }
  ],
  "providerEndpointWithConsumerPair": [
    {
      "source": "S0",
      "className": "untest group0 cyclic0",
      "target": "S2 endpoint /path0 DELETE"
    },
    {
      "source": "S2",
      "className": "untest group4 cyclic4",
      "target": "S1 endpoint /path0 GET"
    },
    {
      "source": "S2",
      "className": "group0 cyclic0 group3",
      "target": "S0 endpoint /path1 GET"
    },
    {
      "source": "S1",
      "className": "group1 group4 cyclic4",
      "target": "S2 endpoint /path2 POST"
    },
    {
      "source": "S1",
      "className": "group2",
      "target": "S2 endpoint /path7 PUT"
    }
  ],
  "scenarioEndpointPair": []
}
