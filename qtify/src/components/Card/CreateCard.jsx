import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Tooltip } from "@mui/material";
import Chip from "@mui/material/Chip";
import styles from "./CreateCard.module.css";

function CreateCard({ item, children }) {
  const { image, follows, title, songs } = item;

  return (
    <>
      <Card className={styles.card} sx={{ maxWidth: 159, maxHeight: 232 }}>
        <CardActionArea>
          <CardMedia component="img" height="170" image={image} alt={title} />
          <CardContent className={styles.card_content}>
            {!children ? (
              <Chip className={styles.chip} label={`${follows} Follows`} />
            ) : (
              <Chip className={styles.chip} label={`${item.likes} Likes`} />
            )}
          </CardContent>
        </CardActionArea>
      </Card>
      <div className={styles.album_name}>
        <Typography>{title}</Typography>
      </div>
    </>
  );
}

export default CreateCard;
