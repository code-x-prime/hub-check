"use client"; // Keep the client directive as useState is used

import React, { useState } from 'react';

// Keep all the existing interface definitions
interface NavLink {
    text: string;
    href: string;
}

interface AuthLinkBase {
    text: string;
    href: string;
    className?: string;
}

interface AuthLinkTypeLink extends AuthLinkBase {
    type: 'link';
}

interface AuthLinkTypeButtonOutline extends AuthLinkBase {
    type: 'button-outline';
}

interface AuthLinkTypeButtonPrimary extends AuthLinkBase {
    type: 'button-primary';
}

type AuthLink = AuthLinkTypeLink | AuthLinkTypeButtonOutline | AuthLinkTypeButtonPrimary;

interface NavbarData {
    logoText: string;
    navLinks: NavLink[];
    authLinks: AuthLink[];
}

interface HeroContentData {
    subheadline: string;
    headline: string;
    description: string;
    secondaryCtaText: string;
    secondaryCtaLink: string;
    primaryCtaText: string;
    primaryCtaLink: string;
}

interface AppPreviewFilter {
    label: string;
    icon?: string;
    dropdown?: boolean;
}

interface AppPreviewAction {
    type: 'button-outline' | 'button-primary';
    text: string;
    icon?: string;
    href?: string;
}

interface AppPreviewHeaderControlsData {
    filters: AppPreviewFilter[];
    actions: AppPreviewAction[];
}

interface AppDataTableHeader {
    id: string;
    label: string;
    icon?: string;
}

interface AppDataTableRow {
    id?: number;
    name: string;
    assignee: string[];
    status: string;
    dueDate: string;
    project: string;
    statusColor: string;
}

interface AppDataTableData {
    headers: AppDataTableHeader[];
    data: AppDataTableRow[];
}

interface AppPreviewData {
    headerControls: AppPreviewHeaderControlsData;
    appDataTable: AppDataTableData;
}

// This is the main interface for the data the HeroSection will receive
export interface HeroSectionComponentData { // Export this interface
    navbar: NavbarData;
    heroContent: HeroContentData;
    appPreview: AppPreviewData;
}


const AbstractBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-green-100/20 opacity-50 z-0"></div> {/* Subtle gradient effect */}
            <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-green-50/40 transform origin-bottom-right rotate-12 translate-y-1/3 -translate-x-1/4 opacity-90 z-0"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-amber-50/30 opacity-80 z-0"></div>
            <div className="absolute top-0 left-0 w-1/2 h-full bg-green-50/20 transform -skew-y-6 origin-top-left -translate-y-1/4 opacity-30 z-0"></div>
        </div>
    );
};

interface NavbarProps {
    logoText: string;
    navLinks: NavLink[];
    authLinks: AuthLink[];
    onMenuOpen: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ logoText, navLinks, authLinks, onMenuOpen }) => {
    // Existing Navbar component code
    const renderLogo = () => (
        <div className="flex items-center space-x-2">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="4" fill="#15803d" />
                <path d="M6 12H10V16H6V12ZM14 8H18V16H14V8ZM10 4H14V8H10V4Z" fill="white" />
            </svg>
            <span className="text-xl font-bold text-gray-800">{logoText}</span>
        </div>
    );

    const renderDesktopNavLinks = (links: NavLink[]) => (
        <ul className="hidden lg:flex items-center space-x-6">
            {links.map((link, index) => (
                <li key={index}>
                    <a href={link.href} className="hover:text-[#15803d] transition-colors font-medium text-gray-600">
                        {link.text}
                    </a>
                </li>
            ))}
        </ul>
    );

    const renderDesktopAuthLinks = (links: AuthLink[]) => (
        <div className="hidden lg:flex items-center space-x-4">
            {links.map((link, index) => {
                if (link.type === 'link') {
                    return (
                        <a key={index} href={link.href} className={`text-gray-600 hover:text-[#15803d] font-medium transition-colors ${link.className}`}>
                            {link.text}
                        </a>
                    );
                } else if (link.type === 'button-outline') {
                    return (
                        <button key={index} className={`px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors ${link.className}`}>
                            {link.text}
                        </button>
                    );
                } else if (link.type === 'button-primary') {
                    return (
                        <button key={index} className={`px-5 py-2 bg-[#15803d] text-white rounded-full hover:bg-[#166534] transition-all font-semibold ${link.className}`}>
                            {link.text}
                        </button>
                    );
                }
                return null;
            })}
        </div>
    );

    return (
        <nav className="mb-6 bg-white rounded-lg relative z-10 max-w-6xl mx-auto flex items-center justify-between py-4 px-8 lg:px-12 lg:py-4 border border-gray-100 shadow-sm">
            {renderLogo()}

            <div className="flex items-center space-x-6 text-gray-600 text-sm">
                {renderDesktopNavLinks(navLinks)}
                {renderDesktopAuthLinks(authLinks)}
            </div>

            <button
                className="lg:hidden text-gray-600 hover:text-[#15803d]"
                onClick={onMenuOpen}
                aria-label="Open mobile menu"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
        </nav>
    );
};


