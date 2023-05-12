export function getPersons(_, res) {
    res.send([{ "province": "Huelva", "gender": "male" }])
}

export function findByprovince(_, res) {
    res.send({ "province": "Huelva", "gender": "male"})
}


