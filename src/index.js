import App from "./app";

const root = document.getElementById("root");
root.innerHTML = `
<h1> Vanilla JS webpack starter </h1>
${App({ name: "world" })}
`;