interface MobileMenuProps {
    navLinks: NavLink[];
    authLinks: AuthLink[];
    logoText: string;
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ navLinks, authLinks, logoText, isOpen, onClose }) => {
    // Existing MobileMenu component code
    const renderLogo = () => (
        <div className="flex items-center space-x-2">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="4" fill="#15803d" />
                <path d="M6 12H10V16H6V12ZM14 8H18V16H14V8ZM10 4H14V8H10V4Z" fill="white" />
            </svg>
            <span className="text-xl font-bold text-gray-800">{logoText}</span>
        </div>
    );

    const renderMobileNavLinks = (links: NavLink[]) => (
        <div className="flex flex-col space-y-4 mt-8">
            {links.map((link, index) => (
                <a key={index} href={link.href} className="text-gray-800 text-lg font-medium hover:text-[#15803d]" onClick={onClose}>
                    {link.text}
                </a>
            ))}
        </div>
    );

    const renderMobileAuthLinks = (links: AuthLink[]) => (
        <div className="flex flex-col space-y-4 mt-8 pt-6 border-t border-gray-200">
            {links.map((link, index) => {
                if (link.type === 'link') {
                    return (
                        <a key={index} href={link.href} className={`text-gray-600 hover:text-[#15803d] text-lg ${link.className}`} onClick={onClose}>
                            {link.text}
                        </a>
                    );
                } else if (link.type === 'button-outline') {
                    return (
                        <button key={index} className={`px-4 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 text-lg font-semibold ${link.className}`} onClick={onClose}>
                            {link.text}
                        </button>
                    );
                } else if (link.type === 'button-primary') {
                    return (
                        <button key={index} className={`px-4 py-3 bg-[#15803d] text-white rounded-full hover:bg-[#166534] font-semibold text-lg ${link.className}`} onClick={onClose}>
                            {link.text}
                        </button>
                    );
                }
                return null;
            })}
        </div>
    );

    return (
        <div className={`
            fixed inset-0 z-40 bg-white transition-transform duration-300 ease-in-out
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}
            lg:hidden
            overflow-y-auto
            p-8
        `}>
            <div className="flex items-center justify-between mb-8">
                {renderLogo()}
                <button
                    className="text-gray-600 hover:text-[#15803d] focus:outline-none"
                    onClick={onClose}
                    aria-label="Close mobile menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>

            {renderMobileNavLinks(navLinks)}
            {renderMobileAuthLinks(authLinks)}
        </div>
    );
};


interface HeroContentProps extends HeroContentData { }

