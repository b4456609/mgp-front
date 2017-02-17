export function concateData(...i) {
  let lineData = [];
  for (let item of i) {
    if (item) lineData = lineData.concat(item)
  }
  return lineData
}
