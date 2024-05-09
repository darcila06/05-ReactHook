import ReactDOM from "react-dom/client";
import "./index.css";
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { CounterApp } from './01-useState/CounterApp'
// import { HooksAPP } from './HooksAPP'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { Memorize } from './06-Memos/Memorize'
// import { MemoHook } from './06-Memos/MemoHook'
// import { CallbackHook } from './06-Memos/CallbackHook'
// import { Padre } from './07-tarea-memo/Padre'
// import './08-useReducer/intro-reducer'
// import { TodoApp } from './08-useReducer/TodoApp'

import { MainApp } from "./09-UseContext/MainApp";
import { BrowserRouter } from "react-router-dom";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <MainApp />
    </React.StrictMode>
  </BrowserRouter>
);
