import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorderOutlined';
import styles from './card.module.css';
import Grid from '@material-ui/core/Grid';

interface Props {
    image: string;
    title: string;
    price: number;
    totalAmount: number;
    amountLeft: number;
    likes: number;
    artist: string;
    artistImage: string;
    songURL: string;
}

const CardBox: React.FC<Props> = ({
    image,
    title,
    price,
    totalAmount,
    amountLeft,
    likes,
    artist,
    artistImage,
    songURL
}) => {
    const [liked, setLiked] = useState<boolean>(false);

    return (
        <Grid item xs={6} sm={4} md={3} lg={2}>
            <Card className={styles.root}>
                <div className={styles.name}>
                    <Avatar alt={artist} src={artistImage} />
                    {artist}
                </div>
                <CardMedia component="img" image={image} height={200} />
                <CardMedia component="audio" src={songURL} image={image} controls />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h5">
                        {title}
                    </Typography>
                    <Typography variant="h6" color="textSecondary" component="h6">
                        {`£ ${price}`}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {`${amountLeft} of ${totalAmount}`}
                    </Typography>
                </CardContent>
                <CardActions className={styles.likes}>
                    <span>
                        <IconButton
                            color="secondary"
                            aria-label="add an alarm"
                            onClick={() => setLiked(!liked)}
                        >
                            {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                        </IconButton>
                        {likes}
                    </span>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default CardBox;
