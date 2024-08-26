import { workflowsToAtoms } from "./transformer.js";

// Entrée
const inputJson = {
  workflows: {
    cmNyJ: {
      properties: { element_id: "cmNuA" },
      type: "ButtonClicked",
      id: "cmNyH",
      actions: {
        0: {
          properties: {
            value: "1d",
            element_id: "cmNth",
            custom_state: "custom.selected_",
          },
          type: "SetCustomState",
          id: "cmNyN",
        },
      },
    },
    cmNyU: {
      properties: { element_id: "cmNvI" },
      type: "ButtonClicked",
      id: "cmNyO",
      actions: {
        0: {
          properties: {
            value: "1m",
            element_id: "cmNth",
            custom_state: "custom.selected_",
          },
          type: "SetCustomState",
          id: "cmNyT",
        },
      },
    },
  },
};

const outputInJson = workflowsToAtoms(inputJson);
console.log(outputInJson);
