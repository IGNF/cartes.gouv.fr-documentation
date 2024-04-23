// Apply dark mode to mermaid graphs when needed. Only activated on page load.
var mermaidDarkMode = false;
if(localStorage.getItem("scheme")){
    if(localStorage.getItem("scheme") == "dark"){
        mermaidDarkMode = true;
    }
} else if(!window.matchMedia) {
    //matchMedia method not supported, nothing to do
} else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //OS theme setting detected as dark
    mermaidDarkMode = true;
}

mermaid.initialize({
    startOnLoad: true,
    theme: 'base',
    themeVariables: {
        background: '#fff',
        darkMode: mermaidDarkMode,
        fontFamily: 'Marianne,arial,sans-serif',
        fontSize: '16px',
        textColor: mermaidDarkMode ? '#fff' : '#000',
        arrowheadColor : mermaidDarkMode ? '#fff' : '#000',
        lineColor : mermaidDarkMode ? '#fff' : '#000',
        noteBkgColor: '#eee', // grey-950
        primaryColor: '#6a6af4', // blue-france-main-525
        primaryTextColor: '#fff',
        primaryBorderColor: '#000091', // blue-france-sun-113
        secondaryColor: mermaidDarkMode ? '#1b1b35' : '#cacafb', // blue-france-850 //
        tertiaryColor: '#fff'
    }
});