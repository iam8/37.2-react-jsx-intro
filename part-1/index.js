// Ioana A Mititean
// 37.2 - React and JSX Intro

/**
 * JSX components for Part 1.
 */


const FirstComponent = () => {
    return <h1>My very first component</h1>;
}


ReactDOM.render(
    <FirstComponent/>,
    document.getElementById("root")
);
