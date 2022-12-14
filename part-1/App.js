const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name='Pasha' />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))