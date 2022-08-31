import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { useEffect, useState } from "react";
function PostDetails() {
  const [postDetails, setPostDetails] = useState([]);

  //API Call
  useEffect(() => {
    axios
      .get("https://api.facthunt.in/fostergem/v1/post/list/public")
      .then((res) => {
        setPostDetails(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container-fluid post-bg">
      <div className="d-flex align-items-between justify-content-between">
        <Typography>Discover</Typography>
        <button className="btn btn-primary">+</button>
      </div>
      <div className="d-flex justify-content-center" style={{ display: "flex", flexWrap: "wrap" }}>
        {postDetails.map((postData) => {
          return (
            <Card sx={{ maxWidth: 350 ,maxHeight:440 }} className="mt-2 m-2">
              <CardMedia
                component="img"
                height="280"
                image={postData.coverImageUrl}
                alt="green iguana"
                className="image"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {
                    postData.title
                  }
                </Typography>
              </CardContent>
              <CardActions>
                <Avatar alt={postData.user.fname +" "+ postData.user.lname} src={postData.user.profilePic} />
                &nbsp;
                <Typography>{postData.user.fname +" "+ postData.user.lname}</Typography>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default PostDetails;
