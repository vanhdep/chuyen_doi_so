// Teacher data
const teachersData = {
    'tran-dang-cong': {
        name: 'TS. Trần Đăng Công',
        position: 'Trưởng khoa Công nghệ Thông tin',
        department: 'Khoa Công nghệ Thông tin',
        image: 'https://atm273446-s3user.vcos.cloudstorage.com.vn/dhdainam/asset/images/departments/quotes/image%20%282%29_1.jpg',
        degree: 'Tiến sĩ Công nghệ Thông tin',
        specialties: ['Công nghệ phần mềm', 'Hệ thống thông tin', 'Quản lý dự án công nghệ'],
        quote: 'Tại khoa Công nghệ Thông tin Đại học Đại Nam, chúng tôi cam kết mang đến môi trường học tập hiện đại, sáng tạo và thực tiễn. Sinh viên không chỉ được trang bị kiến thức chuyên sâu mà còn phát triển kỹ năng mềm, tính kỷ luật và tư duy giải quyết vấn đề, sẵn sàng chinh phục mọi thử thách trong ngành công nghệ...'
    },
    'pham-van-tiep': {
        name: 'ThS. Phạm Văn Tiệp',
        position: 'Phó Trưởng khoa',
        department: 'Khoa Công nghệ Thông tin',
        image: 'https://atm273446-s3user.vcos.cloudstorage.com.vn/dhdainam/thumbnail/images/teachers/59689/image-thumb__59689__teacherResizeThumbnail/Pha%CC%A3m%20Va%CC%86n%20Tie%CC%A3%CC%82p%20%20-%20CNTT%20.a7ae0d12.jpg',
        degree: 'Thạc sĩ',
        specialties: ['Quản lý giáo dục', 'Công nghệ thông tin'],
        bio: 'ThS. Phạm Văn Tiệp là Phó Trưởng khoa Công nghệ Thông tin, có nhiều năm kinh nghiệm trong công tác quản lý và giảng dạy. Thầy luôn tận tâm với công việc và đóng góp tích cực vào sự phát triển của khoa.'
    },
    'tran-quy-nam': {
        name: 'TS. Trần Quý Nam',
        position: 'Trưởng bộ môn Công nghệ dữ liệu',
        department: 'Khoa Công nghệ Thông tin',
        image: 'https://atm273446-s3user.vcos.cloudstorage.com.vn/dhdainam/thumbnail/images/teachers/59426/image-thumb__59426__teacherResizeThumbnail/0J7A2605.882eff93.jpg',
        degree: 'Tiến sĩ',
        specialties: ['Data Science', 'Big Data', 'Machine Learning', 'Data Analytics'],
        bio: 'TS. Trần Quý Nam là chuyên gia trong lĩnh vực Công nghệ dữ liệu với nhiều công trình nghiên cứu được công bố. Thầy hiện là Trưởng bộ môn Công nghệ dữ liệu, đào tạo sinh viên về các kỹ năng xử lý và phân tích dữ liệu hiện đại.'
    },
    'le-trung-hieu': {
        name: 'ThS. Lê Trung Hiếu',
        position: 'Phó Trưởng khoa',
        department: 'Khoa Công nghệ Thông tin',
        image: 'https://atm273446-s3user.vcos.cloudstorage.com.vn/dhdainam/thumbnail/images/teachers/58611/image-thumb__58611__teacherResizeThumbnail/get-image-thumbnail%20%2812%29.2b8f5b4f.png',
        degree: 'Thạc sĩ',
        specialties: ['Quản lý đào tạo', 'Hệ thống thông tin'],
        bio: 'ThS. Lê Trung Hiếu là Phó Trưởng khoa phụ trách công tác đào tạo. Với kinh nghiệm dày dạn trong giảng dạy và quản lý, thầy luôn nỗ lực nâng cao chất lượng đào tạo của khoa.'
    },
    'tran-thi-hue': {
        name: 'ThS. Trần Thị Huệ',
        position: 'Giảng viên BM Hệ thống & CNPM',
        department: 'Khoa Công nghệ Thông tin',
        image: 'https://atm273446-s3user.vcos.cloudstorage.com.vn/dhdainam/thumbnail/images/teachers/59427/image-thumb__59427__teacherResizeThumbnail/0J7A2616.4011c10d.jpg',
        degree: 'Thạc sĩ',
        specialties: ['Hệ thống thông tin', 'Công nghệ phần mềm', 'Phân tích thiết kế hệ thống'],
        bio: 'ThS. Trần Thị Huệ là giảng viên bộ môn Hệ thống thông tin và Công nghệ phần mềm. Cô có nhiều kinh nghiệm trong việc giảng dạy các môn học về phân tích, thiết kế và phát triển hệ thống thông tin.'
    },
    'pham-thi-to-nga': {
        name: 'ThS. Phạm Thị Tố Nga',
        position: 'Giảng viên BM Hệ thống & CNPM',
        department: 'Khoa Công nghệ Thông tin',
        image: 'https://atm273446-s3user.vcos.cloudstorage.com.vn/dhdainam/thumbnail/images/teachers/59687/image-thumb__59687__teacherResizeThumbnail/Pha%CC%A3m%20Thi%CC%A3%20To%CC%82%CC%81%20Nga%20-%20CNTT%20.e7a60745.jpg',
        degree: 'Thạc sĩ',
        specialties: ['Công nghệ phần mềm', 'Hệ thống thông tin', 'Quản lý dự án'],
        bio: 'ThS. Phạm Thị Tố Nga chuyên giảng dạy các môn học về Công nghệ phần mềm và Quản lý dự án. Cô luôn cập nhật kiến thức mới và áp dụng phương pháp giảng dạy hiện đại để sinh viên tiếp thu tốt nhất.'
    },
    'nguyen-ngoc-an': {
        name: 'ThS. Nguyễn Ngọc Ân',
        position: 'Giảng viên BM Công nghệ dữ liệu',
        department: 'Khoa Công nghệ Thông tin',
        image: 'https://atm273446-s3user.vcos.cloudstorage.com.vn/dhdainam/thumbnail/images/teachers/59428/image-thumb__59428__teacherResizeThumbnail/0J7A2600.3f2fdd21.jpg',
        degree: 'Thạc sĩ',
        specialties: ['Data Technology', 'Data Analytics', 'Database Management'],
        bio: 'ThS. Nguyễn Ngọc Ân là giảng viên bộ môn Công nghệ dữ liệu, chuyên giảng dạy về xử lý và phân tích dữ liệu. Thầy có nhiều kinh nghiệm thực tế trong việc triển khai các dự án về dữ liệu lớn.'
    },
    'le-van-phong': {
        name: 'ThS. Lê Văn Phong',
        position: 'Giảng viên TTTH',
        department: 'Khoa Công nghệ Thông tin',
        image: 'https://atm273446-s3user.vcos.cloudstorage.com.vn/dhdainam/thumbnail/images/teachers/59429/image-thumb__59429__teacherResizeThumbnail/0J7A2599.8cf1f540.jpg',
        degree: 'Thạc sĩ',
        specialties: ['Tin học ứng dụng', 'Lập trình', 'Cơ sở dữ liệu'],
        bio: 'ThS. Lê Văn Phong là giảng viên Trung tâm Tin học, với nhiều năm kinh nghiệm trong giảng dạy các môn học cơ bản về lập trình và tin học ứng dụng. Thầy luôn tận tình hướng dẫn sinh viên.'
    }
};

