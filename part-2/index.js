// Ioana A Mititean
// 37.2 - React and JSX Intro

/**
 * JSX components for Part 2.
 */


const Tweet = (props) => {

    const {color, backgroundColor} = props;
    const {username, name, date, message} = props;

    const colors = {color, backgroundColor};

    return (
        <div style={colors}>
            <h2>Tweet Info</h2>
            <ul>
                <li>Created by (username): {username}</li>
                <li>Created by (name): {name}</li>
                <li>Date created: {date}</li>
                <li>Message body: {message}</li>
            </ul>
        </div>
    )
}


const App = () => {
    return (
        <div>
            <Tweet
                color="darkblue"
                backgroundColor="lightblue"
                username="A000"
                name="Alice"
                date="7-10-23"
                message="Hello world" />

            <Tweet
                color="darkgreen"
                backgroundColor="lightgreen"
                username="B111"
                name="Bob"
                date="6-19-23"
                message="Happy Birthday to me!" />

            <Tweet
                color="maroon"
                backgroundColor="pink"
                username="C222"
                name="Charlie"
                date="5-5-23"
                message="Cinco de Mayo" />

            <Tweet
                color="brown"
                backgroundColor="yellow"
                username="D333"
                name="Daisy"
                date="4-01-23"
                message="April Fool's!" />
        </div>
    );
}


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
