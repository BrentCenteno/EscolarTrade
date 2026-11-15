import { User } from 'firebase/auth';
import { create } from 'zustand';

interface AuthState {
	user: User | null,
	init: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
	user: null,

	init: () => void
}));
