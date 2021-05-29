import { useEffect } from "react"
import {stockData} from "../../data/stock"

interface IStockData{
    sku: string
    stock: number
}

const Dropdown: React.FC = () => {
    return (
        <>
            <label htmlFor="sku" aria-label="sku dropdown">Select a SKU:</label>
            <select name="sku" id="sku">
                <option value=""></option>
                {stockData.map((val:IStockData) => {
                   return <option value={val.sku} key={val.sku}>{val.sku}</option>
                })}         
            </select>
        </>
    )
}

export default Dropdown;