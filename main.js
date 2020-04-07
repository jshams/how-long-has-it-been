const days = document.getElementById('num-days')
const hours = document.getElementById('num-hours')
const minutes = document.getElementById('num-minutes')
const seconds = document.getElementById('num-seconds')
const dropdown = document.getElementById('dropdownMenuLink')
const dropdownItems = document.getElementById('dropdown-items')

var isMobile = false; //initiate as false
// device detection
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    isMobile = true;
}

if (isMobile) {
    const body = document.getElementsByTagName('BODY')[0]
    body.style.fontSize = '8px'
}

var states = {
    'Alaska': 'March 28, 2020 17:00:00',
    'Arizona': 'March 31, 2020 17:00:00',
    'Arkansas': null,
    'California': 'March 19, 2020 00:00:00',
    'Colorado': 'March 26, 2020 06:00:00',
    'Connecticut': 'March 23, 2020 20:00:00',
    'Delaware': 'March 24, 2020 08:00:00',
    'District of Columbia': 'April 01, 2020 00:01:00',
    'Florida': 'April 03, 2020 00:01:00',
    'Georgia': 'April 03, 2020 00:00:00',
    'Hawaii': 'March 25, 2020 00:01:00',
    'Iowa': null,
    'Idaho': 'March 25, 2020 17:00:00',
    'Illinios': 'March 21, 2020 17:00:00',
    'Indiana': 'March 24, 2020 23:59:00',
    'Kansas': 'March 30, 2020 00:01:00',
    'Kentucky': 'March 26, 2020 20:00:00',
    'Louisiana': 'March 23, 2020 17:00:00',
    'Maine': 'April 02, 2020 00:01:00',
    'Maryland': 'March 30, 2020 20:00:00',
    'Massachusetts': 'March 24, 2020 12:00:00',
    'Michigan': 'March 24, 2020 00:01:00',
    'Minnesota': 'March 27, 2020 23:59:00',
    'Mississippi': 'April 03, 2020 17:00:00',
    'Missouri': 'April 06, 2020 00:01:00',
    'Montana': 'March 28, 2020 00:01:00',
    'Nebraska': null,
    'Nevada': 'April 01, 2020 00:00:00',
    'New Hampshire': 'March 27, 2020 23:59:00',
    'New Jersey': 'March 21, 2020 21:00:00',
    'New Mexico': 'March 24, 2020 08:00:00',
    'New York': 'March 22, 2020 20:00:00',
    'North Carolina': 'March 30, 2020 17:00:00',
    'North Dakota': null,
    'Ohio': 'March 23, 2020 23:59:00',
    'Oklahoma': 'March 28, 2020 23:59:00',
    'Oregon': 'March 23, 2020 00:00:00',
    'Pennsylvania': 'April 01, 2020 20:00:00',
    'Rhode Island': 'March 28, 2020 00:00:00',
    'South Carolina': 'March 26, 2020 00:01:00',
    'South Dakota': null,
    'Tennessee': 'March 31, 2020 23:59:00',
    'Texas': 'April 02, 2020 00:01:00',
    'Utah': 'March 30, 2020 00:01:00',
    'Vermont': 'March 30, 2020 00:00:00',
    'Washington': 'March 23, 2020 00:00:00',
    'West Virginia': 'March 24, 2020 20:00:00',
    'Wisconsin': 'March 25, 2020 20:00:00',
    'Wyoming': 'March 28 2020 00:00:00'
}

const keys = Object.keys(states)
for (let i = 0; i < keys.length; i++) {
    const state = keys[i]
    // <a class="dropdown-item" href="#">Action</a>
    const anchor = document.createElement("A")
    dropdownItems.appendChild(anchor)
    anchor.classList.add("dropdown-item")
    anchor.innerHTML = state
    anchor.onclick = function () { changeState(state) }
}

class NumDays {
    constructor(state) {
        this.state = 'New York'
        this.start = new Date('March 22, 2020 20:00:00')
        this.date = new Date()
        this.numDays = null
        this.numHours = null
        dropdown.innerHTML = 'New York'
        this.updateHTML()
    }


    getNewTimes() {
        if (states[this.state] === null) {
            this.numDays = 0
            this.numHours = 0
            this.numMinutes = 0
            this.numSeconds = 0
        }
        else {
            this.date = new Date()
            const timeDiff = this.date - this.start
            this.numDays = Math.floor(timeDiff / 86400000)
            this.numHours = Math.floor((timeDiff % 86400000) / 3600000)
            this.numMinutes = Math.floor((timeDiff % 3600000) / 60000)
            this.numSeconds = Math.floor((timeDiff % 60000) / 1000)
        }
    }

    updateHTML() {
        this.getNewTimes()
        days.innerHTML = this.numDays
        hours.innerHTML = this.numHours
        minutes.innerHTML = this.numMinutes
        seconds.innerHTML = this.numSeconds
    }

    changeState(newState) {
        this.state = newState
        this.start = new Date(states[newState])
        this.updateHTML()
        dropdown.innerHTML = newState
    }
}


let n = new NumDays()

function update() {
    n.updateHTML()
}

function changeState(newState) {
    n.changeState(newState)
    closeDropdown()
}

function clickDropdown() {
    if (dropdownItems.style.visibility == 'hidden') {
        openDropdown()
    }
    else {
        closeDropdown()
    }
}

function openDropdown() {
    dropdownItems.style.visibility = 'visible'
    dropdownItems.style.marginBottom = '0px'
}

function closeDropdown() {
    dropdownItems.style.visibility = 'hidden'
    dropdownItems.style.marginBottom = '-80px'
}
closeDropdown()
setInterval(update, 1000)
