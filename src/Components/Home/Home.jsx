// import Components
import { Layout, About, CommentOfClient } from "./index";

const Home = () => {
  return (
    <Layout>
      <h1>home</h1>
      <CommentOfClient />
      <About />
    </Layout>
  );
};

export default Home;
