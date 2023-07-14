const theme = {
  background: ["#ffffff", "#171717"],
  secondaryBg: ["#e0e0e0", "#252525"],
  appbar: ["#eeeeee", "#262626"],
  border: ["#e0e0e0", "#222222"],
  activeTabBg: ["ffffff", "#202020"],
  textColor : ["#000000" , "#ffffff"]
};

const isDarkTheme = true


export const getColor = (name) => {
    return theme[name][isDarkTheme? 1 : 0];
}