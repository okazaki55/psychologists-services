import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Site başlığı</h1>
      <p>şirket sloganı</p>
      <Link to="/psychologists">psikologları incele</Link>
    </div>
  );
};

export default Home;
