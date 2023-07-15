import { getColor } from "../../constants/AppColors";


const TableComponent = () => {
  return (
    <table className={`w-full`}>
      <thead className="w-full">
       
      </thead>
      <tbody className="border-b w-full flex flex-col overflow-scroll border-gray-700">
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        {/* Additional rows */}
      </tbody>
    </table>
  );
};

export default TableComponent;


function Item() {
    return (
      <tr className="flex w-fill">
        <td className=" px-4 py-2 flex w-full">
          <input type="checkbox" defaultChecked={true} />
        </td>
        <td className=" px-4 py-2 flex w-full">
          <input
            type="text"
            className={`w-full font-semibold text-orange-300 bg-transparent focus:outline-none`}
            placeholder="Input 1"
          />
        </td>
        <td className=" px-4 py-2 flex w-full">
          <input
            type="text"
            className={`w-full font-semibold text-purple-300  bg-transparent focus:outline-none`}
            placeholder="Input 2"
          />
        </td>
        <td className=" px-4 py-2 box-border flex w-full">
          <button className="text-red-500 focus:outline-none">Delete</button>
        </td>
      </tr>
    );
}

