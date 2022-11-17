import {Druga} from "./Druga";

const Prva = (props) => {
    return (
        <div>
            <h1>Prva Komponenta {props.title}</h1>
            <span><Druga /></span>
        </div>
    );
};

export default Prva