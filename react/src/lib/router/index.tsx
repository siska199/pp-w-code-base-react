import LayoutType1 from '@components/layouts/LayoutType1';
import LandingPage from '@pages/LandingPage';
import IntroductionPage from '@pages/docs/IntroductionPage';
import AccordionPage from '@pages/docs/components/AccordionPage';
import AlertPage from '@pages/docs/components/AlertPage';
import AvatarPage from '@pages/docs/components/AvatarPage';
import BadgePage from '@pages/docs/components/BadgePage';
import ButtonPage from '@pages/docs/components/ButtonPage';
import LibraryPage from '@pages/docs/prerequisite/LibraryPage';
import TailwindConfigPage from '@pages/docs/prerequisite/TailwindConfigPage';
import BreadcrumbPage from '@pages/docs/components/BreadcrumbPage';
import CSSFilePage from '@pages/docs/prerequisite/CSSFilePage';
import IconPage from '@pages/docs/prerequisite/IconPage';
import HelperFunctionPage from '@pages/docs/prerequisite/HelperFunctionPage';
import VariantPage from '@pages/docs/prerequisite/VariantPage';
import HookPage from '@pages/docs/prerequisite/HookPage';
import CopyTextPage from '@pages/docs/components/CopyTextPage';
import DropdownPage from '@pages/docs/components/DropdownPage';
import HelperMessagePage from '@pages/docs/components/HelperMessagePage';
import ImagePage from '@pages/docs/components/ImagePage';
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

                {
                    path: 'tailwind-config',
                    element: <TailwindConfigPage />,
                    handle: {
                        id: '2-TC1'
                    }
                },

                {
                    path: 'css-file',
                    element: <CSSFilePage />,
                    handle: {
                        id: '2-CF2'
                    }
                },

                {
                    path: 'icon',
                    element: <IconPage />,
                    handle: {
                        id: '2-I3'
                    }
                },

                {
                    path: 'helper-function',
                    element: <HelperFunctionPage />,
                    handle: {
                        id: '2-HF4'
                    }
                },

                {
                    path: 'variant',
                    element: <VariantPage />,
                    handle: {
                        id: '2-V5'
                    }
                },

                {
                    path: 'hook',
                    element: <HookPage />,
                    handle: {
                        id: '2-H5'
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

                {
                    path: 'breadcrumb',
                    element: <BreadcrumbPage />,
                    handle: {
                        id: '1-BR4'
                    }
                },

                {
                    path: 'copy-text',
                    element: <CopyTextPage />,
                    handle: {
                        id: '1-CT7'
                    }
                },

                {
                    path: 'dropdown',
                    element: <DropdownPage />,
                    handle: {
                        id: '1-DR8'
                    }
                },

                {
                    path: 'helper-message',
                    element: <HelperMessagePage />,
                    handle: {
                        id: '1-HM9'
                    }
                },

                {
                    path: 'image',
                    element: <ImagePage />,
                    handle: {
                        id: '1-IM10'
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