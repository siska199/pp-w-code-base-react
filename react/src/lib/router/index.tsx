import LayoutType1 from '@components/layouts/LayoutType1';
import LandingPage from '@pages/LandingPage';
import IntroductionPage from '@pages/docs/IntroductionPage';
import AccordionPage from '@pages/docs/components/AccordionPage';
import AlertPage from '@pages/docs/components/AlertPage';
import AvatarPage from '@pages/docs/components/AvatarPage';
import BadgePage from '@pages/docs/components/BadgePage';
import ButtonPage from '@pages/docs/components/ButtonPage';
import LibraryPage from '@pages/docs/prerequisite/LibraryPage';
import { createBrowserRouter } from "react-router-dom";

const docRouter = {
    path: "docs",
    handle: {
        id: '1-I0',
    },
    children: [
        {
            index: true,
            element: <IntroductionPage />,
        },
        {
            path: 'prerequisite',
            handle: {
                id: '1-PR1'
            },
            children: [
                {
                    path: 'library',
                    element: <LibraryPage />,
                    handle: {
                        id: '2-L0'
                    }
                },
  ]
        },
        {
            path: 'components',
            handle: {
                id: '0-C0'
            },
            children: [
                {
                    path: 'accordion',
                    element: <AccordionPage />,
                    handle: {
                        id: '1-AC0'
                    }
                },
                {
                    path: 'alert',
                    element: <AlertPage />,
                    handle: {
                        id: '1-AL1'
                    }
                },
                {
                    path: 'avatar',
                    element: <AvatarPage />,
                    handle: {
                        id: '1-AV2'
                    }
                },
                {
                    path: 'badge',
                    element: <BadgePage />,
                    handle: {
                        id: '1-BA3'
                    }
                },
                {
                    path: 'button',
                    element: <ButtonPage />,
                    handle: {
                        id: '1-BU5'
                    }
                },
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