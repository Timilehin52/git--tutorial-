import { Link } from "react-router";

export const users = [
  { id: 1, name: "Jay-Jay", Occaption: "Football Analyst" },
  { id: 2, name: "BOB", Occaption: "Football Fan's Club Leader" },
  { id: 3, name: "COLE PALMER", Occaption: "Football Player" },
  { id: 3, name: "Sheriff", Occaption: "Basketball Player" },
];

const Home = () => {
  return (
    <>
      <Link to="/about">To About page</Link>
      {users.map((user) => {
        return (
          <Link
            to={`/user/${user.id}  `}
            className="flex flex-col gap-5 text-xl justify-center items-center h-40"
          >
            {user.name}
          </Link>
        );
      })}
    </>
  );
};
export default Home;
