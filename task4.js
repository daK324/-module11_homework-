function recount (from, before) {
    let time = setInterval(() => {
        console.log(from++)
        if (from > before) {
            clearInterval(time)
        }
    }, 1000)
}
recount(1, 20)