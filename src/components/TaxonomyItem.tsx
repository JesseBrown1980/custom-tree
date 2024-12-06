import { TaxonomyItemType } from '@/lib/types';

/**
 * TaxonomyItem component that displays a single taxonomy item
 * @param item - The taxonomy item to display
 */
export default function TaxonomyItem({ item }: { item: TaxonomyItemType }) {
  return (
    <div>
      <strong className="text-gray-800">{item.name}</strong> ({item.taxon})
      {item.common_name && (
        <em className="text-gray-500"> - {item.common_name}</em>
      )}
    </div>
  );
}
