import { useEffect, useState } from "react";
import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { Link } from "react-router-dom";

interface Blog {
  id: string;
  title: string;
  synopsis: string;
  content: string;
  featuredImg: string;
  createdAt: string;
  author: {
    firstName: string;
    lastName: string;
    username: string;
  };
}

const BlogListPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:5678/api/blogs");
        setBlogs(res.data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        All Blogs
      </Typography>

      {/* Button to create new blog */}
      <Button
        variant="contained"
        component={Link}
        to="/blogs/create"
        sx={{ mb: 3 }}
      >
        Create Blog
      </Button>

      {loading ? (
        <Typography>Loading...

        </Typography>

      ) : (
        <Grid container spacing={4}>
          {blogs.map((blog) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={blog.id}
              component="div"
              {...({} as any)}
            >
              <Card
  sx={{
    display: "flex",
    flexDirection: "column",
    height: "100%",
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "scale(1.02)",
      boxShadow: 6,
    },
  }}
>
  <CardMedia
    component="img"
    height="200"
    image={blog.featuredImg || "https://via.placeholder.com/400x200"}
    alt={blog.title}
    sx={{ objectFit: "cover" }}
  />
  <CardContent sx={{ flexGrow: 1 }}>
    <Typography variant="h6" gutterBottom>
      {blog.title}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {blog.content.slice(0, 120)}...
    </Typography>
    <Typography variant="caption" display="block" mt={1}>
      By {blog.author.firstName} {blog.author.lastName}
    </Typography>
  </CardContent>
  <CardActions sx={{ justifyContent: "flex-end" }}>
    <Button
      size="small"
      component={Link}
      to={`/blogs/${blog.id}`}
      variant="outlined"
    >
      Read More
    </Button>
  </CardActions>
</Card>

            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default BlogListPage;
