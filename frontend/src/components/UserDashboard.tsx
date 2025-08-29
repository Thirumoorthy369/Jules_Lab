import React, { useEffect, useState } from 'react';

interface Job {
    id: number;
    title: string;
    description: string;
    company: string;
}

const UserDashboard: React.FC = () => {
    const [jobs, setJobs] = useState<Job[]>([]);

    useEffect(() => {
        const fetchJobs = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                // Handle case where token is not available
                return;
            }

            try {
                const response = await fetch('/api/jobs', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    setJobs(data);
                } else {
                    // Handle error response
                    console.error('Failed to fetch jobs');
                }
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };

        fetchJobs();
    }, []);

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">User Dashboard</h1>
            <div className="mt-8">
                <h2 className="text-xl font-semibold">Available Jobs</h2>
                <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
                    {jobs.map(job => (
                        <div key={job.id} className="p-4 bg-white rounded-lg shadow-md">
                            <h3 className="text-lg font-bold">{job.title}</h3>
                            <p className="text-gray-600">{job.company}</p>
                            <p className="mt-2 text-sm">{job.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
