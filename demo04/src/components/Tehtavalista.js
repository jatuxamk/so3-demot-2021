import Tehtava from './Tehtava';

function Tehtavalista(props) {
    
    return (
        <ul className="list-group">

            { props.tehtavat.map((tehtava, idx) => {
    
            return (<Tehtava key={idx} tehtava={tehtava} />)
    
            }) }
  
        </ul>
    )
}

export default Tehtavalista;
