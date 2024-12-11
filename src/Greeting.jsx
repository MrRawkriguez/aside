function Greeting () {

    const hours = new Date().getHours()

    let timeOfDay

    if (hours < 12) {
        timeOfDay = "Good morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "Good afternoon"
    } else if (hours < 21) {
        timeOfDay = "Good evening"
    } else {
        timeOfDay = "Good night"
    }

    return timeOfDay

}

export default Greeting