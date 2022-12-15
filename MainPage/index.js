
document.getElementById('save-review-btn').addEventListener('click', () => {
    document.querySelector('textarea').value = '';
    document.querySelector('textarea').placeholder = 'Leave a review ...';
});



document.getElementById('loginBtn').addEventListener('click', () => {
    document.getElementById('username').innerHTML=''
    document.getElementById('pass').innerHTML = '';
});

