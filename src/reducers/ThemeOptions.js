// Sidebar

export const SET_SIDEBAR_SHADOW = 'THEME_OPTIONS/SET_SIDEBAR_SHADOW';
export const SET_SIDEBAR_STYLE = 'THEME_OPTIONS/SET_SIDEBAR_STYLE';
export const SET_SIDEBAR_FOOTER = 'THEME_OPTIONS/SET_SIDEBAR_FOOTER';
export const SET_SIDEBAR_TOGGLE_MOBILE = 'THEME_OPTIONS/SET_SIDEBAR_TOGGLE_MOBILE';
export const SET_SIDEBAR_TOGGLE = 'THEME_OPTIONS/SET_SIDEBAR_TOGGLE';
export const SET_SIDEBAR_FIXED = 'THEME_OPTIONS/SET_SIDEBAR_FIXED';
export const SET_SIDEBAR_USERBOX = 'THEME_OPTIONS/SET_SIDEBAR_USERBOX';

export const setSidebarShadow = sidebarShadow => ({
    type: SET_SIDEBAR_SHADOW,
    sidebarShadow
});
export const setSidebarFixed = sidebarFixed => ({
    type: SET_SIDEBAR_FIXED,
    sidebarFixed
});
export const setSidebarStyle = sidebarStyle => ({
    type: SET_SIDEBAR_STYLE,
    sidebarStyle
});
export const setSidebarFooter = sidebarFooter => ({
    type: SET_SIDEBAR_FOOTER,
    sidebarFooter
});
export const setSidebarToggleMobile = sidebarToggleMobile => ({
    type: SET_SIDEBAR_TOGGLE_MOBILE,
    sidebarToggleMobile
});
export const setSidebarToggle = sidebarToggle => ({
    type: SET_SIDEBAR_TOGGLE,
    sidebarToggle
});
export const setSidebarUserbox = sidebarUserbox => ({
    type: SET_SIDEBAR_USERBOX,
    sidebarUserbox
});

// Header

export const SET_HEADER_FIXED = 'THEME_OPTIONS/SET_HEADER_FIXED';
export const SET_HEADER_SHADOW = 'THEME_OPTIONS/SET_HEADER_SHADOW';
export const SET_HEADER_BG_TRANSPARENT = 'THEME_OPTIONS/SET_HEADER_BG_TRANSPARENT';
export const SET_HEADER_SEARCH_HOVER = 'THEME_OPTIONS/SET_HEADER_SEARCH_HOVER';
export const SET_HEADER_DRAWER_TOGGLE = 'THEME_OPTIONS/SET_HEADER_DRAWER_TOGGLE';

export const setHeaderFixed = headerFixed => ({
    type: SET_HEADER_FIXED,
    headerFixed
});
export const setHeaderShadow = headerShadow => ({
    type: SET_HEADER_SHADOW,
    headerShadow
});
export const setHeaderBgTransparent = headerBgTransparent => ({
    type: SET_HEADER_BG_TRANSPARENT,
    headerBgTransparent
});
export const setHeaderSearchHover = headerSearchHover => ({
    type: SET_HEADER_SEARCH_HOVER,
    headerSearchHover
});
export const setHeaderDrawerToggle = headerDrawerToggle => ({
    type: SET_HEADER_DRAWER_TOGGLE,
    headerDrawerToggle
});

// Main content

export const SET_CONTENT_BACKGROUND = 'THEME_OPTIONS/SET_CONTENT_BACKGROUND';
export const SET_THEME_CONFIGURATOR_TOGGLE = 'THEME_OPTIONS/SET_THEME_CONFIGURATOR_TOGGLE';

export const setContentBackground = contentBackground => ({
    type: SET_CONTENT_BACKGROUND,
    contentBackground
});
export const setThemeConfiguratorToggle = themeConfiguratorToggle => ({
    type: SET_THEME_CONFIGURATOR_TOGGLE,
    themeConfiguratorToggle
});

// Footer

export const SET_FOOTER_FIXED = 'THEME_OPTIONS/SET_FOOTER_FIXED';
export const SET_FOOTER_SHADOW = 'THEME_OPTIONS/SET_FOOTER_SHADOW';
export const SET_FOOTER_BG_TRANSPARENT = 'THEME_OPTIONS/SET_FOOTER_BG_TRANSPARENT';

export const setFooterFixed = footerFixed => ({
    type: SET_FOOTER_FIXED,
    footerFixed
});
export const setFooterShadow = footerShadow => ({
    type: SET_FOOTER_SHADOW,
    footerShadow
});
export const setFooterBgTransparent = footerBgTransparent => ({
    type: SET_FOOTER_BG_TRANSPARENT,
    footerBgTransparent
});

// Page title

export const SET_PAGE_TITLE_STYLE = 'THEME_OPTIONS/SET_PAGE_TITLE_STYLE';
export const SET_PAGE_TITLE_BACKGROUND = 'THEME_OPTIONS/SET_PAGE_TITLE_BACKGROUND';
export const SET_PAGE_TITLE_SHADOW = 'THEME_OPTIONS/SET_PAGE_TITLE_SHADOW';
export const SET_PAGE_TITLE_BREADCRUMB = 'THEME_OPTIONS/SET_PAGE_TITLE_BREADCRUMB';
export const SET_PAGE_TITLE_ICON_BOX = 'THEME_OPTIONS/SET_PAGE_TITLE_ICON_BOX';
export const SET_PAGE_TITLE_DESCRIPTION = 'THEME_OPTIONS/SET_PAGE_TITLE_DESCRIPTION';

