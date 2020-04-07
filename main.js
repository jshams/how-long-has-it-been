const days = document.getElementById('num-days')
const hours = document.getElementById('num-hours')
const minutes = document.getElementById('num-minutes')
const seconds = document.getElementById('num-seconds')


class NumDays {
    constructor() {
        this.state = 'New York'
        this.start = new Date('March 22, 2020 20:00:00')
        this.date = new Date()
        this.numDays = null
        this.numHours = null
        this.update()
    }

    update() {
        this.date = new Date()
        const timeDiff = this.date - this.start
        this.numDays = Math.floor(timeDiff / 86400000)
        this.numHours = Math.floor((timeDiff % 86400000) / 3600000)
        this.numMinutes = Math.floor((timeDiff % 3600000) / 60000)
        this.numSeconds = Math.floor((timeDiff % 60000) / 1000)
        days.innerHTML = this.numDays
        hours.innerHTML = this.numHours
        minutes.innerHTML = this.numMinutes
        seconds.innerHTML = this.numSeconds
    }
}


let n = new NumDays()

function update() {
    n.update()
}

setInterval(update, 1000)