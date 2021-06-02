import styles from "./dropdown.module.scss";
import {getStock, options} from "../../functions/get-data";

interface Props{
    setState: (val:any) => void;
}

const Dropdown: React.FC<Props> = ({setState}) => {
    
    const stockAvailable = async (e:any) => {
        try{
            const val = await getStock(e.target.value);
            setState(val?.qty);
        }catch(e){
            setState(e);
        } 
    }

    return (
        <>
            <label htmlFor="sku" aria-label="sku dropdown">Select a SKU:</label>
            <select name="sku" id="sku" className={styles.selectbox} onChange={stockAvailable}>
                <option value=""></option>
                {options()}      
            </select>
        </>
    )
}

export default Dropdown;