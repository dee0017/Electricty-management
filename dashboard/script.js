// Sidebar Manager
class SidebarManager {
    constructor() {
        this.sidebar = document.getElementById('sidebar');
        this.mainContent = document.getElementById('mainContent');
        this.sidebarToggle = document.getElementById('sidebarToggle');
        this.closeSidebar = document.getElementById('closeSidebar');
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.restoreSidebarState();
        this.handleResize();
    }
    
    setupEventListeners() {
        this.sidebarToggle.addEventListener('click', () => this.openSidebar());
        this.closeSidebar.addEventListener('click', () => this.closeSidebarPanel());
        
        document.addEventListener('click', (e) => this.handleOutsideClick(e));
        window.addEventListener('resize', () => this.handleResize());
    }
    
    openSidebar() {
        this.sidebar.classList.remove('collapsed');
        this.mainContent.classList.add('expanded');
        this.saveSidebarState('expanded');
    }
    
    closeSidebarPanel() {
        this.sidebar.classList.add('collapsed');
        this.mainContent.classList.remove('expanded');
        this.saveSidebarState('collapsed');
    }
    
    handleOutsideClick(e) {
        if (window.innerWidth <= 1024) {
            if (!this.sidebar.contains(e.target) && !this.sidebarToggle.contains(e.target)) {
                this.closeSidebarPanel();
            }
        }
    }
    
    handleResize() {
        if (window.innerWidth <= 1024) {
            this.closeSidebarPanel();
        }
    }
    
    saveSidebarState(state) {
        localStorage.setItem('sidebarState', state);
    }
    
    restoreSidebarState() {
        const savedState = localStorage.getItem('sidebarState');
        if (savedState === 'collapsed') {
            this.closeSidebarPanel();
        } else {
            this.openSidebar();
        }
    }
}

// Updated Navigation Manager
class NavigationManager {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.highlightCurrentPage();
    }
    
    setupEventListeners() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleNavClick(e));
        });
    }
    
    handleNavClick(e) {
        const link = e.target.closest('.nav-link');
        const href = link.getAttribute('href');

        // Only prevent default if it's the current page
        if (href === window.location.pathname.split('/').pop()) {
            e.preventDefault();
        }

        this.navLinks.forEach(navLink => navLink.classList.remove('active'));
        link.classList.add('active');
        
        if (window.innerWidth <= 1024) {
            document.getElementById('sidebar').classList.add('collapsed');
            document.getElementById('mainContent').classList.remove('expanded');
        }
        
        // Add loading state
        link.classList.add('loading');
        
        // Store the active page in localStorage
        localStorage.setItem('activePage', href);

        // Remove loading state after navigation
        setTimeout(() => {
            link.classList.remove('loading');
        }, 300);
    }
    
    highlightCurrentPage() {
        const currentPage = window.location.pathname.split('/').pop() || 'dashboard.html';
        
        this.navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}

// Stats Manager
class StatsManager {
    constructor() {
        this.statCards = document.querySelectorAll('.stat-card');
        this.init();
    }
    
    init() {
        this.setupCardInteractions();
    }
    
    setupCardInteractions() {
        this.statCards.forEach(card => {
            card.addEventListener('mouseover', () => this.handleCardHover(card, true));
            card.addEventListener('mouseout', () => this.handleCardHover(card, false));
        });
    }
    
    handleCardHover(card, isHovering) {
        card.style.transform = isHovering ? 'translateY(-5px)' : 'translateY(0)';
    }
}

// Initialize all managers when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const sidebarManager = new SidebarManager();
    const navigationManager = new NavigationManager();
    const statsManager = new StatsManager();
});

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGtNsgTpZL5g08-_OwRs2lIbvvi5sFFkA",
    authDomain: "rt-elect.firebaseapp.com",
    projectId: "rt-elect",
    storageBucket: "rt-elect.firebasestorage.app",
    messagingSenderId: "970529270247",
    appId: "1:970529270247:web:390ac51ab0f4ea24273542",
    measurementId: "G-6ZPD117S8Z"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Enhanced error handling for authentication
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        const userEmail = document.getElementById('userEmail');
        if (userEmail) {
            userEmail.textContent = user.email;
        }
    } else {
        window.location.href = 'login/login.html';
    }
});

// Improved logout functionality with better error handling
const logoutButton = document.getElementById('logoutButton');
if (logoutButton) {
    logoutButton.addEventListener('click', async () => {
        try {
            await firebase.auth().signOut();
            window.location.href = 'login/login.html';
        } catch (error) {
            console.error('Logout error:', error);
            alert('Error logging out: ' + error.message);
        }
    });
}