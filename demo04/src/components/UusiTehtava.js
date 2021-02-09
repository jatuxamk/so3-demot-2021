function UusiTehtava(props) {

    return (<input 
                className="form-control mb-2" 
                placeholder="Anna tehtävä ja paina Enter..." 
                onKeyPress={ (e) => {
                                if (e.key === "Enter") {
                                props.lisaaTehtava(e.target.value);
                                e.target.value = null; 
                                }
                                
                            } }
            />);

}

export default UusiTehtava;