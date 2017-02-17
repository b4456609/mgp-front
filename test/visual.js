module.exports = {
  "serviceWithEndpointPair": [
    {
      "source": "easylearn_user",
      "className": "",
      "target": "easylearn_user endpoint /folder/pack/{id} DELETE"
    },
    {
      "source": "easylearn_user",
      "className": "",
      "target": "easylearn_user endpoint /login POST"
    },
    {
      "source": "easylearn_user",
      "className": "",
      "target": "easylearn_user endpoint /folder PUT"
    },
    {
      "source": "easylearn_user",
      "className": "group0 ",
      "target": "easylearn_user endpoint /pack GET"
    },
    {
      "source": "easylearn_user",
      "className": "",
      "target": "easylearn_user endpoint /folder GET"
    },
    {
      "source": "easylearn_user",
      "className": "",
      "target": "easylearn_user endpoint /folder/{id} DELETE"
    },
    {
      "source": "easylearn_user",
      "className": "",
      "target": "easylearn_user endpoint /folder POST"
    },
    {
      "source": "easylearn_webback",
      "className": "group1 group2 ",
      "target": "easylearn_webback endpoint /note POST"
    },
    {
      "source": "easylearn_pack",
      "className": "",
      "target": "easylearn_pack endpoint /{packId}/version POST"
    },
    {
      "source": "easylearn_pack",
      "className": "",
      "target": "easylearn_pack endpoint / POST"
    },
    {
      "source": "easylearn_pack",
      "className": "group0 ",
      "target": "easylearn_pack endpoint / GET"
    },
    {
      "source": "easylearn_pack",
      "className": "group1 ",
      "target": "easylearn_pack endpoint /version PUT"
    },
    {
      "source": "easylearn_note",
      "className": "group1 group2 ",
      "target": "easylearn_note endpoint / POST"
    }
  ],
  "nodes": [
    {
      "id": "easylearn_user endpoint /folder GET",
      "label": "/folder GET",
      "className": "",
      "group": 1
    },
    {
      "id": "easylearn_user endpoint /login POST",
      "label": "/login POST",
      "className": "",
      "group": 1
    },
    {
      "id": "easylearn_user endpoint /folder POST",
      "label": "/folder POST",
      "className": "",
      "group": 1
    },
    {
      "id": "easylearn_user endpoint /folder/pack/{id} DELETE",
      "label": "/folder/pack/{id} DELETE",
      "className": "",
      "group": 1
    },
    {
      "id": "easylearn_user endpoint /folder/{id} DELETE",
      "label": "/folder/{id} DELETE",
      "className": "",
      "group": 1
    },
    {
      "id": "easylearn_user endpoint /pack GET",
      "label": "/pack GET",
      "className": "group0 ",
      "group": 1
    },
    {
      "id": "easylearn_pack endpoint / GET",
      "label": "/ GET",
      "className": "group0-start ",
      "group": 1
    },
    {
      "id": "easylearn_user endpoint /folder PUT",
      "label": "/folder PUT",
      "className": "",
      "group": 1
    },
    {
      "id": "easylearn_webback endpoint /note POST",
      "label": "/note POST",
      "className": "group1-start group2-start ",
      "group": 1
    },
    {
      "id": "easylearn_pack endpoint /version PUT",
      "label": "/version PUT",
      "className": "group1 ",
      "group": 1
    },
    {
      "id": "easylearn_note endpoint / POST",
      "label": "/ POST",
      "className": "group1 group2 ",
      "group": 1
    },
    {
      "id": "easylearn_pack endpoint /{packId}/version POST",
      "label": "/{packId}/version POST",
      "className": "",
      "group": 1
    },
    {
      "id": "easylearn_pack endpoint / POST",
      "label": "/ POST",
      "className": "",
      "group": 1
    },
    {
      "id": "easylearn_user",
      "label": "easylearn_user",
      "className": "group0 ",
      "group": 2
    },
    {
      "id": "easylearn_webback",
      "label": "easylearn_webback",
      "className": "group1 group2 ",
      "group": 2
    },
    {
      "id": "easylearn_pack",
      "label": "easylearn_pack",
      "className": "group0 group1 ",
      "group": 2
    },
    {
      "id": "easylearn_note",
      "label": "easylearn_note",
      "className": "group1 group2 ",
      "group": 2
    },
    {
      "id": "58a67c9e149b3f0001320182",
      "label": "add pack",
      "className": "",
      "group": 3
    },
    {
      "id": "58a67c9e149b3f0001320184",
      "label": "add version",
      "className": "",
      "group": 3
    },
    {
      "id": "58a67c9e149b3f0001320186",
      "label": "add version",
      "className": "",
      "group": 3
    },
    {
      "id": "58a67c9e149b3f0001320188",
      "label": "get pack",
      "className": "",
      "group": 3
    }
  ],
  "providerEndpointWithConsumerPair": [
    {
      "source": "easylearn_webback",
      "className": "group1 group2",
      "target": "easylearn_note endpoint / POST"
    },
    {
      "source": "easylearn_webback",
      "className": "group1",
      "target": "easylearn_pack endpoint /version PUT"
    },
    {
      "source": "easylearn_pack",
      "className": "group0",
      "target": "easylearn_user endpoint /pack GET"
    }
  ],
  "scenarioEndpointPair": [
    {
      "source": "58a67c9e149b3f0001320182",
      "target": "easylearn_pack endpoint / POST",
      "className": ""
    },
    {
      "source": "58a67c9e149b3f0001320184",
      "target": "easylearn_pack endpoint / GET",
      "className": ""
    },
    {
      "source": "58a67c9e149b3f0001320184",
      "target": "easylearn_pack endpoint /{packId}/version POST",
      "className": ""
    },
    {
      "source": "58a67c9e149b3f0001320186",
      "target": "easylearn_user endpoint /folder POST",
      "className": ""
    },
    {
      "source": "58a67c9e149b3f0001320186",
      "target": "easylearn_user endpoint /folder GET",
      "className": ""
    }
  ]
}
