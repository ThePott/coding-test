const answer = 1000

let iterationCount = 0

const submit = (candidate) => {
    iterationCount += 1
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

const interpretSubmit = (candidate) => {
    const submitResult = submit(candidate)

    const strikeCount = Number(submitResult[0])

    const ballCount = Number(submitResult[2])

    return { strikeCount, ballCount }
}

// const run = () => submit(2134)
// console.log(run())

const digitArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

const infoArray = [null, null, null, null, null] // 5th: not using number
const ballArray = []

const checkDigit = (digit) => {
    const allDigitSameNumber = Number(Array(4).fill(digit))
    const { strikeCount, ballCount } = interpretSubmit(allDigitSameNumber)

    if (!strikeCount && !ballCount) {
        if (infoArray[4] !== null) {
            return
        }
        infoArray[4] = digit
        return
    }

    if (infoArray[4] === null) {
        ballArray.append(digit)
        console.log({ notIncluded: digit })
        return
    }

    const notIncluded = infoArray[4]

    const indexArray = [0, 1, 2, 3]
    for (const index of indexArray) {
        const newDigitArray = Array(4).fill(notIncluded)
        newDigitArray[index] = digit
        const newCanditate = String(newDigitArray.join(''))
        const { strikeCount } = interpretSubmit(newCanditate)
        if (strikeCount) {
            infoArray[index] = digit
            console.log({ digit, strikeCount, index })
        }
    }
}

const solution = () => {
    for (const digit of digitArray) {
        console.log({ digit })
        if (ballArray.length > 0 && infoArray[4] !== null) {
            for (const ballDigit of ballArray) {
                checkDigit(ballDigit)
            }
        }

        checkDigit(digit)
    }

    console.log({ infoArray })

    return Number(infoArray.splice(4, 1).join(''))
}

const run = () => {
    const result = solution()
    console.log({ answer, result, iterationCount })
}
run()
