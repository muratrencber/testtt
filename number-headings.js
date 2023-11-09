const HEADINGS = ["h1", "h2", "h3", "h4", "h5", "h6"]
let HEADING_NUMBERS = [0, 0, 0, 0, 0, 0]

function onNewHeadingAppeared(tag)
{
    let index = HEADINGS.indexOf(tag)
    HEADING_NUMBERS[index]++
    for (let i = index + 1; i < HEADINGS.length; i++)
        HEADING_NUMBERS[i] = 0
    return HEADING_NUMBERS.slice(0, index + 1).join(".")
}

const ALL_HEADINGS = document.querySelectorAll(HEADINGS.join(","))
for (let heading of ALL_HEADINGS) {
    if (heading.className)
        continue;
    let number = onNewHeadingAppeared(heading.tagName.toLowerCase())
    heading.innerHTML = number+"." + " " + heading.innerHTML
}
