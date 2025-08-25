export default function windowsEntriesFadeIn(){
    

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // 表示後は監視しない
            }
        });
    }, {
        threshold: 0.3 // 30%見えたら実行
    });
    const contents = document.querySelectorAll(".contents");
    contents.forEach(content => {
        observer.observe(content);
    });
}