// 페이지 로드 시 카운터를 0으로 초기화
let counter = 0;

function increaseCounter() {
    counter++;
    document.getElementById('counter').textContent = counter;
}

function initializeCounter() {
    counter = 0;
    document.getElementById('counter').textContent = counter;
}

// 페이지 새로고침 시 카운터 초기화
window.addEventListener('load', function() {
    counter = 0;
    document.getElementById('counter').textContent = counter;
});
