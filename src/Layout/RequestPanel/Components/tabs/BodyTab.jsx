import ReactCodeMirror from "@uiw/react-codemirror";
import { useState } from "react";
import { githubDark } from "@uiw/codemirror-theme-github";
import createTheme from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";

function BodyTab() {
    const [state, setstate] = useState({
        code : ""
    });
    let options = {
			lineNumbers: true,
			smartIndent: true,
			indentWithTabs: true,
			indentUnit: 2,
			tabSize: 4,
			theme: "dracula",
			lineWrapping: true,
			mode: { name: "javascript", json: true },
			// theme: "material-dark",
		};

    const updateCode = (newcode) => {
        setstate({
            code : newcode
        })
    }
  return (
		<div className="w-full h-full overflow-scroll  text-start ">
			<div className="w-full h-[50px]  text-gray-300 text-semibold px-5 box-border flex justify-between items-center border-b border-[#202020]">
				<p>body</p>
			</div>
			<div className="overflow-scroll flex bg-black">
				<ReactCodeMirror
          className="w-full h-full overflow-scroll"
					placeholder="//Enter the body"
					value={state.code}
					theme={myTheme}
					onChange={updateCode}
					options={options}
				/>
			</div>
		</div>
	);
}

export default BodyTab;

const myTheme = createTheme({
	dark: "dark",
	settings: {
		background: "#0c0c0c",
		foreground: "#ffffff",
		caret: "#AEAFAD",
		selection: "#2d2e34",
		selectionMatch: "#dedede",
		gutterBackground: "#0c0c0c",
		gutterForeground: "#4D4D4C",
		gutterBorder: "#dddddd",
		gutterActiveForeground: "#4b4949",
		lineHighlight: "#5f6367",
	},
	styles: [
		{ tag: t.comment, color: "#787b80" },
		{ tag: t.definition(t.typeName), color: "#194a7b" },
		{ tag: t.typeName, color: "#194a7b" },
		{ tag: t.tagName, color: "#8ab1ff" },
		{ tag: t.standard(t.tagName), color: "#c78585" },
		{ tag: t.variableName, color: "#fbd05b" },
		{ tag: t.propertyName, color: "#e16e66" },
		{ tag: t.attributeName, color: "#ff7a81" },
		{ tag: t.string, color: "#3cc853" },
		{ tag: t.attributeValue, color: "#51c85f" },
	],
});