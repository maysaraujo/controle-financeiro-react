import * as C from './style';
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from 'react-icons/fa';

const GridItem = ({ item, onDelete }) => {
  return (
    <C.Tr>
      <C.Td>{item.desc}</C.Td>
      <C.Td>{item.amount}</C.Td>
      <C.Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color='red' />
        ) : (
          <FaRegArrowAltCircleUp color='green' />
        )}
      </C.Td>
      <C.Td alignCenter>
        <FaTrash
          style={{ cursor: 'pointer' }}
          onClick={() => onDelete(item.id)}
        />
      </C.Td>
    </C.Tr>
  );
};

export default GridItem;
