// Ioana A Mititean
// 37.2 - React and JSX Intro

/**
 * JSX components for Part 1.
 */


const FirstComponent = () => (
    <h1>My very first component</h1>
);


const NamedComponent = (props) => {
    const { name } = props;
    return <p>My name is {name}</p>
};


const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Bob"/>
        </div>
    );
}


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
