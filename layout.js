// 공통 헤더/푸터. 메뉴를 바꾸려면 이 파일만 수정하면 됩니다.
// 사용법: <header id="site-header" data-active="project|info|contact"></header>
//         <footer id="site-footer" class="site-footer"></footer>
(function () {
    const header = document.getElementById('site-header');
    if (header) {
        const active = header.dataset.active || '';
        const cls = (name) => (active === name ? ' class="active"' : '');

        let years = '';
        for (let g = 1; g <= 5; g++) {
            years += `<li class="dropdown-submenu"><a href="main.html?grade=${g}">Year ${g}</a><ul class="submenu">` +
                `<li><a href="main.html?grade=${g}&semester=1">Semester 1</a></li>` +
                `<li><a href="main.html?grade=${g}&semester=2">Semester 2</a></li></ul></li>`;
        }

        header.innerHTML = `
            <a href="main.html" class="logo">PLANT</a>
            <nav class="nav-links">
                <div class="dropdown">
                    <a href="main.html"${cls('project')}>Project</a>
                    <ul class="dropdown-menu">
                        ${years}
                        <li class="dropdown-divider"></li>
                        <li><a href="main.html?category=competition">Competition</a></li>
                        <li><a href="main.html?category=other">Other</a></li>
                    </ul>
                </div>
                <a href="info.html"${cls('info')}>Info</a>
                <a href="contact.html"${cls('contact')}>Contact</a>
            </nav>`;
    }

    const footer = document.getElementById('site-footer');
    if (footer) {
        footer.innerHTML = '<p>© PLANT. All rights reserved. <a href="admin.html">Admin</a></p>';
    }
})();

// DB에서 온 문자열을 HTML에 넣기 전에 반드시 거치는 함수 (XSS 방지)
function escapeHTML(value) {
    return String(value == null ? '' : value)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// http(s) 주소만 이미지 src로 허용
function safeURL(value) {
    try {
        const u = new URL(value, location.href);
        return (u.protocol === 'https:' || u.protocol === 'http:') ? u.href : '';
    } catch (e) {
        return '';
    }
}
