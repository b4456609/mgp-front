export function getGraph() {
  return fetch('test.json').then(function(response) {
    console.debug(response)
    console.log(response);
    return response.json();
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  });
}
