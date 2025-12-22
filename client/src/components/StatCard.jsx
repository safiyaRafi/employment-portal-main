import React from 'react';

const StatCard = ({ title, value, icon: Icon, color }) => {
    // color can be a tailwind class suffix like 'blue-500'
    return (
        <div className="bg-white overflow-hidden rounded-xl shadow-sm border border-slate-100 p-6 flex items-center transition-transform hover:scale-105">
            <div className={`p-3 rounded-lg bg-${color}-100 text-${color}-600 mr-4`}>
                <Icon size={24} />
            </div>
            <div>
                <p className="text-sm font-medium text-slate-500 truncate">{title}</p>
                <p className="mt-1 text-2xl font-semibold text-slate-900">{value}</p>
            </div>
        </div>
    );
};

export default StatCard;
