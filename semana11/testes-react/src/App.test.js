import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test ("Adiciona um post", async()=>{
    let {getByText} = render (<App />);
    let addButton = getByText(/Adicionar/i)

    fireEvent.click(addButton)
    
})