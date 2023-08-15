import { useContext, useState } from "react";
import { MediatorContext } from "../../../../../state/Providers/MediatorProvider";

export function useHeadersTab() {
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

	return {rows , addRow, onChange, onDelete };
}
