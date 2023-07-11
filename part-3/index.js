// Ioana A Mititean
// 37.2 - React and JSX Intro

/**
 * JSX components for Part 3.
 */


const Person = (props) => {

    const {name, age, hobbies} = props;

    return (
        <div>
            <p>Learn some information about this person.</p>
            <h3>{name.slice(0, 8)}, age {age}</h3>
            <h3>Hobbies:</h3>
            <ul>
                {hobbies.map(hobby => <li key={hobby.id}>{hobby.text}</li>)}
            </ul>
            <h3>{age >= 18 ? "Please go vote!" : "You must be at least 18 to vote."}</h3>
        </div>
    )
}


const App = () => {
    return (
        <div>
            <Person
                name="Alice"
                age={22}
                hobbies={[{id: 1, text: "hiking"}, {id: 2, text: "video games"}]} />

            <Person
                name="Bob"
                age={17}
                hobbies={[{id: 1, text: "golf"}]} />

            <Person
                name="ClaireDaBossIsHerName"
                age={18}
                hobbies={
                    [
                        {id: 1, text: "basketball"},
                        {id: 2, text: "volleyball"},
                        {id: 3, text: "swimming"},
                        {id: 4, text: "drawing"}
                    ]
                } />
        </div>
    )
};


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
