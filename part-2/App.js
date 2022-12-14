const App = () => (
    <div>
        <Tweet username="PashaLog" name="Pasha Loguinov" date={new Date().toDateString()} message="Today, I am learning the fundamentals of React.js"/>
        <Tweet username="ThatGirlEmily" name="Emily Wood" date={new Date().toDateString()} message="I'm gonna become an insurance agent!"/>
        <Tweet username="Hnd.Drwn" name="Daniil Loginov" date={new Date().toDateString()} message="I got more art to sell."/>
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))