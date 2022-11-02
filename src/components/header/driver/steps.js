export const steps = (t) => ([
    {
        element: '#header-guide',
        popover: {
            title: t('driver.guideBtn'),
            position: 'left'
        }
    },
    {
        element: '#header-screenfull',
        popover: {
            title: t('driver.fullScreen'),
            position: 'left'
        }
    },
    {
        element: '#lang-dropdown',
        popover: {
            title: t('driver.langBtn'),
            position: 'left'
        }
    }
])