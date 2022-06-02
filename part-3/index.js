const Person = (props) => {
    const voteAge = props.age>= 18 ? "Please go vote!" : "You must be 18.";
    const hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);

    return (
        <div>
            <p>Individual Information:</p>
            <ul>
                <li>Name: {props.name.slice(0,6)}</li>
                <li>Age: {props.age}</li>
                <ul>
                    Hobbies: {hobbies}
                </ul>
            </ul>
            <h3>{voteAge}</h3>
        </div>
    );
}

const App = () => (
    <div>
        <Person name="Abby" age={23} hobbies={["drawing", "painting", "crafting"]} />
        <Person name="David" age={5} hobbies={["soccer", "basketball", "tennis"]} />
        <Person name="Sean" age={32} hobbies={["gaming", "cooking"]} />
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));