// Function to view teacher detail
function viewTeacher(teacherId) {
    // Store teacher ID in localStorage
    localStorage.setItem('selectedTeacher', teacherId);
    // Redirect to teacher detail page
    window.location.href = 'giang-vien-detail.html';
}

// Load teacher detail on detail page
document.addEventListener('DOMContentLoaded', function() {
    const teacherId = localStorage.getItem('selectedTeacher');
    
    if (teacherId && teachersData[teacherId]) {
        loadTeacherDetail(teacherId);
    }
});

function loadTeacherDetail(teacherId) {
    const teacher = teachersData[teacherId];
    
    // Update page title
    document.title = `${teacher.name} - Đại Nam University`;
    
    // Update teacher name
    const nameElement = document.querySelector('.teacher-name');
    if (nameElement) {
        nameElement.textContent = teacher.name;
    }
    
    // Update avatar
    const avatarImg = document.querySelector('.teacher-avatar img');
    if (avatarImg) {
        avatarImg.src = teacher.image;
        avatarImg.alt = teacher.name;
    }
    
    // Update info cards
    updateInfoCard(1, 'Chức vụ', [teacher.position, teacher.department]);
    updateInfoCard(2, 'Học vị', [teacher.degree]);
    updateInfoCard(3, 'Chuyên môn', teacher.specialties);
    
    // Update bio section
    updateBioSection(teacher);
}

function updateInfoCard(cardNumber, title, content) {
    const card = document.querySelector(`.card-${cardNumber}`);
    if (card) {
        const h3 = card.querySelector('h3');
        if (h3) h3.textContent = title;
        
        // Remove old paragraphs
        const oldParagraphs = card.querySelectorAll('p');
        oldParagraphs.forEach(p => p.remove());
        
        // Add new content
        content.forEach(text => {
            const p = document.createElement('p');
            p.textContent = text;
            card.appendChild(p);
        });
    }
}

function updateBioSection(teacher) {
    const bioSection = document.querySelector('.teacher-bio-section');
    if (!bioSection) return;
    
    let bioHTML = '';
    
    // Quote or Bio
    if (teacher.quote) {
        bioHTML += `
            <div class="bio-card bio-quote">
                <div class="quote-icon">"</div>
                <p class="quote-text">${teacher.quote}</p>
                <p class="quote-author">- ${teacher.name}</p>
                <p class="quote-position">${teacher.position} ${teacher.department}</p>
            </div>
        `;
    } else if (teacher.bio) {
        bioHTML += `
            <div class="bio-card">
                <h2>Giới thiệu</h2>
                <p>${teacher.bio}</p>
            </div>
        `;
    }
    
    // Additional sections can be added here
    bioHTML += `
        <div class="bio-card">
            <h2>Trách nhiệm & Vai trò</h2>
            <ul class="achievement-list">
                <li>Giảng dạy và nghiên cứu trong lĩnh vực chuyên môn</li>
                <li>Hướng dẫn sinh viên thực hiện đồ án và nghiên cứu khoa học</li>
                <li>Tham gia các hoạt động phát triển chương trình đào tạo</li>
                <li>Đóng góp vào công tác quản lý và phát triển khoa</li>
            </ul>
        </div>
    `;
    
    bioSection.innerHTML = bioHTML;
}
