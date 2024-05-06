import { useNavigate } from "react-router-dom";

const StockItem = ({ item }) => {
    const navigate = useNavigate()
  return (
    <tr onClick={() => navigate(`/admin/stock/edit/${item.itemId}`)}>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td>{item.price}</td>
      <td>{item?.totalCount}</td>
    </tr>
  );
};

export default StockItem;
