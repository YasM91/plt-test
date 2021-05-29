import Head from 'next/head';
import Home from './home/home';

const Index: React.FC = () => {
    return (
        <>
            <Head>
                <title>NFT Music</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" type="image/png" href="/static/images/favicon.ico" />
            </Head>
            <Home />
        </>
    );
};

export default Index;
