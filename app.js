
        document.getElementById('registrationForm').addEventListener('submit', function(e) {
            const form = e.target;
            if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
                
                
                const invalidFields = form.querySelectorAll(':invalid');
                invalidFields.forEach(field => {
                    const errorMsg = field.nextElementSibling;
                    if (errorMsg && errorMsg.classList.contains('error-message')) {
                        errorMsg.style.display = 'block';
                    }
                });
            }
            
            form.classList.add('validated');
        });

        
        document.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('input', function() {
                if (this.checkValidity()) {
                    const errorMsg = this.nextElementSibling;
                    if (errorMsg && errorMsg.classList.contains('error-message')) {
                        errorMsg.style.display = 'none';
                    }
                }
            });
        });