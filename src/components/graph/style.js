const errorStyle = ".error {stroke: red !important; stroke-width: 4px !important;}\n";
const unTestStyle = '.untest {stroke: #FEA120 !important; stroke-width: 4px !important;}\n';

let _showUnTest = false;

export function setUnTest(sut){
  _showUnTest=sut;
}

export function showStyle(showError, showUnTest){
  let ele = document.querySelector('#graphStyle');
  let result = '';
  if(showError) result += errorStyle;
  if(showUnTest) result += unTestStyle;
  ele.innerHTML = result;
}

export function show(){
  let ele = document.querySelector('#graphStyle');
  let result = '';
  result += errorStyle;
  if(_showUnTest) result += unTestStyle;
  ele.innerHTML = result;
}

export function hide(){
  let ele = document.querySelector('#graphStyle');
  let result = '';
  ele.innerHTML = result;
}
