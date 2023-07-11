// Ioana A Mititean
// 37.2 - React and JSX Intro

/**
 * JSX components for Part 3.
 */


const Person = (props) => {

    const {name, age} = props;

    return (
        <div>
            <p>Learn some information about this person.</p>
            <h3>{name.slice(0, 8)}, age {age}</h3>
            <h3>{age >= 18 ? "Please go vote!" : "You must be at least 18."}</h3>
        </div>
    )
}


const App = () => {
    return (
        <div>
            <Person name="Alice" age={22}/>
            <Person name="Bob" age={17} />
            <Person name="ClaireDaBossIsHerName" age={18} />
        </div>
    )
};


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
