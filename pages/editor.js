import React, { useEffect } from "react";
import dynamic from "next/dynamic";
const MonacoEditor = dynamic(import("react-monaco-editor"), { ssr: false });

export default function App() {
  const [iframeSrc, setIframeSrc] = React.useState("");
  const [html, setHtml] = React.useState(
    `<h1 class="text-center text-3xl text-yellow-600">Welcome to Educity Editor</h1>
    <p class="text-center   w-36 mx-auto rounded bg-blue-500 text-sm text-white mt-2 cursor-pointer shadow-lg hover:bg-blue-600 transform duration-300 scale-100 hover:scale-110" onclick="welcome()"> Click Me</p>

<div class="flex flex-col items-center align-center justify-center">
<div class="my-4">
    <h1 class="font-bold">Pre adedd Css Library</h1>
    <ul class="pl-7 list-disc">
        <li><a>Tailwind v2.2</a></li>
    </ul>
</div>
<div class="ml-4">
<h1 class="font-bold">Added Javascript Library</h1>
    <ul class="pl-7 list-disc">
        <li><a>Axios</a></li>
    </ul>
</div>
</div>
<p id="educity_demo" class="text-center bg-green-500 text-white mt-4"></p>
`
  );
  const [css, setCss] = React.useState(`body{
    background-image: url("https://image.freepik.com/free-vector/elegant-white-background-with-shiny-lines_1017-17580.jpg");
    background-size: cover;
}`);
  const [js, setJs] =
    React.useState(`const el = document.getElementById("educity_demo");
  async function welcome(){
      el.innerHTML = "Function Works!!"
  }`);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIframeSrc(`
        <head><link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
        </head>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.24.0/axios.min.js"></script>
        `);
    }, 600);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  // etc
  return (
    <div>
      <div className="w-full bg-coolGray-900 flex justify-between align-center items-center  overflow-visible  ">
        <div className="ml-3">
          <p className="bg-secondary mt-1 text-center text-gray-50 rounded-t-lg">
            HTML
          </p>
          <MonacoEditor
            width="32vw"
            height="400"
            language="html"
            theme="hc-black"
            editorWillMount={() => console.log("before load")}
            editorDidMount={() => console.log("Loaded")}
            value={html}
            options={{
              minimap: {
                enabled: true,
              },
            }}
            onChange={setHtml}
          />
        </div>

        <div className=" flex-shrink-0">
          <p className="bg-secondary mt-1 text-center text-gray-50 rounded-t-lg">
            CSS
          </p>
          <MonacoEditor
            width="32vw"
            height="400"
            className="shadow-md"
            language="css"
            theme="hc-black"
            value={css}
            options={{
              minimap: {
                enabled: false,
              },
            }}
            onChange={setCss}
          />
        </div>

        <div className="mr-3 flex-shrink-0">
          <p className="bg-secondary mt-1 text-center text-gray-50 rounded-t-lg">
            JS
          </p>
          <MonacoEditor
            width="32vw"
            height="400"
            language="javascript"
            theme="hc-black"
            value={js}
            options={{
              minimap: {
                enabled: false,
              },
            }}
            onChange={setJs}
          />
        </div>
      </div>
      <div className="text-gray-400 divider">Output [screen : 100vh]</div>

      <iframe
        srcDoc={iframeSrc}
        frameBorder="0"
        sandbox="allow-scripts"
        className="overflow-scroll h-screen border-2"
        width="100%"
        height="100%"
      />
    </div>
  );
}
