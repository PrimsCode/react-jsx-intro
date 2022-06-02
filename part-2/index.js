const Tweet = (props) => {
    return (
    <div>
        <b><i>{props.name} tweets:</i></b>
        <p>{props.message}</p>
        <h6>by {props.username} on {props.date}</h6>
    </div>
    );
}

const App = () => (
    <div>
        <Tweet name="Jen" username="jen321" date="03/02/22" 
            message="Today is a good day" />
        <Tweet name="Brody" username="brody321" date="03/04/22" 
            message="Is today a good day?" />
        <Tweet name="Hannah" username="hannah321" date="06/02/22" 
            message="This is a wonderful month." />
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));