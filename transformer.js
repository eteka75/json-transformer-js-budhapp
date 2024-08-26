export const workflowsToAtoms = (jsonData) => {
  const atoms = {};

  for (const workflowId in jsonData.workflows) {
    const workflowData = jsonData.workflows[workflowId];
    const elementId = workflowData.properties.element_id;

    if (!atoms[elementId]) {
      atoms[elementId] = {
        uid: elementId,
        logic: {},
      };
    }

    const atomLogic = atoms[elementId].logic;
    atomLogic[workflowId] = {
      nodes: {
        [workflowData.id]: {
          uid: workflowData.id,
          type: workflowData.type,
        },
      },
      connections: {},
    };

    for (const actionId in workflowData.actions) {
      const actionData = workflowData.actions[actionId];
      atomLogic[workflowId].nodes[actionData.id] = {
        uid: actionData.id,
        type: actionData.type,
        parameters: actionData.properties,
      };
      atomLogic[workflowId].connections[workflowData.id] = {
        success: {
          [actionData.id]: { order: parseInt(actionId), to: actionData.id },
        },
      };
    }
  }

  return { atoms };
};
