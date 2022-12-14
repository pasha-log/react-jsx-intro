const Person = (props) => {
    return (
        <div>
            <p>Learn something about this person:</p>
            <p>
                <b>Name:</b> {(props.name.length > 8) ? props.name.slice(0, 6) : props.name }
            </p>
            <p>
                <b>Age:</b> I am {props.age} years old
            </p>
            <p>
                <b>{(props.age < 18) ? "You must be 18" : "Please go vote!"}</b>
            </p>
            <h4>Hobbies</h4>
            <ul>{props.hobbies.map(h => 
            (
                <li>
                    <b>{h}</b>
                </li>
            )
            )}</ul>
        </div>
    )
}