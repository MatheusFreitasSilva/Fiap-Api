import Key from "../Key";
import "./styles.css";
import {Props} from "./interface";

const Person = (props : Props) => {
    return (
        <div className={"person " + props.status}>
            <Key field="Nome " value={props.name} />
            <Key field="Endereço " value={props.address} />
            <Key field="Telefone " value={props.phone} />
            <Key field="E-mail " value={props.email} />
        </div>
    );
};

export default Person;