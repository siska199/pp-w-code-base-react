import LayoutType1 from '@components/layouts/LayoutType1';
import AccordionPage from '@pages/docs/components/AccordionPage';
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
                    }
                ]
            }
        ]
    }
])

export default router