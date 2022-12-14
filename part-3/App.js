const App = () => (
    <div>
        <Person name="Pasha" age="23" hobbies={['Drawing', 'Calisthenics', 'Cooking vegan food']} />
        <Person name="Emily" age="22" hobbies={['Knitting', 'Walking', 'Traveling']} />
        <Person name="Alexander" age="17" hobbies={['Playing COD', 'Watching movies', 'Drawing anime']} />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))