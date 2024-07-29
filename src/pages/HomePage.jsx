import { Helmet } from "react-helmet";
import { Welcome } from "../components/Welcome/Welcome";

export default function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Welcome />
    </div>
  );
}
