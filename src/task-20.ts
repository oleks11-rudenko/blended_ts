import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

const logThreePosts = (posts: Post[]) => {
  for (let i = 0; i < 3; i++) {
    console.log(posts[i].title);
    console.log(posts[i].body);
  }
};

fetchPosts()
  .then(response => logThreePosts(response))
  .catch(error => console.error(error));
