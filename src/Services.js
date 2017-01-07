export default {
  "nodes": [
    {"id": "easylearn_user", "label": "easylearn_user", "group": 1},
    {"id": "easylearn_web", "label": "easylearn_web", "group": 1},
    {"id": "easylearn_pack", "label": "easylearn_pack", "group": 1},
    {"id": "easylearn_webback", "label": "easylearn_webback", "group": 1},
    {"id": "easylearn_note", "label": "easylearn_note", "group": 1},
    {"id": "easylearn_pack endpoint / GET", "label":"/ GET", "group": 2},
    {"id": "easylearn_user endpoint / GET", "label":"/ GET", "group": 2},
    {"id": "easylearn_note endpoint / POST", "label":"/ POST", "group": 2}
  ],
  "links": [
    {"source": "easylearn_pack", "target": "easylearn_user endpoint / GET"},
    {"source": "easylearn_pack", "target": "easylearn_note endpoint / POST"}
  ],
  "servicesDep": [
  {"source": "easylearn_pack endpoint / GET", "target": "easylearn_pack"},
  {"source": "easylearn_user endpoint / GET", "target": "easylearn_user"},
  {"source": "easylearn_note endpoint / POST", "target": "easylearn_note"}
  ]
};
