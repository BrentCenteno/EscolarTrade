import { auth } from '@/lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { create } from 'zustand';

interface AuthState {
	user: User | null,
	init: () => void;
}

const useAuthStore = create<AuthState>()((set) => ({
	user: null,
	init: () => {
		const unsubAuth = onAuthStateChanged(auth, async (user) => {
			if (!user) {
				set({ user: null });
				return;
			}

			set({
				user,
			});

		});

		return unsubAuth;
	},
}));

export const useGetUser = () => useAuthStore((state) => state.user);
export const useAuthInit = () => useAuthStore((state) => state.init);
