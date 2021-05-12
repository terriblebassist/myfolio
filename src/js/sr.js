import assignProps from './assignProps';
export default function () {
    const defaultProps = {
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        distance: '30px',
        duration: 1000,
        desktop: true,
        mobile: true
    };

    ScrollReveal().reveal('.home',
        assignProps(
            {
                delay: 500,
                origin: 'bottom'
            }, defaultProps)
    );

    ScrollReveal().reveal('.project-t',
        assignProps(
            {
                delay: 500,
                origin: window.innerWidth > 768 ? 'top' : 'bottom'
            }, defaultProps)
    );

    ScrollReveal().reveal('.project-l',
        assignProps(
            {
                delay: 500,
                origin: window.innerWidth > 768 ? 'left' : 'bottom'
            }, defaultProps)
    );

    ScrollReveal().reveal('.project-r',
        assignProps(
            {
                delay: 500,
                origin: window.innerWidth > 768 ? 'right' : 'bottom'
            }, defaultProps)
    );

    ScrollReveal().reveal('.project-b',
        assignProps(
            {
                delay: 500,
                origin: window.innerWidth > 768 ? 'bottom' : 'bottom'
            }, defaultProps)
    );

    ScrollReveal().reveal('.contact-wrapper',
        assignProps(
            {
                delay: 600,
                origin: 'bottom'
            }, defaultProps)
    );
}