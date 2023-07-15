import { useState } from "react";
import { getColor } from "../constants/AppColors";

const Table = ({ schema, optionMenu, title }) => {
  const [data, setData] = useState([{ enabled: true, key: "", value: "" }]);

  const addItem = () => {
    setData([...data, { enabled: true, key: "", value: "" }]);
  };

  const deleteItem = (index) => {
    const updatedItems = [...data];
    updatedItems.splice(index, 1);
    setData(updatedItems);
  };

  return (
    <div className="w-full overflow-hidden ">
      <div className="flex flex-row pl-4 pt-2 pb-2">
        <p className=" text-gray-400 font-semibold text-sm">knkn{title}</p>
        <button onClick={addItem} className={`w-fill flex flex-col `}>
          +
        </button>
      </div>

      <table
        className={`w-full  flex flex-col h-full overflow-y-scroll no-scrollbar `}
      >
        <tbody className=" w-[100%] h-fit flex flex-col border-gray-700">
          {data.map((d, index) => {
            return (
              <Item
                key={index}
                index={index}
                propdata={d}
                onEnterPressed={addItem}
                onDelete={deleteItem}
              ></Item>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

export function Item({ propdata, index, onUpdate, onEnterPressed, onDelete }) {
  const [state, setstate] = useState({
    enabled: propdata.enabled,
    key: propdata.key,
    value: propdata.value,
  });

  const update = (key, value) => {
    setstate({ ...state, [key]: value });
  };

  const onEnter = (e) => {
    console.log(e.key, e.target);
    if (e.key === "Enter" && e.target.value.length > 0) {
      onEnterPressed();
    }
  };

  return (
    <tr className="flex w-full  ">
      <td className=" px-4 py-[10px] flex border border-[#282828]">
        <input type="checkbox" checked={state.enabled} onChange={(e) => {}} />
      </td>
      <td className=" px-4 py-1 flex w-full border border-[#282828]">
        <input
          type="text"
          className={`w-full text-orange-300 bg-transparent focus:outline-none`}
          placeholder={`key ${index + 1}`}
          value={state.key}
          onKeyDown={onEnter}
          onChange={(e) => {
            update("key", e.target.value);
          }}
        />
      </td>
      <td className=" px-4 py-1 flex w-full border border-[#282828]">
        <input
          type="text"
          className={`w-full text-gray-300  bg-transparent focus:outline-none`}
          placeholder={`value ${index + 1}`}
          value={state.value}
          onKeyDown={onEnter}
          onChange={(e) => {
            update("value", e.target.value);
          }}
        />
      </td>
      <td
        onClick={() => onDelete(index)}
        className=" px-4 py-1 box-border flex border border-[#282828]"
      >
        <div
          type="button"
          onClick={null}
          className="text-red-500  focus:outline-none"
        >
          <svg
            width={20}
            height={20}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 4h-4V3a3 3 0 00-3-3H8a3 3 0 00-3 3v1H1a1 1 0 000 2h1v11a3 3 0 003 3h8a3 3 0 003-3V6h1a1 1 0 100-2zM7 3a1 1 0 011-1h2a1 1 0 011 1v1H7V3zm7 14a1 1 0 01-1 1H5a1 1 0 01-1-1V6h10v11z"
              fill="tomato"
            />
          </svg>
        </div>
      </td>
    </tr>
  );
}
