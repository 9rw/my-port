import '../styles/nav.css'
function NavBottom() {
    let sections = document.querySelectorAll('section')

    let pageCount = document.querySelector('#pageCount')
    let pageName = document.querySelector('#pageName')
    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY
            let offset = sec.offsetTop
            let height = sec.offsetHeight

            // pageName.textContent = top
            if (top + height * .5 >= offset && top < offset + height * 1.5) {
                pageName.textContent = sec.id
                pageCount.textContent = `0${sec.tabIndex}`
            }
        });
    };
    return (
        <div className="nav-container" style={{ bottom: 0 }}>
            <nav>
                <div className="page">
                    <span id='pageCount'>00</span>
                    <span>|03</span>
                </div>
                <span id='pageName'>Page</span>
            </nav>
        </div>
    );
    ;
}

export default NavBottom;