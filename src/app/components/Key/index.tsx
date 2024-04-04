import "./styles.css";
import {Props} from "@/app/components/Key/interface";

const Key = (props: Props) => {
    return (
        <div className="key">
            <label> {props.field}</label>
            <div> {props.value} </div>
        </div>
    );
} ;

export default Key;