import Dropdown from '../../components/dropdown/dropdown';
import Card from "../../components/card/card";
import NavBar from "../../components/nav/navBar"
import { useState } from 'react';
import styles from "./home.module.scss";

const Home: React.FC = () => {
    const [stock, setStock] = useState<number | null>()
    return (
        <>
            <NavBar/>
            <Card>
                <Dropdown setState={setStock}/>
                <span className={styles.stockText}>{isNaN(stock) ? stock : `remaining stock: ${stock}`}</span>
            </Card>
        </>
    );
};

export default Home;
