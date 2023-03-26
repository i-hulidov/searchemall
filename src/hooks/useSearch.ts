import { useState } from 'react';

import useDebounce from './useDebounce';
import { TUseSearchReturn } from '../types';

const useSearch = (): TUseSearchReturn => {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery.toLowerCase().trim());

  return { searchQuery, setSearchQuery, debouncedSearchQuery };
};

export default useSearch;