const HeroContent: React.FC<HeroContentProps> = ({
    subheadline = '',
    headline = '',
    description = '',
    primaryCtaText = '',
    primaryCtaLink = '#',
    secondaryCtaText = '',
    secondaryCtaLink = '#',
}) => {
    // Existing HeroContent component code
    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left p-8 lg:px-12 lg:pt-16 lg:pb-12">
            <div className="max-w-3xl mx-auto">
                {subheadline && <p className="text-sm font-semibold text-[#15803d] uppercase tracking-wider mb-4">{subheadline}</p>}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    {headline}
                </h1>
                <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
                    {description}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                    {secondaryCtaText && (
                        <a href={secondaryCtaLink} className="w-full sm:w-auto px-7 py-3 border border-gray-300 rounded-full text-gray-800 font-semibold hover:border-[#15803d] hover:text-[#15803d] transition-colors text-sm">
                            {secondaryCtaText}
                        </a>
                    )}
                    {primaryCtaText && (
                        <a href={primaryCtaLink} className="w-full sm:w-auto px-7 py-3 bg-[#15803d] text-white rounded-full font-semibold hover:bg-[#166534] transition-all text-sm shadow-md shadow-green-700/10">
                            {primaryCtaText}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

interface AppPreviewHeaderControlsProps extends AppPreviewHeaderControlsData { }

const AppPreviewHeaderControls: React.FC<AppPreviewHeaderControlsProps> = ({ filters, actions }) => {
    // Existing AppPreviewHeaderControls component code
    const renderIcon = (iconType?: string) => {
        if (iconType === 'user') {
            return <svg className="w-3 h-3 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>;
        }
        if (iconType === 'calendar') {
            return <svg className="w-3 h-3 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>;
        }
        if (iconType === 'check-circle') {
            return <svg className="w-3 h-3 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>;
        }

        if (iconType === 'plus') {
            return <svg className="w-3 h-3 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>;
        }
        if (iconType === 'upload') {
            return <svg className="w-3 h-3 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>;
        }
        if (iconType === 'document') {
            return <svg className="w-3 h-3 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>;
        }
        return null;
    };

    const renderFilterButton = (filter: AppPreviewFilter, index: number) => (
        <button key={index} className="flex items-center px-2.5 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-100 transition-colors">
            {renderIcon(filter.icon)}
            <span className="text-gray-600">{filter.label}</span>
            {filter.dropdown && <svg className="w-3 h-3 ml-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>}
        </button>
    );

    const renderActionButton = (action: AppPreviewAction, index: number) => {
        let classes = "px-3 py-1.5 rounded-md text-sm font-semibold transition-all";
        if (action.type === 'button-outline') {
            classes += " border border-gray-300 text-gray-600 hover:bg-gray-100";
        } else if (action.type === 'button-primary') {
            classes += " bg-[#15803d] text-white hover:bg-[#166534]";
        }

        return (
            <button key={index} className={`flex items-center ${classes}`}>
                {renderIcon(action.icon)}
                {action.text}
            </button>
        );
    };

    return (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between text-gray-500 text-sm space-y-2 md:space-y-0 w-full">
            <div className="flex flex-wrap items-center gap-2">
                <span className="hidden md:inline-block text-gray-600 font-medium">Filter by:</span>
                {filters.map(renderFilterButton)}
            </div>
            <div className="flex items-center space-x-2 mt-2 md:mt-0">
                {actions.map(renderActionButton)}
            </div>
        </div>
    );
};


interface AppPreviewHeaderProps {
    headerControls: AppPreviewHeaderControlsData;
}

const AppPreviewHeader: React.FC<AppPreviewHeaderProps> = ({ headerControls }) => {
    // Existing AppPreviewHeader component code
    return (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-end text-gray-500 text-sm space-y-4 md:space-y-0 pt-4 mb-4">
            <AppPreviewHeaderControls
                filters={headerControls.filters}
                actions={headerControls.actions}
            />
        </div>
    );
};


interface AppDataTableProps extends AppDataTableData { }

const AppDataTable: React.FC<AppDataTableProps> = ({ headers, data }) => {
    // Existing AppDataTable component code
    const renderHeaderIcon = (iconType?: string) => {
        if (iconType === 'document') {
            return <svg className="w-3 h-3 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>;
        }
        if (iconType === 'user') {
            return <svg className="w-3 h-3 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>;
        }
        if (iconType === 'info') {
            return <svg className="w-3 h-3 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;
        }

        if (iconType === 'calendar') {
            return <svg className="w-3 h-3 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>;
        }
        if (iconType === 'folder') {
            return <svg className="w-3 h-3 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>;
        }
        return null;
    }

    return (
        <div className="bg-white rounded-lg shadow-inner overflow-hidden border border-gray-200">
            {/* Adjusted grid columns for 5 columns */}
            <div className="grid grid-cols-[1.8fr_1.2fr_0.8fr_1fr_1.2fr] gap-4 text-sm text-gray-500 px-6 py-3 border-b border-gray-200 bg-gray-50 font-semibold uppercase tracking-wider">
                {headers.map(header => (
                    <div key={header.id} className="flex items-center">
                        {renderHeaderIcon(header.icon)}
                        {header.label}
                    </div>
                ))}
            </div>

            {data.map((row, index) => (
                <div key={row.id || index} className={`grid grid-cols-[1.8fr_1.2fr_0.8fr_1fr_1.2fr] gap-4 text-sm text-gray-700 px-6 py-3.5 items-center cursor-pointer hover:bg-green-50/20 transition-colors ${index < data.length - 1 ? 'border-b border-gray-100' : ''}`}>
                    <div className="flex items-center font-semibold text-gray-900">
                        {/* Status dot coloring safely */}
                        <span className={`inline-block w-2.5 h-2.5 rounded-full mr-2 bg-${row.statusColor === 'green' ? 'emerald' : row.statusColor === 'blue' ? 'sky' : row.statusColor === 'yellow' ? 'amber' : 'gray'}-500`}></span>
                        {row.name}
                    </div>
                    <div className="text-gray-600 font-medium">
                        {row.assignee.join(', ')}
                    </div>
                    <div>
                        <span className={`inline-block px-2.5 py-1 rounded-full text-sm font-semibold bg-${row.statusColor === 'green' ? 'emerald' : row.statusColor === 'blue' ? 'sky' : row.statusColor === 'yellow' ? 'amber' : 'gray'}-50 text-${row.statusColor === 'green' ? 'emerald' : row.statusColor === 'blue' ? 'sky' : row.statusColor === 'yellow' ? 'amber' : 'gray'}-700`}>
                            {row.status}
                        </span>
                    </div>

                    <div className="text-gray-600">
                        {row.dueDate}
                    </div>
                    <div className="text-gray-600 truncate">
                        {row.project}
                    </div>
                </div>
            ))}
        </div>
    );
};


interface AppPreviewSectionProps extends AppPreviewData { }

const AppPreviewSection: React.FC<AppPreviewSectionProps> = ({ headerControls, appDataTable }) => {
    // Existing AppPreviewSection component code
    return (
        <div className="relative z-20 px-8 lg:px-12 pb-8 bg-gray-50/80 rounded-b-xl border-t border-gray-100">
            <AppPreviewHeader
                headerControls={headerControls}
            />
            <AppDataTable
                headers={appDataTable.headers}
                data={appDataTable.data}
            />
        </div>
    );
};


// Define the props for the HeroSection component
interface HeroSectionProps {
    data: HeroSectionComponentData;
}

// Modify the HeroSection component to accept 'data' as a prop
export const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Destructure data from the prop
    const { navbar, heroContent, appPreview } = data;

    return (
        <div className="relative min-h-screen bg-green-50/10 overflow-hidden font-sans py-8">

            <AbstractBackground />

            {/* Pass destructured data to children */}
            <Navbar {...navbar} onMenuOpen={() => setIsMobileMenuOpen(true)} />

            <div className="relative z-10 max-w-6xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
                <HeroContent {...heroContent} />
                <AppPreviewSection {...appPreview} />
            </div>

            <MobileMenu
                navLinks={navbar.navLinks}
                authLinks={navbar.authLinks}
                logoText={navbar.logoText}
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />


        </div>
    );
};

export default HeroSection;
