import { getColor } from "../../constants/AppColors";


const TableComponent = () => {
  return (
    <table className={`w-fill`}>
      <thead>
        <tr className="flex flex-row justify-around">
          <th className=" px-4 py-2 flex"></th>
          <th className=" px-4 py-2 flex">Key</th>
          <th className=" px-4 py-2 flex ">Value</th>
          <th className=" px-4 py-2 flex"></th>
        </tr>
      </thead>
      <tbody className="border-b w-[100%] flex flex-col overflow-scroll border-gray-700">
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
        <td className=" px-4 py-2 flex">
            <input type="checkbox" defaultChecked={true}/>
        </td>
        <td className=" px-4 py-2 flex">
          <input
            type="text"
            className={`w-full font-semibold text-orange-300 bg-transparent focus:outline-none`}
            placeholder="Input 1"
          />
        </td>
        <td className=" px-4 py-2 flex">
          <input
            type="text"
            className={`w-full font-semibold text-purple-300  bg-transparent focus:outline-none`}
            placeholder="Input 2"
          />
        </td>
        <td className=" px-4 py-2 box-border flex">
          <button className="text-red-500 focus:outline-none">Delete</button>
        </td>
      </tr>
    );
}
