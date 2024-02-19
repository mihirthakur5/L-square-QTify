import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Chip from "@mui/material/Chip";
import styles from "./CreateCard.module.css";


const CreateCard = ({ item }) => {
  return (
    <>
      <Card className={styles.card} sx={{ maxWidth: 159, maxHeight: 232 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="170"
            image={item.image}
            alt={item.title}
          />
          <CardContent className={styles.card_content}>
            <Chip className={styles.chip} label={`${item.follows} Follows`} />
          </CardContent>
        </CardActionArea>
      </Card>
      <div className={styles.album_name}>
        <Typography>{item.title}</Typography>
      </div>
    </>
  );
};

export default CreateCard;
