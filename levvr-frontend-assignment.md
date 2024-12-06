# Design a Tree Component

You have recently joined a new engineering team tasked with building a React TypeScript app that consumes a taxonomy API and renders hierarchical tree data. While the backend engineers are still developing the API endpoint, you have been provided with a mock JSON file as an example of the expected response (attached).

Your task is to build a prototype of a tree component to present to your Product Manager. The prototype should fulfill the following basic requirements:

- React in TypeScript: Create a blank React app, either with create-vite or create-react-app. You are free to use any third-party libraries, except for the tree implementation itself.

- Tree Rendering: Render the taxonomy data as a tree structure where users can expand and collapse nodes to show or hide branches.

- Mocking Data: Since the API is still under development, mock the backend response using the provided JSON file.

- Testing: Consider covering your implementation with unit tests where appropriate.

- Documentation: Provide comments or documentation to explain the structure and logic of your component for easier maintenance.

## Additional Features

Your fellow UX designer is excited about this project and would love to see some of the following features implemented:

- Tree Search / Filter: Allow users to search within the tree and highlight matching nodes. Alternatively, you could implement filtering by hiding non-matching nodes.

- Initial State Configuration: Make it possible to configure the initial state of the tree, such as keeping specific nodes (e.g., "Malus domestica") open on mount.

- Keyboard Navigation: Enable keyboard interactions, such as using Arrow Right to expand a node and Arrow Left to collapse it.

## Reusability and Performance

The engineering team wants this component to be reusable across different parts of the application. Therefore, it would be super nice if your tree component could be:

- Be generic enough to allow other developers to customize, e.g. define custom onClick behavior or apply custom styles without modifying the core implementation.

- Be performant, even with a large number of nodes (e.g., 500+ nodes).

## Deliverables

Apart from the basic requirements, you do **not** have to implement all the mentioned features. Please prioritize based on what will deliver the most value to the user and contribute to the future work of the engineering team, all within the given timeframe.

Please submit the following:

- Source Code: Submit your source code including the git history in a zip file.

- Instructions: Include clear instructions on how to run your application locally.

Good luck, and we look forward to reviewing your work!
