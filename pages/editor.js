import React, { useEffect } from "react";
import Editor from "@monaco-editor/react";

import DrawerWrapper from "../components/wrapperRoutes/DrawerWrapper";
import RestrictedForMobile from "../components/restricted/forMobile";
const App = () => {
  const [iframeSrc, setIframeSrc] = React.useState("");
  const [html, setHtml] = React.useState(
    `<h1 class="text-center text-2xl text-yellow-600 mt-1">Welcome to Educity Editor</h1>
    <p class="text-center   w-36 mx-auto rounded bg-blue-500 text-sm text-white mt-2 cursor-pointer shadow-lg hover:bg-blue-600 transform duration-300 scale-100 hover:scale-110" onclick="welcome()"> Click Me</p>

<div class="flex  w-96 mx-auto items-center align-center justify-between">
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
<p class="text-gray-400 text-center text-sm mt-2">Created by Debanjan Tewary</p>
<p class="text-gray-400 text-center text-sm ">Powered by Microsoft Corporation (MONACO)</p>

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
    <>
      <DrawerWrapper>
        <div className="block lg:hidden">
          <RestrictedForMobile />
        </div>

        <div className="hidden lg:block">
          <div className=" w-full bg-coolGray-900 flex justify-between align-center items-center  overflow-visible   ">
            <div className="ml-3">
              <p className="bg-secondary mt-1 text-center text-gray-50 rounded-t-lg">
                HTML
              </p>
              <Editor
                width="32vw"
                height="400px"
                language="html"
                theme="hc-black"
                value={html}
                options={{
                  minimap: {
                    enabled: false,
                  },
                }}
                onChange={setHtml}
              />
            </div>
            <div className=" flex-shrink-0">
              <p className="bg-secondary mt-1 text-center text-gray-50 rounded-t-lg">
                CSS
              </p>
              <Editor
                width="32vw"
                height="400px"
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
              <Editor
                width="32vw"
                height="400px"
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
          {/* <div className="text-gray-400 divider">Output [screen : 100vh]</div> */}

          <iframe
            srcDoc={iframeSrc}
            frameBorder="0"
            sandbox="allow-scripts allow-forms"
            className="overflow-scroll h-screen border-t-4 border-b-4 -mb-6 border-secondary"
            width="100%"
            height="100%"
          />
        </div>
      </DrawerWrapper>
    </>
  );
};

export default App;
