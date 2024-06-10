import { createBrowserRouter } from "react-router-dom";
import LayoutType1 from '@components/layouts/LayoutType1';
import AccordionPage from "@pages/docs/components/AccordionPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <LayoutType1 />
        ),
        errorElement: 'Not found',
        children: [
            {
                index: true,
                element: <AccordionPage />,
                handle: {
                    protected: true,
                    // code_permission: TTypePermission.MENU_DASHBOARD,
                    // layout: {
                    //     path: '/',
                    //     title: 'Dashboard',
                    // },
                },
            }
        ]
    }
])

export default router