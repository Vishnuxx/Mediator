import { useEffect, useState } from "react";
import TableView from "../../../../GenericComponents/TableView";



function ParamTab() {
    const [rows, setRows] = useState(data);
    useEffect(() => {
      // This effect will only be triggered when `data` prop changes
      // So, it won't re-render other columns when one column updates.
      setRows(data);
    }, [data]);

    const addRow = () => {
      setRows([...rows, { enabled: true, key: "", value: "" }]);
    };

    const onChange = ({ row, key, value }) => {
      setRows((prevRows) => {
        const updatedRows = [...prevRows];
        updatedRows[row][key] = value;
        return updatedRows;
      });
    };

    const onDelete = ({ row }) => {
      setRows((old) => {
        return old.filter((r, i) => row !== i);
      });
      console.log(row);
    };
    return (
        <div className="w-full h-full flex flex-col">
    <div className="w-full h-[50px] text-gray-300 text-semibold px-5 box-border flex justify-between items-center border-b border-[#202020]">
        <p>Params</p>
        <button onClick={addRow} className="w-[30px] h-[30px] text-lg text-white rounded-md hover:bg-[#363636]  ">+</button>
    </div>
      <TableView
        showLabels={false}
        className="w-full"
        onDataChanged={onChange}
        onDelete={onDelete}
        schema={schema}
        data={rows}
      />
      </div>
    );
}

const schema = [
  {
    name: "enabled",
    label: "",
    component: ({ value, onChange }) => (
      <input
        type="checkbox"
        className="w-[5px"
        checked={value}
        onChange={(e) => onChange(!e.target.value)}
      />
    ),
  },
  {
    name: "key",
    label: "",
    component: ({ value, onChange, row }) => (
      <input
        className="bg-transparent focus:outline-none w-full  text-orange-300"
        placeholder={`Key ${row}`}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    ),
  },
  {
    name: "value",
    label: "",
    component: ({ value, onChange, row }) => (
      <input
        className="bg-transparent focus:outline-none w-full  text-orange-300"
        placeholder={`Value ${row}`}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    ),
  },
  {
    name: "value",
    label: "",
    component: ({ value, onChange, deleteItem }) => (
      <button onClick={deleteItem} className="text-red-500 focus:outline-none">
        Delete
      </button>
    ),
  },
];

const data = [
  { enabled: true, key: "", value: "" },
];

export default ParamTab;