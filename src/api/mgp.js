let base = '';
if(process.env.NODE_ENV !== 'production'){
  base = 'http://localhost:8080'
}

export function getGraph() {
  return fetch(base + '/api/graph').then(function(response) {
    return response.json();
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  });
}

export function updateSetting(url) {
  return fetch(base + '/api/pact/config', {
    method: 'POST',
    body: JSON.stringify({url}),
    headers: {
      "Content-Type": "application/json"
    }
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  });
}

export function getSetting() {
  return fetch(base + '/api/pact/config').then(function(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
  }).then(function(response) {
    return response.json();
  });
}

export function getServiceInfo() {
  return fetch(base + '/api/serviceInfo').then(function(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
  }).then(function(response) {
    return response.json();
  });
}

export function getServiceCallInfo() {
  return fetch(base + '/api/serviceCallInfo').then(function(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
  }).then(function(response) {
    return response.json();
  });
}
