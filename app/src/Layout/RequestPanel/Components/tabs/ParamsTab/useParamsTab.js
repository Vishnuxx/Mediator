import { useContext, useState } from "react";
import { MediatorContext } from "../../../../../state/Providers/MediatorProvider";

export function useParamsTab() {
	const { mediator } = useContext(MediatorContext);
	const [rows, setRows] = useState(mediator.params.get());

	const addRow = () => {
		mediator.params.add({ enabled: true, key: "", value: "" });
		console.log(mediator.params.get());
		setRows([...mediator.params.get()]);
	};

	const onChange = ({ row, key, value }) => {
		mediator.params.update(row, key, value);
		setRows([...mediator.params.get()]);
	};

	const onDelete = ({ row }) => {
		mediator.params.remove(row);
		setRows([...mediator.params.get()]);
	};

	return { rows, addRow, onChange, onDelete };
}
