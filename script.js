document.addEventListener('DOMContentLoaded', function() {
    // Login functionality
    document.getElementById('login-btn').addEventListener('click', function() {
        const username = document.getElementById('username').value;
        if (username) {
            document.getElementById('login-section').style.display = 'none';
            document.getElementById('main-app').style.display = 'block';
            document.getElementById('user-name').textContent = username;
        } else {
            alert('Por favor ingrese un nombre de usuario');
        }
    });
    
    // Logout functionality
    document.getElementById('logout-btn').addEventListener('click', function() {
        document.getElementById('main-app').style.display = 'none';
        document.getElementById('login-section').style.display = 'flex';
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    });
    
    // Navigation functionality
    const navLinks = document.querySelectorAll('.sidebar .nav-link');
    const sections = document.querySelectorAll('.form-section');
    const sectionTitle = document.getElementById('section-title');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
            
            // Update section title
            sectionTitle.textContent = this.textContent.trim();
        });
    });
    
    // Simulación de datos para el dashboard
    updateDashboardData();
    
    // Función para simular la actualización de datos del dashboard
    function updateDashboardData() {
        // En una aplicación real, aquí se haría una llamada a una API
        // para obtener los datos actualizados
        console.log("Actualizando datos del dashboard...");
        
        // Simular datos actualizados después de 2 segundos
        setTimeout(() => {
            document.querySelectorAll('.stats-card h4')[0].textContent = Math.floor(Math.random() * 10) + 10;
            document.querySelectorAll('.stats-card h4')[1].textContent = Math.floor(Math.random() * 10) + 30;
            document.querySelectorAll('.stats-card h4')[2].textContent = Math.floor(Math.random() * 5) + 1;
            document.querySelectorAll('.stats-card h4')[3].textContent = Math.floor(Math.random() * 5) + 5;
        }, 2000);
    }
    
    // Manejo de formularios (simulación)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Formulario enviado correctamente. En una aplicación real, los datos se guardarían en la base de datos.');
            // Aquí iría el código para enviar los datos a un servidor
        });
    });
    
    // Manejo de botones en la sección de documentos
    const documentButtons = document.querySelectorAll('.dashboard-card .btn');
    documentButtons.forEach(button => {
        button.addEventListener('click', function() {
            const cardTitle = this.closest('.dashboard-card').querySelector('h3').textContent;
            alert(`Accediendo a: ${cardTitle}`);
            // Aquí iría la lógica para cargar los documentos correspondientes
        });
    });
    
    // Manejo de botones en la sección de formularios
    const formButtons = document.querySelectorAll('#formularios .btn');
    formButtons.forEach(button => {
        button.addEventListener('click', function() {
            const formName = this.textContent.trim();
            alert(`Abriendo formulario: ${formName}`);
            // Aquí iría la lógica para cargar el formulario correspondiente
        });
    });
});