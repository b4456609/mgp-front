let base = '';
if(process.env.NODE_ENV !== 'production'){
  base = 'http://localhost:8080'
}

export function getGraph() {
  // return fetch('/test1.json').then(function(response) {
  return fetch(base + '/api/graph/visual').then(function(response) {
    return response.json();
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  });
}

export function updateSetting(pactHostUrl, bddGitUrl) {
  return fetch(base + '/api/setting', {
    method: 'POST',
    body: JSON.stringify({pactHostUrl, bddGitUrl}),
    headers: {
      "Content-Type": "application/json"
    }
  });
}

export function getSetting() {
  return fetch(base + '/api/setting').then(function(response) {
    if (!response.ok) {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
    return response;
  }).then(function(response) {
    return response.json();
  });
}

export function getServiceInfo() {
  return fetch(base + '/api/graph/service').then(function(response) {
    console.log(response);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response;
  }).then(function(response) {
    return response.json();
  });
}

export function getServiceCallInfo() {
  return fetch(base + '/api/graph/serviceCall').then(function(response) {
    console.log(response);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response;
  }).then(function(response) {
    return response.json();
  });
}

export function getEndpointInfo() {
  return fetch(base + '/api/graph/endpoint').then(function(response) {
    console.log(response);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response;
  }).then(function(response) {
    return response.json();
  });
}

export function buildSwaggerURL(serviceName){
  return `/swagger/index.html?url=${window.location.origin}/api/swagger/${serviceName}`;
}
