function Tehtava(props) {

    const vaihdaMerkinta = () => {

        props.merkitseSuoritetuksi(props.indeksi);

    } 

    return (
        <li 
            className="list-group-item"
            onClick={vaihdaMerkinta}
        >
        { (props.tehtava.suoritettu) 
            ? <del>{props.tehtava.nimi}</del>
            : props.tehtava.nimi
        }</li>
    );
}

export default Tehtava;