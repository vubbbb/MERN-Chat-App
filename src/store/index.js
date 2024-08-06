import { create } from 'zustand';
import { creatAuthSlice } from './slices/auth-slice';

export const useAppStore = create()((...a) => ({
    ...creatAuthSlice(...a),
}));