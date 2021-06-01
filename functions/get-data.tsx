import {stockData} from "../data/stock";
import {transactData} from "../data/transactions";

export interface IStockData{
    sku: string
    stock: number
}

export interface ITransactData{
    sku: string
    type: string
    qty:number
}

export const getStock = (sku:string) => {
    return new Promise<{ sku: string, qty: number }>((resolve, reject)=> {

        const stockSKU = stockData.some((v:IStockData) => v.sku === sku);
        const transactSKU = transactData.some((v:ITransactData) => v.sku === sku);

        if(!stockSKU && !transactSKU) return reject("no SKU found");

        const stock: (IStockData)[] = stockData.filter((p:IStockData) => p.sku === sku);

        if(!stock[0].stock) [...stock,{stock: 0}];

        const orderTransactions: (number) = transactData.filter((f:ITransactData)=> 
            f.sku === sku && f.type === "order"
        ).reduce((a,b)=> a + b.qty, 0);

        const refundTransactions: (number) = transactData.filter((f:ITransactData)=> 
            f.sku === sku && f.type === "refund"
        ).reduce((a,b)=> a + b.qty, 0);

        const totalStockLeft = (stock[0].stock - orderTransactions) + refundTransactions;

        resolve({
            sku: sku,
            qty: totalStockLeft
        });
    })
}

export const options = () => {
    return stockData.sort((a,b) => a.sku.localeCompare(b.sku)).map((val:IStockData) => {
        return <option value={val.sku} key={val.sku}>{val.sku}</option>
    }) 
};