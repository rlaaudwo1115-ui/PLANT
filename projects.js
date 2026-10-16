// projects.js 전체 코드 (최종본)

const projectsData = [
    {
        id: 1,
        title: "궁동 Co-Housing",
        author: "홍길동 (2025 Archiving)",
        year: "2025",
        grade: 3,     
        semester: 1,  
        category: "studio", // 정규 스튜디오 프로젝트
        type: "Residential",
        thumbnail: "https://picsum.photos/800/600?random=1",
        detailImages: [
            "https://picsum.photos/800/600?random=101",
            "https://picsum.photos/800/800?random=102",
            "https://picsum.photos/800/600?random=103",
            "https://picsum.photos/800/600?random=104"
        ],
        description: "본 프로젝트는 충남대학교 인근의 1인 가구 및 학생들을 위한 코하우징 설계안입니다.<br><br>대지의 단차를 활용한 입체적인 동선 체계를 통해 주변 컨텍스트와의 자연스러운 연결을 유도하며, 각 주거 유닛은 채광과 환기를 극대화할 수 있도록 배치되었습니다."
    },
    {
        id: 2,
        title: "Mixed-Use Development",
        author: "김건축 (2025 Archiving)",
        year: "2025",
        grade: 4,      
        semester: 2,  
        category: "studio", 
        type: "Commercial & Office",
        thumbnail: "https://picsum.photos/800/600?random=2",
        detailImages: [
            "https://picsum.photos/800/600?random=201",
            "https://picsum.photos/800/600?random=202"
        ],
        description: "도심지 내 복합 용도 개발 프로젝트로, 저층부의 상업 시설과 상층부의 오피스 공간이 유기적으로 결합된 매스(Mass) 스터디입니다."
    },
    {
        id: 3,
        title: "Hanok Renovation",
        author: "이설계 (2026 Archiving)",
        year: "2026",
        grade: 2,     
        semester: 1,  
        category: "studio", 
        type: "Renovation",
        thumbnail: "https://picsum.photos/800/600?random=3",
        detailImages: [
            "https://picsum.photos/800/600?random=301"
        ],
        description: "전통 한옥의 구조적 미학을 현대적인 주거 환경에 맞게 재해석한 리노베이션 프로젝트입니다."
    },
    {
        id: 4,
        title: "Vernacular Pavilion",
        author: "박공간 (2026 Archiving)",
        year: "2026",
        grade: 1,     
        semester: 2,  
        category: "studio", 
        type: "Pavilion",
        thumbnail: "https://picsum.photos/800/600?random=4",
        detailImages: [],
        description: "지역의 전통 재료와 구법을 활용하여 현대적인 형태의 파빌리온을 설계하였습니다."
    },
    {
        id: 5,
        title: "Urban Acupuncture",
        author: "최도시 (2026 Archiving)",
        year: "2026",
        grade: 5,     
        semester: 1,  
        category: "studio", 
        type: "Urban Design",
        thumbnail: "https://picsum.photos/800/600?random=5",
        detailImages: [],
        description: "도시의 소외된 자투리 공간에 최소한의 건축적 개입을 통해 활력을 불어넣는 '도시 침술' 프로젝트입니다."
    },
    {
        id: 6,
        title: "대한민국 건축대전 출품작",
        author: "김명재 외 2명",
        year: "2026",
        grade: 0, // 공모전은 학년 필터에 안 걸리도록 0으로 처리하거나 생략 가능합니다
        semester: 0,
        category: "competition", // 💡 공모전 카테고리
        type: "Competition",
        thumbnail: "https://picsum.photos/800/600?random=6",
        detailImages: [
            "https://picsum.photos/800/600?random=601",
            "https://picsum.photos/800/600?random=602"
        ],
        description: "미래 주거 환경의 새로운 패러다임을 제안하는 대한민국 건축대전 출품작입니다. 지속 가능한 기술과 지역 커뮤니티의 융합을 주제로 삼았습니다."
    },
    {
        id: 7,
        title: "YAA! 파빌리온 스터디",
        author: "1학년 스터디그룹",
        year: "2026",
        grade: 0,
        semester: 0,
        category: "other", // 💡 기타 스터디/동아리 활동 카테고리
        type: "Study & Pavilion",
        thumbnail: "https://picsum.photos/800/600?random=7",
        detailImages: [
            "https://picsum.photos/800/600?random=701"
        ],
        description: "YAA! 동아리원들이 자발적으로 모여 진행한 파빌리온 구축 스터디의 결과물입니다. 아이디어 스케치부터 실제 1:1 스케일의 목업 제작 과정까지 담았습니다."
    }
];