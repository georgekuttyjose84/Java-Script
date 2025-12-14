const videoElement = document.getElementById('video');
const button = document.getElementById('button');





async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia()
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () =>{
            videoElement.play();
        };


    } catch(error) {

    }
}

selectMediaStream()

button.addEventListener('click', async (event) => {
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
});
