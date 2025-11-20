const answer = 1000

const submit = (candidate) => {
    let perferctCount = 0
    let numberOnlyCorrectCount = 0

    const splittedAnswer = String(answer).split('')
    const splittedCandidate = String(candidate).split('')

    splittedCandidate.forEach((digit, index) => {
        if (digit === splittedAnswer[index]) {
            perferctCount += 1
            return
        }

        if (splittedAnswer.includes(digit)) {
            numberOnlyCorrectCount += 1
            return
        }
    })

    return `${perferctCount}S ${numberOnlyCorrectCount}B`
}
