// Sample data for search
const sampleData = [
    {
        id: 1,
        title: "Hướng dẫn xác nhận nhập học của Bộ GD&ĐT",
        excerpt: "Hướng dẫn thí sinh xác nhận nhập học qua hệ thống của Bộ GD&ĐT",
        category: "news",
        date: "24/8/2025",
        image: "https://atm273446-s3user.vcos.cloudstorage.com.vn/dhdainam/asset/images/news/Bài%20về%20nhập%20học_thumb%20web%20hướng%20dẫn%20thí%20sinh%20xác%20nhận%20nhập%20học.jpg",
        link: "#"
    },
    {
        id: 2,
        title: "Thông báo tuyển sinh năm 2025",
        excerpt: "Thông tin chi tiết về phương thức tuyển sinh và chỉ tiêu tuyển sinh năm 2025",
        category: "admissions",
        date: "15/7/2025",
        image: "https://atm273446-s3user.vcos.cloudstorage.com.vn/dhdainam/asset/images/news/Bài%20về%20nhập%20học_thumb%20web%20hướng%20dẫn%20thí%20sinh%20xác%20nhận%20nhập%20học.jpg",
        link: "#"
    },
    {
        id: 3,
        title: "Chương trình học bổng 2025",
        excerpt: "Các chương trình học bổng dành cho tân sinh viên năm học 2025-2026",
        category: "news",
        date: "10/6/2025",
        image: "https://atm273446-s3user.vcos.cloudstorage.com.vn/dhdainam/asset/images/news/Bài%20về%20nhập%20học_thumb%20web%20hướng%20dẫn%20thí%20sinh%20xác%20nhận%20nhập%20học.jpg",
        link: "#"
    },
    {
        id: 4,
        title: "Lịch khai giảng năm học mới",
        excerpt: "Thông báo lịch khai giảng và các hoạt động chào đón tân sinh viên",
        category: "events",
        date: "20/8/2025",
        image: "https://atm273446-s3user.vcos.cloudstorage.com.vn/dhdainam/asset/images/news/knqmsugiyvka3ksvb7h420220321162002_thump_2.jpg",
        link: "#"
    },
    {
        id: 5,
        title: "Hội thảo công nghệ thông tin 2025",
        excerpt: "Sự kiện công nghệ lớn nhất năm với sự tham gia của các chuyên gia hàng đầu",
        category: "events",
        date: "5/9/2025",
        image: "https://atm273446-s3user.vcos.cloudstorage.com.vn/dhdainam/asset/images/news/knqmsugiyvka3ksvb7h420220321162002_thump_2.jpg",
        link: "#"
    },
    {
        id: 6,
        title: "Thông báo về lịch học và các hoạt động sinh viên",
        excerpt: "Thông tin chi tiết về lịch học, các hoạt động ngoại khóa và phong trào sinh viên",
        category: "announcements",
        date: "12/8/2025",
        image: "https://atm273446-s3user.vcos.cloudstorage.com.vn/dhdainam/asset/images/news/knqmsugiyvka3ksvb7h420220321162002_thump_2.jpg",
        link: "#"
    }
];

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const resultsGrid = document.getElementById('resultsGrid');
    const resultsCount = document.getElementById('resultsCount');
    const noResults = document.getElementById('noResults');
    const popularKeywords = document.getElementById('popularKeywords');
    const keywordTags = document.querySelectorAll('.keyword-tag');

    // Handle form submit
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        performSearch();
    });

    // Handle keyword tag clicks
    keywordTags.forEach(tag => {
        tag.addEventListener('click', function() {
            const keyword = this.getAttribute('data-keyword');
            searchInput.value = keyword;
            performSearch();
        });
    });

    function performSearch() {
        const keyword = searchInput.value.trim().toLowerCase();
        const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked'))
            .map(cb => cb.value);

        if (!keyword) {
            return;
        }

        // Filter data
        const results = sampleData.filter(item => {
            const matchesKeyword = item.title.toLowerCase().includes(keyword) || 
                                  item.excerpt.toLowerCase().includes(keyword);
            const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(item.category);
            return matchesKeyword && matchesCategory;
        });

        displayResults(results, keyword);
    }

    function displayResults(results, keyword) {
        // Hide popular keywords
        popularKeywords.style.display = 'none';

        if (results.length === 0) {
            searchResults.style.display = 'none';
            noResults.style.display = 'flex';
            return;
        }

        // Show results
        noResults.style.display = 'none';
        searchResults.style.display = 'block';
        
        resultsCount.textContent = `Tìm thấy ${results.length} kết quả cho "${keyword}"`;

        // Build results HTML
        resultsGrid.innerHTML = results.map(item => `
            <article class="result-card">
                <div class="result-image">
                    <img src="${item.image}" alt="${item.title}">
                    <span class="result-category">${getCategoryName(item.category)}</span>
                </div>
                <div class="result-content">
                    <div class="result-date">${item.date}</div>
                    <h3 class="result-title">${highlightKeyword(item.title, keyword)}</h3>
                    <p class="result-excerpt">${highlightKeyword(item.excerpt, keyword)}</p>
                    <a href="${item.link}" class="result-link">Xem chi tiết →</a>
                </div>
            </article>
        `).join('');
    }

    function getCategoryName(category) {
        const names = {
            'news': 'Tin tức',
            'admissions': 'Tuyển sinh',
            'events': 'Sự kiện',
            'announcements': 'Thông báo'
        };
        return names[category] || category;
    }

    function highlightKeyword(text, keyword) {
        const regex = new RegExp(`(${keyword})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }
});
