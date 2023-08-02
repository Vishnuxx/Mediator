import { useContext, useEffect, useState } from "react";
import TableView from "../../../../GenericComponents/TableView";
import { MediatorContext } from "../../../../state/Providers/MediatorProvider";



function ParamTab() {
  const {mediator} = useContext(MediatorContext)
    const [rows, setRows] = useState(mediator.params.getParams());
    // useEffect(() => {
    //   setRows([...mediator.params.getParams()]);
    // }, [data]);

    const addRow = () => {
    
      mediator.params.addParam({ enabled: true, key: "", value: "" });
        console.log(mediator.params.getParams())
        setRows([...mediator.params.getParams()]);
    };

    const onChange = ({ row, key, value }) => {
      mediator.params.updateParam(row , key , value );
      setRows([...mediator.params.getParams()]);
    };

    const onDelete = ({ row }) => {
      mediator.params.removeParam(row)
      setRows([...mediator.params.getParams()]);
      mediator.params.debug()
      console.log(mediator.params.getParams());
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
        columns={columns}
        data={rows}
      />
      </div>
    );
}

const columns = [
  {
    name: "enabled",
    label: "",
    component: ({ value, onChange }) => {
      console.log(value)
      return <input
        type="checkbox"
        className="w-[15px] h-[15px]"
        checked={value}
        onChange={(e) => onChange(!value)}
      />
    },
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