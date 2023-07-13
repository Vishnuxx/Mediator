const theme = {
  background: ["#ffffff", "#1f1f1f"],
};

const isDarkTheme = true


export const getColor = (name) => {
    return theme[name][isDarkTheme? 1 : 0];
}