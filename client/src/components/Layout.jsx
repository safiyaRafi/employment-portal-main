import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LayoutDashboard, Users, LogOut, Code2, Menu } from 'lucide-react';

export default function Layout({ children }) {
    const { logout, user } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const navigation = [
        { name: 'Dashboard', href: '/', icon: LayoutDashboard },
        { name: 'Employees', href: '/employees', icon: Users },
    ];

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Colorful Sidebar */}
            <div className="hidden md:flex md:w-64 md:flex-col bg-gradient-to-b from-indigo-700 to-purple-800 text-white shadow-lg">
                <div className="flex items-center justify-center h-20 border-b border-white/10">
                    <span className="text-2xl font-bold flex items-center gap-2">
                        <Code2 size={28} className="text-pink-400" /> Portal
                    </span>
                </div>
                <div className="flex flex-col flex-1 overflow-y-auto pt-8 pb-4">
                    <nav className="flex-1 px-4 space-y-3">
                        {navigation.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.href}
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${isActive
                                        ? 'bg-white/15 text-white shadow-sm backdrop-blur-sm'
                                        : 'text-indigo-100 hover:bg-white/5 hover:text-white'
                                    }`
                                }
                            >
                                <item.icon className={`mr-3 h-5 w-5 ${item.name === 'Dashboard' ? 'text-cyan-300' : 'text-pink-300'}`} />
                                {item.name}
                            </NavLink>
                        ))}
                    </nav>
                    <div className="p-4 border-t border-white/10">
                        <button
                            onClick={handleLogout}
                            className="flex w-full items-center px-4 py-3 text-sm font-medium text-red-200 rounded-xl hover:bg-red-500/20 hover:text-white transition-colors"
                        >
                            <LogOut className="mr-3 h-5 w-5" />
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="bg-white/80 backdrop-blur-md shadow-sm h-16 flex items-center justify-between px-6 z-10 sticky top-0">
                    <div className="md:hidden">
                        <Menu className="text-slate-500" />
                    </div>
                    <div className="ml-auto flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs ring-2 ring-white shadow-md">
                            {user?.username?.[0]?.toUpperCase() || 'U'}
                        </div>
                        <div className="text-sm text-slate-600 hidden sm:block">
                            Welcome, <span className="font-semibold text-slate-800">{user?.username || 'User'}</span>
                        </div>
                    </div>
                </header>

                <main className="flex-1 overflow-auto p-4 md:p-8 bg-slate-50">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
