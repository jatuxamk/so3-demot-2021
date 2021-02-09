import Tehtava from './Tehtava';

function Tehtavalista(props) {
    
    return (
        <ul className="list-group">

            { props.tehtavat.map((tehtava, idx) => {
    
            return (<Tehtava 
                        key={idx} 
                        indeksi={idx}
                        tehtava={tehtava} 
                        merkitseSuoritetuksi={props.merkitseSuoritetuksi} 
                    />)
    
            }) }
  
        </ul>
    )
}

export default Tehtavalista;
