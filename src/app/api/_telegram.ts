'use server'
function _sendTextMessageAPI(message: string) {
    const url = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage?chat_id=${process.env.CHAT_ID}&text=${encodeURIComponent(message)}`;
    return url
}


export async function testMessage() {
    const testMessage = 'this is test msg to test the chatbot';
    _sendTextMessageAPI(testMessage)
}

export async function sendEmailForm(form: string) {
    const url = _sendTextMessageAPI(form)
    const res = await fetch(url)
    const data = await res.json()
    if (data.ok) return 200
    else return 400

}

export async function sendVisitStatistic(stat: string) {
    _sendTextMessageAPI(stat)
}