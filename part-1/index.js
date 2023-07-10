// Ioana A Mititean
// 37.2 - React and JSX Intro

/**
 * JSX components for Part 1.
 */


const FirstComponent = () => {
    return <h1>My very first component</h1>;
}


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<FirstComponent />);
