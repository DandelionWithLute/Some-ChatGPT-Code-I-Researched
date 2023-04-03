const chatBtn = document.getElementById('get');
const postBtn = document.getElementById('post');
const input = document.getElementById('input');
const baseUrl = 'http://localhost:8383/info';

chatBtn.addEventListener('click', startChatting)
async function startChatting(e) {
    e.preventDefault()
    const res = await fetch(baseUrl, { method: 'GET' })
    console.log(res)
    const data = await res.json()
    input.value = data.info
}