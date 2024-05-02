import React from 'react' // write rfce for getting boilerplate code

function Title(props) {
    return (
        <h1 style={{fontSize: 50, color: "red"}}>{props.name}</h1> //whenever we get a name from the screen,
        // we can pass it into the component over hear!
    );
}

export default Title