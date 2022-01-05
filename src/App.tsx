import Card, { CardVariant } from "./components/Card";
import { UserList } from "./components/UserList";
import { IUser } from "./types/types";

function App() {
  const users: IUser[] = [
    {
      id: 1,
      name: "Nik",
      email: "nik@nik.com",
      address: {
        city: "Zaporizhzhie",
        zipcode: "69006",
        street: "Soborniy 77",
      },
    },
    {
      id: 2,
      name: "Edmiral Hakumba",
      email: "kingof_CONGO@drc.gov.com",
      address: {
        city: "Kinshasa",
        zipcode: "Postal codes are not used in Congo",
        street: "Diktator str",
      },
    },
  ];
  return (
    <div>
      <Card
        width="400px"
        height="400px"
        cursor="pointer"
        title="не нажимай!"
        variant={CardVariant.outlined}
        onClick={(num) => {
          alert(`${num} секунд без проишествий на странице`);
        }}
      >
        <img
          src="https://i.pinimg.com/474x/b5/12/42/b51242fccb4c559383eee0fe0295eeaf.jpg"
          alt=""
        />
        <h1 style={{ color: "white" }}>Mike Wazovski</h1>
      </Card>
      <UserList users={users} />
    </div>
  );
}

export default App;
