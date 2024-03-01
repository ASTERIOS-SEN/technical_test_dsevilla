const customResponse = (data, code = 200) => {
    return {
        code: code,
        msj: 'Correcto',
        data: data
    }
}

module.exports = customResponse;