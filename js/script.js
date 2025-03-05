gsap.registerPlugin(ScrollTrigger)

document.querySelectorAll('.hover-effect').forEach((element) => {
    element.addEventListener('mousemove', (e) => {
        const { width, height, left, top } = element.getBoundingClientRect()

        const x = ((e.clientX - left - width / 2) / width) * 20
        const y = ((e.clientY - top - height / 2) / height) * 20

        gsap.to(element, {
            rotateX:x,
            rotateY:y,
            transformPerspective: 1000, // 원근감을 주어 자연스러운 3D 효과 생성
            ease:'power2.out',
            duration:0.3
        })
        gsap.to(element.querySelectorAll('span'), {
            rotateX:()=> gsap.utils.random(-10,5),
            rotateY:()=> gsap.utils.random(-10,5),
            translateZ:()=> gsap.utils.random(-10,10),
            ease:'power2.out',
            duration:0.3,
            stagger:.5
        })
    })
    element.addEventListener('mouseleave', () => {
        console.log('mouse leave')
        gsap.to(element, {
            rotateX:0,
            rotateY:0,
            ease:'power2.out',
            duration:0.3
        })
        gsap.to(element.querySelectorAll('span'), {
            rotateX:0,
            rotateY:0,
            translateZ:0,
            ease:'power2.out',
            duration:0.3,
            stagger:.5
        })
    })
})