export const setPageTitleStyle = pageTitleStyle => ({
    type: SET_PAGE_TITLE_STYLE,
    pageTitleStyle
});
export const setPageTitleBackground = pageTitleBackground => ({
    type: SET_PAGE_TITLE_BACKGROUND,
    pageTitleBackground
});
export const setPageTitleShadow = pageTitleShadow => ({
    type: SET_PAGE_TITLE_SHADOW,
    pageTitleShadow
});
export const setPageTitleBreadcrumb = pageTitleBreadcrumb => ({
    type: SET_PAGE_TITLE_BREADCRUMB,
    pageTitleBreadcrumb
});
export const setPageTitleIconBox = pageTitleIconBox => ({
    type: SET_PAGE_TITLE_ICON_BOX,
    pageTitleIconBox
});
export const setPageTitleDescription = pageTitleDescription => ({
    type: SET_PAGE_TITLE_DESCRIPTION,
    pageTitleDescription
});

export default function reducer(state = {

    // Sidebar

    sidebarShadow: false,
    sidebarFixed: true,
    sidebarLighter: false,
    sidebarFooter: true,
    sidebarUserbox: false,
    sidebarStyle: 'app-sidebar--dark',
    sidebarToggleMobile: false,
    sidebarToggle: false,

    // Header

    headerFixed: true,
    headerShadow: true,
    headerBgTransparent: true,
    headerSearchHover: false,
    headerDrawerToggle: false,

    // Main content

    contentBackground: '',
    themeConfiguratorToggle: false,

    // Footer

    footerFixed: false,
    footerShadow: false,
    footerBgTransparent: true,

    // Page title

    pageTitleStyle: '',
    pageTitleBackground: '',
    pageTitleShadow: false,
    pageTitleBreadcrumb: false,
    pageTitleIconBox: true,
    pageTitleDescription: true

}, action) {
    switch (action.type) {

        // Sidebar

        case SET_SIDEBAR_SHADOW:
            return {
                ...state,
                sidebarShadow: action.sidebarShadow
            };
        case SET_SIDEBAR_FIXED:
            return {
                ...state,
                sidebarFixed: action.sidebarFixed
            };
        case SET_SIDEBAR_STYLE:
            return {
                ...state,
                sidebarStyle: action.sidebarStyle
            };
        case SET_SIDEBAR_FOOTER:
            return {
                ...state,
                sidebarFooter: action.sidebarFooter
            };
        case SET_SIDEBAR_TOGGLE_MOBILE:
            return {
                ...state,
                sidebarToggleMobile: action.sidebarToggleMobile
            };
        case SET_SIDEBAR_TOGGLE:
            return {
                ...state,
                sidebarToggle: action.sidebarToggle
            };
        case SET_SIDEBAR_USERBOX:
            return {
                ...state,
                sidebarUserbox: action.sidebarUserbox
            };

        // Header

        case SET_HEADER_FIXED:
            return {
                ...state,
                headerFixed: action.headerFixed
            };
        case SET_HEADER_SHADOW:
            return {
                ...state,
                headerShadow: action.headerShadow
            };
        case SET_HEADER_BG_TRANSPARENT:
            return {
                ...state,
                headerBgTransparent: action.headerBgTransparent
            };
        case SET_HEADER_SEARCH_HOVER:
            return {
                ...state,
                headerSearchHover: action.headerSearchHover
            };
        case SET_HEADER_DRAWER_TOGGLE:
            return {
                ...state,
                headerDrawerToggle: action.headerDrawerToggle
            };

        // Main content

        case SET_CONTENT_BACKGROUND:
            return {
                ...state,
                contentBackground: action.contentBackground
            };
        case SET_THEME_CONFIGURATOR_TOGGLE:
            return {
                ...state,
                themeConfiguratorToggle: action.themeConfiguratorToggle
            };

        // Footer

        case SET_FOOTER_FIXED:
            return {
                ...state,
                footerFixed: action.footerFixed
            };
        case SET_FOOTER_SHADOW:
            return {
                ...state,
                footerShadow: action.footerShadow
            };
        case SET_FOOTER_BG_TRANSPARENT:
            return {
                ...state,
                footerBgTransparent: action.footerBgTransparent
            };

        // Page title

        case SET_PAGE_TITLE_STYLE:
            return {
                ...state,
                pageTitleStyle: action.pageTitleStyle
            };
        case SET_PAGE_TITLE_BACKGROUND:
            return {
                ...state,
                pageTitleBackground: action.pageTitleBackground
            };
        case SET_PAGE_TITLE_SHADOW:
            return {
                ...state,
                pageTitleShadow: action.pageTitleShadow
            };
        case SET_PAGE_TITLE_BREADCRUMB:
            return {
                ...state,
                pageTitleBreadcrumb: action.pageTitleBreadcrumb
            };
        case SET_PAGE_TITLE_ICON_BOX:
            return {
                ...state,
                pageTitleIconBox: action.pageTitleIconBox
            };
        case SET_PAGE_TITLE_DESCRIPTION:
            return {
                ...state,
                pageTitleDescription: action.pageTitleDescription
            };

    }
    return state;
}
