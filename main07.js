//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"

const repeatString = (str, num, space) => {
    let res = (str + space).repeat(num)
    return res.slice(0, res.length - 1)
}
console.log(repeatString("yo", 3, " "));
console.log(repeatString("yo", 3, ","));

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false

const checkStart = (str, startStr) => {
    return str.toLowerCase().startsWith(startStr)
}
console.log(checkStart("Incubator", "inc"))
console.log(checkStart("Incubator", "bat"))

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

const truncateString = (str, num) => {
    return str.slice(0, num) + '...'
}
console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null

const getMinLengthWord = (str) => {
    return str.length ? str.split(" ").reduce((acc, item) => acc.length < item.length ? acc : item) : null
}
console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!"))
console.log(getMinLengthWord(""))

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"

const setUpperCase = (str) => {
    return str.toLowerCase().split(" ").map((item, index) => item[0].toUpperCase() + item.slice(1)).join(" ")
}
console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"))

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта
// повторяющихся символов.
// * с учётом повторяющихся символов в подстроке

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true //*false
// isIncludes("Incubator", "inba") => true  //*true
// isIncludes("Incubator", "Incubatorrr")=> true //*false

const isIncludes = (str, subStr) => {
    let arr = subStr.split("")
    return arr.reduce((acc, item) => str.indexOf(acc) < str.indexOf(item))

    // let re = new RegExp(`[${subStr.split("").join("|")}]`, 'gi');
    // return str.match(re).length === subStr.split('').length
}

console.log(isIncludes("Incubator", "Cut"))
console.log(isIncludes("Incubator", "table"))
console.log(isIncludes("Incubator", "inbba"))
console.log(isIncludes("Incubator", "inba"))
console.log(isIncludes("Incubator", "Incubatorrr"))




