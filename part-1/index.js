const FirstComponent = (props) => {
    return <h1>My very first component.</h1>;
}

const NamedComponent = (props) => {
    return <p>My name is {props.name}.</p>;
}

const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Jenny" />
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));