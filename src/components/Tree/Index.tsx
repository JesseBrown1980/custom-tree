import { SearchIcon } from 'lucide-react';
import { useCallback, useState } from 'react';

import Input from '../Input';
import Loading from '../Loading';
import TreeItem from './TreeItem';

/**
 * Tree Component
 *
 * A generic tree component that renders hierarchical data with expandable nodes.
 * Features include:
 * - Search/filter functionality (optional)
 * - Keyboard navigation
 * - Custom item rendering
 * - Loading and error states
 * - Expand/collapse functionality
 *
 * @template T - The type of data being rendered in the tree
 */
interface TreeProps<T> {
  /** Array of top-level items to render in the tree */
  items: T[];
  /** Spacing for each level of indentation (in pixels) */
  indentSize?: number;
  /** Enable search/filter functionality */
  filter?: boolean;
  /** Placeholder text for the search input */
  filterPlaceholder?: string;
  /** Custom class name for the Tree component */
  className?: string;
  /** Component to render individual tree items */
  ItemRenderer: React.ComponentType<{ item: T }>;
  /** Error message to display */
  error?: string | null;
  /** Loading state of the tree */
  loading?: boolean;
  /** Function to get children of an item */
  getChildren: (item: T) => T[] | undefined;
  /** Function to determine if an item matches the search term */
  searchFilter?: (item: T, searchTerm: string) => boolean;
  /** Callback when an item is clicked */
  onItemClick?: (item: T) => void;
}

const Tree = <T,>({
  items,
  indentSize = 20,
  filter = false,
  filterPlaceholder = 'Search...',
  className,
  ItemRenderer,
  error,
  loading = false,
  getChildren,
  searchFilter,
  onItemClick,
}: TreeProps<T>) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState<Set<T>>(new Set());
  const [focusedItemId, setFocusedItemId] = useState<string>('');

  //Toggle expand/collapse for a tree item
  const handleToggle = useCallback((item: T) => {
    setExpandedItems((prev) => {
      const newExpanded = new Set(prev);
      if (newExpanded.has(item)) {
        newExpanded.delete(item);
      } else {
        newExpanded.add(item);
      }
      return newExpanded;
    });
  }, []);

  // Add this new function to expand parents of matching items
  const expandMatchingParents = useCallback(
    (items: T[], term: string) => {
      const newExpanded = new Set<T>();

      const processItem = (item: T) => {
        const children = getChildren(item);
        if (!children) return false;

        const hasMatchingChild = children.some((child) => {
          const childMatches =
            searchFilter?.(child, term) || processItem(child);
          if (childMatches) {
            newExpanded.add(item);
          }
          return childMatches;
        });

        return searchFilter?.(item, term) || hasMatchingChild;
      };

      items.forEach((item) => processItem(item));
      return newExpanded;
    },
    [getChildren, searchFilter]
  );

  // Update search term handler to also expand matching parents
  const handleSearchTermChange = useCallback(
    (term: string) => {
      setSearchTerm(term);
      if (term) {
        setExpandedItems(expandMatchingParents(items, term));
      } else {
        setExpandedItems(new Set());
      }
    },
    [items, expandMatchingParents]
  );

  //Focus change handler for a tree item
  const onFocusChange = useCallback((id: string) => {
    setFocusedItemId(id);
  }, []);

  return (
    <div>
      {filter && (
        <Input
          placeholder={filterPlaceholder}
          onChange={(e) => handleSearchTermChange(e.target.value)}
          value={searchTerm}
          icon={<SearchIcon className="h-5 w-5" />}
        />
      )}
      {error && <div className="pt-2 text-center text-red-500">{error}</div>}
      {loading && <Loading loading={loading} />}
      {items.length === 0 && !loading && (
        <div className="py-4 text-center text-gray-500">No results found</div>
      )}
      <div className="pt-4">
        {items.map((item, index) => (
          <TreeItem<T>
            key={index}
            indentSize={indentSize}
            item={item}
            ItemRenderer={ItemRenderer}
            className={className}
            focusId={focusedItemId}
            expandedItems={expandedItems}
            searchTerm={searchTerm}
            getChildren={getChildren}
            onToggle={handleToggle}
            itemMatchesSearch={searchFilter}
            onFocusChange={onFocusChange}
            onItemClick={onItemClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Tree;
