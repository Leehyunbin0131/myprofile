// script.js

document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            date: '2025.01.08',
            title: '군죽 프로젝트',
            description: '군죽 웹 애플리케이션 개발 완료.',
            image: 'images/gunjuck.png', // 실제 이미지 경로 확인
            github: 'https://github.com/Leehyunbin0131/gunjuck'
        },
        {
            date: '2025.01.12',
            title: '웹 포트폴리오 구축',
            description: '개인 웹 포트폴리오 사이트 구축 및 배포 완료.',
            image: 'images/myprofile.png',
            github: 'https://github.com/Leehyunbin0131/myprofile'
        },
        // 추가 프로젝트는 여기에 객체 형태로 추가
    ];

    const timeline = document.querySelector('.timeline');

    projects.forEach((project, index) => {
        const container = document.createElement('div');
        container.classList.add('container');
        container.classList.add(index % 2 === 0 ? 'left' : 'right');

        // 날짜 요소 추가
        const date = document.createElement('div');
        date.classList.add('date');
        date.textContent = project.date;
        container.appendChild(date);

        const content = document.createElement('div');
        content.classList.add('content');

        const img = document.createElement('img');
        img.src = project.image;
        img.alt = project.title;

        const title = document.createElement('h2');
        title.textContent = project.title;

        const desc = document.createElement('p');
        desc.textContent = project.description;

        const button = document.createElement('a');
        button.href = project.github;
        button.target = '_blank';
        button.textContent = '자세히 보기';
        button.classList.add('details-button');

        content.appendChild(img);
        content.appendChild(title);
        content.appendChild(desc);
        content.appendChild(button);

        container.appendChild(content);
        timeline.appendChild(container);

        // 첫 번째 항목은 항상 표시 상태로 설정
        if(index === 0){
            content.classList.add('show');
        }
    });

    // 개별 프로젝트 항목에 대한 IntersectionObserver
    const contentObserverOptions = {
        threshold: 0.1
    };

    const contentObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, contentObserverOptions);

    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        // 첫 번째 항목은 이미 'show' 클래스가 있으므로 제외
        if(!content.classList.contains('show')){
            contentObserver.observe(content);
        }
    });

    // 기술 스택 바 차트 애니메이션
    const techBars = document.querySelectorAll('.tech-bar');

    const techObserverOptions = {
        threshold: 0.5
    };

    const techObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                const bar = entry.target;
                const percentage = bar.getAttribute('data-percentage');
                bar.style.width = percentage;
                observer.unobserve(bar);
            }
        });
    }, techObserverOptions);

    techBars.forEach(bar => {
        techObserver.observe(bar);
    });
});
