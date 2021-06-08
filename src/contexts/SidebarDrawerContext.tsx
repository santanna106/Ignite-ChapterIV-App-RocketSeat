import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/hooks";
import { createContext,ReactNode, useContext, useEffect } from "react";
import {useRouter } from 'next/router';

interface SidebarDrawerProviderProps {
    children: ReactNode;
}
type SidebarDrawerContextData = UseDisclosureReturn;

const SideBarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({children} : SidebarDrawerProviderProps) {
    const  disclosure = useDisclosure();
    const router = useRouter();

    useEffect(() => {
        disclosure.onClose();
    },[router.asPath])

    return (
        <SideBarDrawerContext.Provider value={disclosure}>
            {children}
        </SideBarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SideBarDrawerContext);