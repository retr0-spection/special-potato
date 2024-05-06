import { useNavigate } from "react-router-dom";

const UserItem = ({ user }) => {
    const navigate = useNavigate()
  return (
    <tr onClick={() => navigate(`/admin/user/edit/${user.id}`)}>
      <td>{user.fname}</td>
      <td>{user.lname}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
    </tr>
  );
};

export default UserItem;
