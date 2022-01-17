import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";

import DrawerWrapper from "../components/wrapperRoutes/DrawerWrapper";
import RestrictedForMobile from "../components/restricted/forMobile";
const App = () => {
  const [visible, setVisible] = useState(true);
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
<p class="text-gray-400 text-center text-sm ">Start editing on Editor to reflect the change </p>

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

  function handleVisible() {
    if (visible == true) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }

  // etc

  return (
    <>
      <DrawerWrapper>
        <div className="block lg:hidden">
          <RestrictedForMobile />
        </div>

        <div className="hidden lg:block">
          <div className="w-full bg-gray-900 border-b-2 border-dashed border-gray-600">
            <div className="py-1">
              {visible ? (
                <div className="flex items-center align-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 cursor-pointer text-red-500 mr-1"
                    onClick={() => handleVisible()}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                  <p
                    onClick={() => handleVisible()}
                    className="cursor-pointer text-sm text-gray-50"
                  >
                    Hide Editor
                  </p>
                </div>
              ) : (
                <div className="flex items-center align-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-xs cursor-pointer text-green-500 mr-1"
                    onClick={() => handleVisible()}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <p
                    onClick={() => handleVisible()}
                    className="cursor-pointer text-sm text-gray-50"
                  >
                    Show Editor
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* editors */}
          {visible && (
            <div className=" w-full bg-coolGray-900 flex justify-between align-center items-center  overflow-visible   ">
              <div className="ml-3 text-white">
                <p className="bg-secondary mt-1 text-center text-gray-900 font-semibold rounded-t-lg">
                  HTML
                </p>
                <Editor
                  width="32vw"
                  height="400px"
                  language="html"
                  loading={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-primary animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="text-sm">
                        Loading Educity HTML Editor...
                      </span>
                    </>
                  }
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
              <div className=" flex-shrink-0 text-white">
                <p className="bg-secondary mt-1 text-center text-gray-900 font-semibold rounded-t-lg">
                  CSS
                </p>
                <Editor
                  width="32vw"
                  height="400px"
                  className="shadow-md"
                  language="css"
                  theme="hc-black"
                  loading={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-primary animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="text-sm">
                        Loading Educity CSS Editor...
                      </span>
                    </>
                  }
                  value={css}
                  options={{
                    minimap: {
                      enabled: false,
                    },
                  }}
                  onChange={setCss}
                />
              </div>

              <div className="mr-3 flex-shrink-0 text-white">
                <p className="bg-secondary mt-1 text-center text-gray-900 font-semibold rounded-t-lg">
                  JS
                </p>
                <Editor
                  width="32vw"
                  height="400px"
                  language="javascript"
                  theme="hc-black"
                  loading={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-primary animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="text-sm">
                        Loading Educity JS Editor...
                      </span>
                    </>
                  }
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
          )}
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
