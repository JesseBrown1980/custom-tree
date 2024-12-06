import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TaxonomyItemType } from '@/lib/types';

import Tree from '../Tree/Index';

// Mock data for testing
const mockData: TaxonomyItemType[] = [
  {
    taxon: 'Kingdom',
    name: 'Plantae',
    common_name: 'Plants',
    children: [
      {
        taxon: 'Family',
        name: 'Rosaceae',
        common_name: 'Rose family',
        children: [
          {
            taxon: 'Species',
            name: 'Malus domestica',
            common_name: 'Apple tree',
            children: [],
          },
        ],
      },
    ],
  },
];

const MockItemRenderer = ({ item }: { item: TaxonomyItemType }) => (
  <div data-testid="mock-item">{item.name}</div>
);

describe('Tree Component', () => {
  const defaultProps = {
    items: mockData,
    ItemRenderer: MockItemRenderer,
    getChildren: (item: TaxonomyItemType) => item.children || [],
  };

  it('renders the tree with initial items', () => {
    render(<Tree {...defaultProps} />);
    expect(screen.getByText('Plantae')).toBeInTheDocument();
  });

  it('expands/collapses nodes on click', async () => {
    render(<Tree {...defaultProps} />);

    // Initially, child node should not be visible
    expect(screen.queryByText('Rosaceae')).not.toBeInTheDocument();

    // Click expand button
    const expandButton = screen.getByRole('button');
    await userEvent.click(expandButton);

    // Child node should now be visible
    expect(screen.getByText('Rosaceae')).toBeInTheDocument();

    // Click collapse button
    await userEvent.click(expandButton);

    // Child node should be hidden again
    expect(screen.queryByText('Rosaceae')).not.toBeInTheDocument();
  });

  it('supports keyboard navigation', async () => {
    render(<Tree {...defaultProps} />);

    const treeItem = screen.getByRole('treeitem');
    treeItem.focus();

    // Press arrow right to expand
    await userEvent.keyboard('{ArrowRight}');
    expect(screen.getByText('Rosaceae')).toBeInTheDocument();

    // Press arrow left to collapse
    await userEvent.keyboard('{ArrowLeft}');
    expect(screen.queryByText('Rosaceae')).not.toBeInTheDocument();
  });

  it('calls onItemClick when item is clicked', async () => {
    const onItemClick = jest.fn();
    render(<Tree {...defaultProps} onItemClick={onItemClick} />);

    const item = screen.getByText('Plantae');
    await userEvent.click(item);

    expect(onItemClick).toHaveBeenCalledWith(mockData[0]);
  });
});
