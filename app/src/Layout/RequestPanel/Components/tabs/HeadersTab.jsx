import { useContext, useEffect, useState } from "react";
import TableView from "../../../../GenericComponents/TableView";
import { MediatorContext } from "../../../../state/Providers/MediatorProvider";
import { HEADERS } from "../../../../constants/header_options";

function HeaderTab() {
	const { mediator } = useContext(MediatorContext);
	const [rows, setRows] = useState(mediator.header.get());
	// useEffect(() => {
	//   setRows([...mediator.header.getParams()]);
	// }, [data]);

	const addRow = () => {
		mediator.header.add({ enabled: true, key: "", value: "" });
		console.log(mediator.header.get());
		setRows([...mediator.header.get()]);
	};

	const onChange = ({ row, key, value }) => {
		mediator.header.update(row, key, value);
		setRows([...mediator.header.get()]);
	};

	const onDelete = ({ row }) => {
		mediator.header.remove(row);
		setRows([...mediator.header.get()]);
		mediator.header.debug();
		console.log(mediator.header.get());
	};
	return (
		<div className="w-full h-full flex flex-col">
			<div className="w-full h-[50px] text-gray-300 text-semibold px-5 box-border flex justify-between items-center border-b border-[#202020]">
				<p>Header</p>
				<button
					onClick={addRow}
					className="w-[30px] h-[30px] text-lg text-white rounded-md hover:bg-[#363636]  "
				>
					+
				</button>
			</div>
			<TableView
				showLabels={false}
				className="w-full text-sm"
				onDataChanged={onChange}
				onDelete={onDelete}
				columns={columns}
				data={rows}
			/>
		</div>
	);
}

const columns = [
	// {
	// 	name: "enabled",
	// 	label: "",
	// 	component: ({ value, onChange }) => (
	// 		// <input
	// 		// 	type="checkbox"
	// 		// 	className="w-[5px"
	// 		// 	checked={value}
	// 		// 	onChange={(e) => onChange(!value)}
	// 		// />
	// 		<></>
	// 	),
	// },
	{
		name: "key",
		label: "",
		component: ({ value, onChange, row }) => (
			// <input
			// 	className="bg-transparent focus:outline-none w-full font-semibold text-orange-300"
			// 	placeholder={`Key ${row}`}
			// 	type="text"
			// 	value={value}
			// 	onChange={(e) => onChange(e.target.value)}
			// />
			<select
				value={value}
				onChange={(e) => onChange(e.target.value)}
				className="bg-transparent focus:outline-none w-full font-semibold text-blue-300"
			>
				{HEADERS.map((header, i) => {
					return (
						<option key={i} value={header == "NONE" ? "" : header}>
							{header}
						</option>
					);
				})}
			</select>
		),
	},
	{
		name: "value",
		label: "",
		component: ({ value, onChange, row }) => (
			<input
				className="bg-transparent focus:outline-none w-full font-semibold text-orange-300"
				placeholder={`Value ${row}`}
				type="text"
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
		),
	},
	{
		name: "enabled",
		label: "",
		component: ({ value, onChange, deleteItem }) => (
			<div className="w-full flex justify-around">
				<input
					type="checkbox"
					className="w-[15px]"
					checked={value}
					onChange={(e) => onChange(!value)}
				/>
				<button
					onClick={deleteItem}
					className="text-red-500 focus:outline-none"
				>
					Delete
				</button>
			</div>
		),
	},
];

const data = [{ enabled: true, key: "", value: "" }];

export default HeaderTab;
