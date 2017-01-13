export function getGraph() {
  return fetch('test1.json').then(function(response) {
    return response.json();
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  });
}
