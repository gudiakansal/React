// attributes={
// className:"element",
// id:"first",
// style:{
// fontsize:"30px",
// color:white}
// }

// elements={
// tag:"h1",
// textcontent:"hello coder",
// classname:"element",
// id:"first"
// }


//create a h1 element using js
// const element1=document.createElement('h1');
// element1.textContent="hello coder army";
// element1.className='element';
// element1.id='first';
//element1.style.fontSize="30px";
//element1.style.backgroundColor="orange";
//element1.style.color="white";

// const element2=document.createElement('h2');
// element2.textContent="strike is launched";
// element2.className='element';
// element2.id='second';
//element2.style.fontSize="20px";
//element2.style.backgroundColor="pink";
//element2.style.color="green";

//custom react
// const React={
// createElement:function(tag,attributes,children){
// const element=document.createElement(tag);
// element.textContent=children;
// for(const key in attributes){
//     if(key==='style'){
//         Object.assign(element.style,attributes.style);
//     }
//     else{
//     element[key]=attributes[key];
// }
// }
// return element;
// }
// }

// const ReactDOM={
//     render:function(child,parent){
//         parent.append(child);
//     }
// }

const element1=React.createElement("h1",{className:"element",id:"first",style:{fontSize:"30px",backgroundColor:"orange",color:"white"}},"hello");
const element2=React.createElement("h2",{className:"element",id:"second",style:{fontSize:"30px",backgroundColor:"orange",color:"white"}},"gudia");

const root=document.getElementById('root');
ReactDOM.render(element1,root);
ReactDOM.render(element2,root);