import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/config/store.ts';

export const useAppDispatch = () => useDispatch<AppDispatch>();
