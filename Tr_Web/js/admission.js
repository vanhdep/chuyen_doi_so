// Admission Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('admissionForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Show success message
            alert('Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
            
            // Reset form
            form.reset();
            
            // In real application, you would send data to server here
            console.log('Form data:', data);
        });
    }
    
    // Add animation to form inputs
    const inputs = document.querySelectorAll('.admission-form input, .admission-form select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });
});
