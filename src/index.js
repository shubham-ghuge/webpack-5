import App from "./app";

const root = document.getElementById("root");
root.innerHTML = `
<h1> learning web tooling today </h1>
${App({ name: "Tanay" })}
`;