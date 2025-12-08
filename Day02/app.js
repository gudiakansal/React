// jsx babel props

// const element=React.createElement('h1',{id:'title'},"hello");
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

//    jsx:javascript xml :look like html
const element2=<h1 id="title">heloooo</h1>
console.log(element);
const element3=<div>
    <h1>hii</h1>
    <h1>guddu</h1>
</div>
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(element);

