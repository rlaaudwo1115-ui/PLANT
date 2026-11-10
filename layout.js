// 교수님 목록 (메인 필터와 관리자 폼에서 같이 사용). 추가/변경은 여기서만 하면 됩니다.
const PROFESSORS = ['성우제', '이정원', '류주희', '최준성', '이정수', '윤주선', '홍지학', '윤선영', '조성범', '성태현'];

// 프로젝트 성격(Type) 목록 (메인 필터와 관리자 폼에서 같이 사용)
const PROJECT_TYPES = [
    '주거', '공동주택', '단독주택', '복합용도(MXD)', '소공간',
    '문화시설', '미술관·박물관', '도서관', '공연장', '교육시설',
    '종교시설', '의료·복지시설', '업무시설', '상업시설', '숙박시설',
    '공공·행정시설', '체육시설', '교통시설', '산업·물류시설', '기념·추모시설',
    '도시재생', '도시설계', '리모델링·재생건축', '조경·랜드스케이프', '파빌리온·설치', '친환경·지속가능'
];

// 화면에 보이는 영어 이름 (DB에 저장되는 값은 위의 한글 그대로). 새 항목을 추가하면 여기에도 영어 이름을 적어 주세요.
// 여기에 없는 항목은 원래 이름이 그대로 표시됩니다.
const PROFESSOR_LABELS = {
    '성우제': 'Seong Woo-je', '이정원': 'Lee Jeong-won', '류주희': 'Ryu Ju-hee', '최준성': 'Choi Jun-seong',
    '이정수': 'Lee Jeong-su', '윤주선': 'Yun Ju-seon', '홍지학': 'Hong Ji-hak', '윤선영': 'Yun Seon-yeong',
    '조성범': 'Jo Seong-beom', '성태현': 'Seong Tae-hyeon'
};
const TYPE_LABELS = {
    '주거': 'Housing', '공동주택': 'Multi-family Housing', '단독주택': 'Single-family House',
    '복합용도(MXD)': 'Mixed-use (MXD)', '소공간': 'Small Space',
    '문화시설': 'Cultural Facility', '미술관·박물관': 'Museum & Gallery', '도서관': 'Library',
    '공연장': 'Performing Arts Venue', '교육시설': 'Educational Facility',
    '종교시설': 'Religious Facility', '의료·복지시설': 'Healthcare & Welfare', '업무시설': 'Office',
    '상업시설': 'Commercial', '숙박시설': 'Hospitality',
    '공공·행정시설': 'Public & Civic', '체육시설': 'Sports Facility', '교통시설': 'Transportation',
    '산업·물류시설': 'Industrial & Logistics', '기념·추모시설': 'Memorial',
    '도시재생': 'Urban Regeneration', '도시설계': 'Urban Design', '리모델링·재생건축': 'Remodeling & Adaptive Reuse',
    '조경·랜드스케이프': 'Landscape', '파빌리온·설치': 'Pavilion & Installation', '친환경·지속가능': 'Sustainable Design'
};

// 공통 헤더/푸터. 메뉴를 바꾸려면 이 파일만 수정하면 됩니다.
// 사용법: <header id="site-header" data-active="project|info|contact"></header>
//         <footer id="site-footer" class="site-footer"></footer>
(function () {
    const header = document.getElementById('site-header');
    if (header) {
        const active = header.dataset.active || '';
        const cls = (name) => (active === name ? ' class="active"' : '');

        header.innerHTML = `
            <a href="main.html" class="logo">PLANT</a>
            <nav class="nav-links">
                <a href="main.html"${cls('project')}>Project</a>
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
