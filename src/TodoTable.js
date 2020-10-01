import React from "react";
const TodoTable = (props) => {
  return (
    <table>
      <tbody>
        {props.data.map((item, i) => (
          <tr key={i}>
            <td>{item.date}</td>
            <td>{item.description}</td>
            <td>
              <button
                id={i}
                type="button"
                onClick={(e) => props.handleDelete(e)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodoTable;
