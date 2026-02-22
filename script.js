let jobs = [
    { id: 1, company: "Mobile First Corp", position: "React Native Developer", location: "Remote", type: "Full-time", salary: "$130,000- $175,000", status: "all", description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide." },
    
    { id: 2, company: "WebFlow Agency", position: "Web Designer & Developer", location: "Los Angeles, CA", type: "Part-time", salary: "$80,000 - $120,000", status: "all", description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends." },
    
    { id: 3, company: "DataViz Solutions", position: "Data Visualization Specialist", location: "Boston, MA", type: "Full-time", salary: "$125,000 - $165,000", status: "all", description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking." },
    
    { id: 4, company: "CloudFirst Inc", position: "Backend Developer", location: "Seattle, WA", type: "Full-time", salary: "£55k", status: "all", description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure." },
    
    { id: 5, company: "Innovation Labs", position: "UI/UX Engineer", location: "Remote", type: "Internship", salary: "$110,000 - $150,000", status: "all", description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required." },
    
    { id: 6, company: "MegaCorp Solutions", position: "JavaScript Developer", location: "Berlin", type: "Full-time", salary: "$130,000 - $170,00", status: "all", description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities." },
    
    { id: 7, company: "StartupXYZ", position: "Full Stack Dev", location: "Remote", type: "Full-time", salary: " $120,000 - $160,000",status: "all", description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included." },
    
    { id: 8, company: "TechCorp Industries", position: "Data Analyst", location: "San Francisco, CA", type: "Hybrid", salary: " $130,000 - $175,000", status: "all", description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects." },
];

let currentTab = 'all';

function init() {
    document.getElementById('tab-all').addEventListener('click', () => switchTab('all'));
    document.getElementById('tab-interview').addEventListener('click', () => switchTab('interview'));
    document.getElementById('tab-rejected').addEventListener('click', () => switchTab('rejected'));

    switchTab('all'); 
    updateDashboard();
}


function renderJobs() {
    const container = document.getElementById('jobs-container');
    const emptyState = document.getElementById('empty-state');
    
    const filteredJobs = currentTab === 'all' ? jobs : jobs.filter(job => job.status === currentTab);
    
    document.getElementById('current-tab-count').innerText = filteredJobs.length;
    container.innerHTML = '';

    if (filteredJobs.length === 0) {
        container.classList.add('hidden');
        emptyState.classList.remove('hidden');
    } else {
        container.classList.remove('hidden');
        emptyState.classList.add('hidden');
    }
        filteredJobs.forEach(job => {
        let statusBadge = '';

        if (job.status === 'interview') {
            statusBadge = `<div class="badge badge-success p-4 bg-green-300 font-bold text-black">INTERVIEW</div>`;
        } 
        else if (job.status === 'rejected') {
            statusBadge = `<div class="badge badge-error p-4 font-bold text-black">REJECTED</div>`;
           
        } 
        else {
            statusBadge = `<div class=" badge badge-neutral font-bold p-4 text-white bg-base-600">NOT APPLIED</div>`;
        }
            const card = document.createElement('div');
            card.className = "bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow relative";
            card.innerHTML = `
                <button onclick="deleteJob(${job.id})" class="absolute top-10 py-[15px] px-4 border-2 rounded-full right-10 text-2xl text-gray-400 hover:text-red-500 transition-colors">
                    <i class="fa-solid fa-trash"></i>
                </button>
                <div class="mb-4">
                    <h3 class="font-bold text-lg text-gray-800">${job.company}</h3>
                    <p class="text-blue-600 font-medium">${job.position}</p>
                </div>

                <div class="pb-3">
                ${statusBadge}
                </div>

                <div class="text-sm text-gray-500 space-y-2 mb-4">
                    <p><i class="fas fa-map-marker-alt mr-2"></i>${job.location}</p>
                    <p><i class="fas fa-briefcase mr-2"></i>${job.type}</p>
                    <p><i class="fas fa-dollar-sign mr-3"></i>${job.salary}</p>
                    <p class="mt-3 italic">"${job.description}"</p>
                </div>
                <div class="flex gap-2 pt-4 border-t">
                    <button onclick="updateStatus(${job.id}, 'interview')" 
                        class="flex-1 py-2 rounded-lg font-bold transition-colors ${job.status === 'interview' ? 'bg-green-600 text-white' : 'bg-green-100 text-green-600 hover:bg-green-200'}">
                        Interview
                    </button>
                    <button onclick="updateStatus(${job.id}, 'rejected')" 
                        class="flex-1 py-2 rounded-lg font-bold transition-colors ${job.status === 'rejected' ? 'bg-red-600 text-white' : 'bg-red-100 text-red-600 hover:bg-red-200'}">
                        Rejected
                    </button>
                </div>
            `;
            container.appendChild(card);
        });
    
}


function updateStatus(id, newStatus) {
    const jobIndex = jobs.findIndex(j => j.id === id);
    if (jobs[jobIndex].status === newStatus) {
        jobs[jobIndex].status = 'all'; 
    } else {
        jobs[jobIndex].status = newStatus;
    }
    renderJobs();
    updateDashboard();
}

function deleteJob(id) {
    jobs = jobs.filter(job => job.id !== id);
    renderJobs();
    updateDashboard();
}


function switchTab(tab) {
    currentTab = tab;
   
    ['all', 'interview', 'rejected'].forEach(t => {
        const btn = document.getElementById(`tab-${t}`);
        if (t === tab) {
            btn.classList.add('border-blue-600', 'text-blue-600');
            btn.classList.remove('border-transparent', 'text-gray-500');
        } else {
            btn.classList.remove('border-blue-600', 'text-blue-600');
            btn.classList.add('border-transparent', 'text-gray-500');
        }
    });
    renderJobs();
}


function updateDashboard() {
    document.getElementById('total-count').innerText = jobs.length;
    document.getElementById('interview-count').innerText = jobs.filter(j => j.status === 'interview').length;
    document.getElementById('rejected-count').innerText = jobs.filter(j => j.status === 'rejected').length;
}

init();