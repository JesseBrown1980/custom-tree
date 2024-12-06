# Tree Component Demo

A React TypeScript implementation of a hierarchical tree component that renders taxonomy data with features like search, keyboard navigation, and customizable rendering.

## 🚀 Features

- **Tree Visualization**: Expandable/collapsible tree structure
- **Search/Filter**: Real-time search with highlighting
- **Keyboard Navigation**: Arrow keys and Enter for interaction
- **Accessibility**: ARIA attributes and keyboard support
- **Customizable**: Generic implementation for different data types
- **Performance**: Optimized for large datasets (500+ nodes)
- **TypeScript**: Full type safety and documentation

## 🛠️ Technologies

- React 18
- TypeScript
- Vite
- TailwindCSS
- Jest & Testing Library
- ESLint & Prettier

## 📦 Installation

1. Extract the zip file to your desired location

2. Install dependencies:
   ```bash
   npm install
   ```

## 🚀 Running the Application

### Development Mode

```bash
npm run dev
```

This will start the development server at `http://localhost:5173`. Open this URL in your browser to view the application.

### Production Build

```bash
npm run build
npm run preview
```

### Running Tests

```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 🧪 Testing

The project includes comprehensive tests using Jest and React Testing Library. Key test cases cover:

- Tree rendering and expansion
- Search functionality
- Keyboard navigation
- Accessibility features

## 📁 Project Structure

```
src/
├── components/
│   ├── Tree/
│   │   ├── Index.tsx      # Main tree component
│   │   └── TreeItem.tsx   # Individual tree node component
│   ├── Input.tsx          # Reusable input component
│   ├── Loading.tsx        # Loading spinner component
│   └── TaxonomyItem.tsx   # Custom renderer for taxonomy data
├── lib/
│   └── types.ts           # TypeScript interfaces
├── utils/
│   └── taxonomy.json      # Mock data
└── App.tsx                # Root component
```

## 🔧 Configuration

### Environment Variables

No environment variables are required to run this project.

### TypeScript Configuration

The project uses TypeScript with strict mode enabled. Configuration can be found in:

- `tsconfig.json`
- `tsconfig.app.json`
- `tsconfig.node.json`

### ESLint & Prettier

Code style is enforced using ESLint and Prettier. Configuration files:

- `.eslintrc.js`
- `.prettierrc.cjs`

## 🎯 Usage Example

### Importing the Tree Component

To use the Tree component in your project, first import it along with any necessary types and components:

```tsx
import Tree from './components/Tree';
import { TaxonomyItemType } from './lib/types';
import TaxonomyItem from './components/TaxonomyItem';
```

### Basic Usage

Here's a basic example of how to render the Tree component with some mock data:

```tsx
import Tree from './components/Tree';
import { TaxonomyItemType } from './lib/types';
import TaxonomyItem from './components/TaxonomyItem';

function App() {
  const data: TaxonomyItemType[] = [
    // Add your mock data here
  ];

  return (
    <Tree<TaxonomyItemType>
      items={data}
      filter={true}
      ItemRenderer={TaxonomyItem}
      filterPlaceholder="Search..."
      getChildren={(item) => item.children}
      onItemClick={(item) => console.log('Clicked:', item)}
    />
  );
}
```

### Props

- **items**: An array of top-level items to render in the tree.
- **indentSize**: (Optional) Spacing for each level of indentation in pixels. Default is `20`.
- **filter**: (Optional) Enable search/filter functionality. Default is `false`.
- **filterPlaceholder**: (Optional) Placeholder text for the search input. Default is `'Search...'`.
- **className**: (Optional) Custom class name for the Tree component.
- **ItemRenderer**: A component to render individual tree items.
- **error**: (Optional) Error message to display.
- **loading**: (Optional) Loading state of the tree. Default is `false`.
- **getChildren**: A function to get children of an item.
- **searchFilter**: (Optional) A function to determine if an item matches the search term.
- **onItemClick**: (Optional) Callback when an item is clicked.

### Customization

- **ItemRenderer**: You can customize how each item is rendered by providing your own component. This component will receive the item as a prop.
- **searchFilter**: Implement custom logic to filter items based on the search term.

### Example

Here's an example of a custom `ItemRenderer`:

```tsx
const CustomItemRenderer = ({ item }: { item: TaxonomyItemType }) => (
  <div>
    <strong>{item.name}</strong> ({item.taxon})
  </div>
);
```

And using it in the Tree component:

```tsx
<Tree<TaxonomyItemType>
  items={data}
  ItemRenderer={CustomItemRenderer}
  getChildren={(item) => item.children}
/>
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code
- `npm run format` - Format code
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
