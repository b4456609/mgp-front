export function showCyclic() {
  let serviceLinks = document.querySelectorAll('svg .servicelink');
  let nodes = document.querySelectorAll('svg circle');
  let serviceCallLinks = document.querySelectorAll('svg .call-link');

  console.log(serviceLinks, nodes, serviceLinks);

  [].forEach.call(serviceLinks, function (item) {
    // do whatever
    if (item.className.baseVal.includes('cyclic')) {
      item.setAttribute('style', "stroke: orange; stroke-width: 4px;");
    }
  });
  [].forEach.call(nodes, function (item) {
    // do whatever
    if (item.className.baseVal.includes('cyclic')) {
      item.setAttribute('style', "stroke: orange; stroke-width: 4px;");
    }
  });
  [].forEach.call(serviceCallLinks, function (item) {
    // do whatever
    if (item.className.baseVal.includes('cyclic')) {
      item.setAttribute('style', "stroke: orange; stroke-width: 4px;");
    }
  });
}

export function hideCyclic() {
  let serviceLinks = document.querySelectorAll('svg .servicelink');
  let nodes = document.querySelectorAll('svg circle');
  let serviceCallLinks = document.querySelectorAll('svg .call-link');

  console.log(serviceLinks, nodes, serviceLinks);

  [].forEach.call(serviceLinks, function (item) {
    // do whatever
    if (item.className.baseVal.includes('cyclic')) {
      item.setAttribute('style', '');
    }
  });
  [].forEach.call(nodes, function (item) {
    // do whatever
    if (item.className.baseVal.includes('cyclic')) {
      item.setAttribute('style', '');
    }
  });
  [].forEach.call(serviceCallLinks, function (item) {
    // do whatever
    if (item.className.baseVal.includes('cyclic')) {
      item.setAttribute('style', '');
    }
  });
}
