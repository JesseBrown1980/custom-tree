export interface TaxonomyItemType {
  taxon: string;
  name: string;
  common_name: string;
  children?: TaxonomyItemType[];
}
