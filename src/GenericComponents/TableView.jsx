import React, { useCallback } from "react";

const TableView = ({
  className,
  schema,
  showLabels = true,
  data,
  onDataChanged = ({ row, key, value }) => {},
  onDelete = ({ row }) => {},
}) => {
  const handleColumnChange = useCallback((rowIndex, columnName, value) => {
    onDataChanged({ row: rowIndex, key: columnName, value: value });
  }, []);

  return (
    <div className={className}>
      <table className="w-full flex flex-col">
        {showLabels ? (
          <thead className="w-full">
            <tr className="w-full">
              {schema.map((column, index) => (
                <th key={index} className=" p-2">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
        ) : (
          <></>
        )}

        <tbody className="w-full flex flex-col">
          {data.map((row, rowIndex) => (
            <tr className="w-full flex flex-row" key={rowIndex}>
              {schema.map((column, columnIndex) => (
                <td key={columnIndex} className=" px-4 py-2 w-full flex border-[0.1px] border-gray-800">
                  {column.component ? (
                    <column.component
                      value={row[column.name]}
                      row={rowIndex}
                      column={columnIndex}
                      deleteItem={() => {
                        onDelete({ row: rowIndex });
                      }}
                      onChange={(value) =>
                        handleColumnChange(rowIndex, column.name, value)
                      }
                    />
                  ) : (
                    row[column.name]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
