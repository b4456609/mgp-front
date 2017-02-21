const errorStyle = ".error {stroke: red !important; stroke-width: 4px !important;}\n";
const unTestStyle = '.untest {stroke: Magenta !important; stroke-width: 4px !important;}\n';

export function showStyle(showError, showUnTest){
  let ele = document.querySelector('#graphStyle');
  let result = '';
  if(showError) result += errorStyle;
  if(showUnTest) result += unTestStyle;
  ele.innerHTML = result;
}
