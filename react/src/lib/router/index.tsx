import LayoutType1 from '@components/layouts/LayoutType1';
import LandingPage from '@pages/LandingPage';
import IntroductionPage from '@pages/docs/IntroductionPage';
import PrerequisitePage from '@pages/docs/PrerequisitePage';
import AccordionPage from '@pages/docs/components/AccordionPage';
import AlertPage from '@pages/docs/components/AlertPage';
import BadgePage from '@pages/docs/components/BadgePage';
import { createBrowserRouter } from "react-router-dom";

const docRouter = {
    path: "docs",
    children: [
        {
            index: true,
            element: <IntroductionPage />
        },
        {
            path: 'prerequisite',
            element: <PrerequisitePage />
        },
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
        },
    ]
}

const router = createBrowserRouter([
    {
        path: "",
        errorElement: 'Not found',
        element: <LayoutType1 />,
        children: [
            {
                index: true,
                element: <LandingPage />,
                handle: {
                    isLandingPage: true
                },
            },
            docRouter
        ]
    },

])

export default router