;(async () => {
    window.addEventListener("load", () => {
        const video = document.querySelector("video")
        video.play()

        document.addEventListener("click", () => {
            try {
                video.muted = false
            } catch(error) { /* BLOCKED */ }
        })
    })
})()