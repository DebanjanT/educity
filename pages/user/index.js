import UserWrapper from "../../components/wrapperRoutes/userWrapper";
import { useContext } from "react";
import { Context } from "../../context";
const UserDashboard = () => {
  const { state: user } = useContext(Context);

  return (
    <UserWrapper>
      <h1>
        <pre>{JSON.stringify(user, null, 4)}</pre>
      </h1>
    </UserWrapper>
  );
};
export default UserDashboard;
