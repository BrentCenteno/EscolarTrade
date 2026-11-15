"use client";

import { useAuthInit } from "@/hooks/zustand/auth.store"
import { useEffect } from "react";

export const AuthInit = () => {
	const authInit = useAuthInit();

	useEffect(() => {
		authInit();
	}, [authInit])

	return null;
}
