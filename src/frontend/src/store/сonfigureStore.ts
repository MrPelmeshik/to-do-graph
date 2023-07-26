import {configureStore} from "@reduxjs/toolkit";
import reducer from "./themes/reducer";

export default configureStore({ reducer });