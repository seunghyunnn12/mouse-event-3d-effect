# mouse-event-3d-effect
# GSAP Hover Effect

## 📌 프로젝트 소개
이 프로젝트는 `GSAP`을 활용하여 `hover` 시 요소가 3D 회전하는 애니메이션 효과를 추가하는 코드입니다.

## 🚀 기능 설명
- 특정 요소에 마우스를 올리면 **부드러운 3D 회전 효과**가 적용됩니다.
- 내부 `span` 요소들은 개별적으로 랜덤한 움직임을 가집니다.
- 마우스가 요소를 벗어나면 원래 위치로 되돌아갑니다.

## 🛠️ 사용된 기술
- **GSAP (GreenSock Animation Platform)**
  - `gsap.to()` : 부드러운 애니메이션 적용
  - `gsap.utils.random()` : 랜덤한 애니메이션 값 적용
- **ScrollTrigger (확장 가능)**

## 📜 코드 주요 내용
```js
document.querySelectorAll('.hover-effect').forEach((element) => {
    element.addEventListener('mousemove', (e) => {
        const { width, height, left, top } = element.getBoundingClientRect()
        const x = ((e.clientX - left - width / 2) / width) * 20
        const y = ((e.clientY - top - height / 2) / height) * 20

        gsap.to(element, { rotateX: x, rotateY: y, transformPerspective: 1000, ease: 'power2.out', duration: 0.3 })
        gsap.to(element.querySelectorAll('span'), {
            rotateX: () => gsap.utils.random(-10, 5),
            rotateY: () => gsap.utils.random(-10, 5),
            translateZ: () => gsap.utils.random(-10, 10),
            ease: 'power2.out',
            duration: 0.3,
            stagger: 0.5
        })
    })

    element.addEventListener('mouseleave', () => {
        gsap.to(element, { rotateX: 0, rotateY: 0, ease: 'power2.out', duration: 0.3 })
        gsap.to(element.querySelectorAll('span'), { rotateX: 0, rotateY: 0, translateZ: 0, ease: 'power2.out', duration: 0.3, stagger: 0.5 })
    })
})
