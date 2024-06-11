import LayoutType1 from '@components/layouts/LayoutType1';
import AccordionPage from '@pages/docs/components/AccordionPage';
import AlertPage from '@pages/docs/components/AlertPage';
import BadgePage from '@pages/docs/components/BadgePage';
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: 'docs',
        element: (
            <LayoutType1 />
        ),
        errorElement: 'Not found',
        children: [
            {
                path: 'components',
                children: [
                    {
                        path: 'accordion',
                        element: <AccordionPage />
                    },
                    {
                        path: 'alert',
                        element: <AlertPage />
                    },
                    {
                        path: 'badge',
                        element: <BadgePage />
                    }
                ]
            }
        ]
    }
])

export default router