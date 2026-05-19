import { useRef, useState } from "react"
import "./details.scss"

export default function Details() {
    const contentRef = useRef(null)
    const [open, setOpen] = useState(false)

    function handleClick(event) {

        event.preventDefault()

        const content = contentRef.current

        // ÅBN
        if (!open) {
            setOpen(true)
            requestAnimationFrame(() => {

                content.style.height = "0px"

                requestAnimationFrame(() => {
                    content.style.height = content.scrollHeight + "px"
                })
            })
        }
        // LUK
        else {

            content.style.height = content.scrollHeight + "px"

            requestAnimationFrame(() => {
                content.style.height = "0px"
            })

            content.addEventListener("transitionend", () => { setOpen(false) }, { once: true }
            )
        }
    }

    return (
        <details className="category-details" open={open}>
            <summary className="category-details__summary" onClick={handleClick}>
                <h2>Se details</h2>
                <svg className="category-details__arrow-down" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </summary>

            <div className="category-details__content" ref={contentRef}>
                <h3>Content</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque qui, laboriosam commodi voluptates velit esse! Animi, reprehenderit necessitatibus nobis distinctio laudantium autem hic nam facilis numquam id earum dolor! Reiciendis!</p>
            </div>

        </details>
    )
}