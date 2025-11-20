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

// const run = () => submit(2134)
// console.log(run())

const digitArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

const infoArray = [null, null, null, null, null] // 5th: not using number
const canditateArray = []

// 앞으로 할 것
// 9부터 차례대로 꽉 채우면서
// 없는 것 찾고 볼 찾으면
// 없 -> 볼 -> 스트라이크 찾음
// 볼 -> 없 -> 스트라이크 찾음
