const heading = React.createElement(
    "h1",
    { id : "heading",xyz:"abc"}, 
    "Hello world from React"
    ); //[tag, object, what we have to put]
const heading2 = React.createElement("div", {className:parent},[
    React.createElement("div", {id:"parentNew"}, [
        React.createElement("h1", {},"It's Heading One"),
        React.createElement("h2", {},"It's Heading Two"),
     ]),
    React.createElement("div",{id: "child"}, [
        React.createElement("h1", {},"It's new Heading One"),
        React.createElement("h2", {},"It's new Heading Two"),
    ]),
]);

     const root = ReactDOM.createRoot(document.getElementById("root"));
     root.render(heading);
     console.log(heading2)
     const root2 = ReactDOM.createRoot(document.getElementById("root2"));
     root2.render(heading2);