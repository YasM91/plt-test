import { useCallback } from 'react';
import CardBox from '../../components/card/card';
import Grid from '@material-ui/core/Grid';
import { InferGetServerSidePropsType, GetServerSideProps } from 'next';

const Home = ({ list }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const cardBox = useCallback(() => {
        return list?.map((val: any) => {
            return (
                <CardBox
                    songURL="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                    artist="yas"
                    artistImage="https://qph.fs.quoracdn.net/main-qimg-20df28f3b31895e56cba6dbc0515c635"
                    image="https://cms-assets.tutsplus.com/uploads/users/114/posts/34296/image/Final-image.jpg"
                    title="hi"
                    price={200}
                    totalAmount={5}
                    amountLeft={7}
                    likes={2}
                />
            );
        });
    }, [list]);

    return (
        <>
            <Grid container spacing={3}>
                {cardBox()}
            </Grid>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`);
    const data = await res.json();
    const list = data.results;

    // Pass data to the page via props
    return { props: { list } };
};

export default Home;
