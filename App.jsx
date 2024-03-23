import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

let currDate=new Date(2024,3,23,);
currDate=currDate.getHours();
const cssStyle={ 
};
let greeting=' ';
if(currDate>=1 && currDate<12){
  greeting='Good Morning';
  cssStyle.color='green';
} else if(currDate>=12 && currDate<19){
  greeting='Good afternoon';
  cssStyle.color='orange';
}
else {
  greeting='Good night';
  cssStyle.color='red';
}

ReactDOM.render(
  <>
  <div>
  <h1>Hello Sir,<span style={cssStyle}> {greeting} </span></h1>
    </div>
   </>,
  document.getElementById('root')
);
