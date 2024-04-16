
//  bật tắt login modal
document.addEventListener('DOMContentLoaded', function () {
    var loginButton = document.querySelector('.login-js');
    var loginModal = document.getElementById('login-modal');
    var modalOverlay = document.getElementById('modal-overlay');

    loginButton.addEventListener('click', function () {
        loginModal.style.display = 'block';
    });

    // Sự kiện click cho overlay để đóng modal
    modalOverlay.addEventListener('click', function (event) {
        if (event.target === modalOverlay) {
            loginModal.style.display = 'none';
        }
    });
});
