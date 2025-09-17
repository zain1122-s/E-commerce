import { useContext } from 'react';
import { CardContext } from './CardContext';

export const useCart = () => useContext(CardContext);