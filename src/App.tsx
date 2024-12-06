import TaxonomyTree from './components/TaxonomyTree';

/**
 * Root component that renders the main application layout
 * and demonstrates the TaxonomyTree component
 */
export default function App() {
  return (
    <div className="container flex flex-col items-center p-4">
      <h1 className="mb-10 text-2xl font-semibold text-primary">
        Tree Component Demo
      </h1>
      <TaxonomyTree />
    </div>
  );
}
