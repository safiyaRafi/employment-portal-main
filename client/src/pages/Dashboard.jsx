import React, { useEffect, useState } from 'react';
import api from '../api';
import StatCard from '../components/StatCard';
import { Users, Briefcase, TrendingUp } from 'lucide-react';

export default function Dashboard() {
    const [stats, setStats] = useState({
        totalEmployees: 0,
        departments: 0,
        recentHires: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        try {
            // In a real app, we'd have a specific stats endpoint or lightweight query
            const res = await api.get('/employees');
            const employees = res.data;

            const uniqueDepts = new Set(employees.map(e => e.department)).size;
            // Recent hires: joined in last 30 days (mock logic for now, just count last 3)
            const recent = employees.slice(-3).length;

            setStats({
                totalEmployees: employees.length,
                departments: uniqueDepts,
                recentHires: recent
            });
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard
                    title="Total Employees"
                    value={stats.totalEmployees}
                    icon={Users}
                    color="blue"
                />
                <StatCard
                    title="Departments"
                    value={stats.departments}
                    icon={Briefcase}
                    color="purple"
                />
                <StatCard
                    title="Recent Hires"
                    value={stats.recentHires}
                    icon={TrendingUp}
                    color="green"
                />
            </div>

            {/* Recent Activity / Welcome Section */}
            <div className="mt-8 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
                <div className="flex gap-4">
                    <button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                        Add New Employee
                    </button>
                    <button className="px-4 py-2 bg-white border border-slate-300 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors">
                        View All Employees
                    </button>
                </div>
            </div>
        </div>
    );
}
