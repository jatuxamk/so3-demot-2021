function Tehtava(props) {

    return (
        <li 
            className="list-group-item" 
        >
        { (props.tehtava.suoritettu) 
            ? <del>{props.tehtava.nimi}</del>
            : props.tehtava.nimi
        }</li>
    );
}

export default Tehtava;