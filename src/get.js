import https from 'https'

const get = (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, (resp) => {
            let data = ''

            resp.on('data', (chunk) => {
                data += chunk
            })

            resp.on('end', () => {
                resolve(JSON.parse(data))
            })

        }).on("error", (err) => {
            reject(err)
        })
    })
}

export default get