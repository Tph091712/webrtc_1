const videoElement = document.getElementById('video');
const statusElement = document.getElementById('status');

async function startVideo() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoElement.srcObject = stream;
        statusElement.innerText = '狀態：視頻流已獲取';
    } catch (error) {
        console.error('Error accessing media devices:', error);
        statusElement.innerText = `狀態：無法獲取視頻流 - ${error.name}`;
    }
}

startVideo();