import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TaxonomyItemType } from '@/lib/types';

import TreeItem from '../Tree/TreeItem';

const mockItem: TaxonomyItemType = {
  taxon: 'Kingdom',
  name: 'Plantae',
  common_name: 'Plants',
  children: [
    {
      taxon: 'Family',
      name: 'Rosaceae',
      common_name: 'Rose family',
      children: undefined,
    },
  ],
};

const MockItemRenderer = ({ item }: { item: TaxonomyItemType }) => (
  <div data-testid="mock-item">{item.name}</div>
);

describe('TreeItem Component', () => {
  const defaultProps = {
    item: mockItem,
    indentSize: 20,
    ItemRenderer: MockItemRenderer,
    getChildren: (item: TaxonomyItemType) => item.children ?? [],
  };

  it('shows/hides children when toggled', async () => {
    const onToggle = jest.fn();
    render(<TreeItem {...defaultProps} onToggle={onToggle} />);

    const toggleButton = screen.getByRole('button');
    await userEvent.click(toggleButton);

    expect(onToggle).toHaveBeenCalledWith(mockItem);
  });

  it('handles keyboard navigation correctly', async () => {
    const onToggle = jest.fn();
    render(<TreeItem {...defaultProps} onToggle={onToggle} />);

    const treeItem = screen.getByRole('treeitem');
    treeItem.focus();

    await userEvent.keyboard('{ArrowRight}');
    expect(onToggle).toHaveBeenCalledWith(mockItem);
  });
});
