const binaryClock = () => {
    const date = new Date()
    const hrs = splitDec(date.getHours())
    const mins = splitDec(date.getMinutes())
    const secs = splitDec(date.getSeconds())

    farbaHodin(hrs[0], 'b0', 'hours')
    farbaHodin(hrs[1], 'b1', 'hours')
    farbaHodin(mins[0], 'b0', 'minutes')
    farbaHodin(mins[1], 'b1', 'minutes')
    farbaHodin(secs[0], 'b0', 'seconds')
    farbaHodin(secs[1], 'b1', 'seconds')
}

const farbaHodin = (binary, ninche, category) => {
    binary.split("").reverse().forEach((bin, index) => {
        const dom = Array.from(document.querySelectorAll(`.${category} .bin span.${ninche}`)).reverse()
        if (bin === "1") {
            const light = dom[index]
            light.classList += " light"
        }
    });
}

const clearClock = () => {
    document.querySelectorAll('.light').forEach(light => light.classList.remove('light'))
}

const toBin = (number) => {
    return Number(number).toString(2)
}

const splitDec = (number) => {
    let no = number.toString().split("")
    if (no.length === 1) no = [0, no[0]]
    return {
        0: toBin(no[0]),
        1: toBin(no[1])
    }
}


setInterval(() => {
    clearClock()
    binaryClock()
}, 1000)