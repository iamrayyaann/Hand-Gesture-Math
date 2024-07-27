document.addEventListener('DOMContentLoaded', () => {
    const startCameraButton = document.querySelector('button:nth-of-type(1)');
    const captureFirstButton = document.querySelector('button:nth-of-type(2)');
    const captureSecondButton = document.querySelector('button:nth-of-type(3)');
    const processButton = document.querySelector('button:nth-of-type(4)');
    const cameraDiv = document.getElementById('camera');
    const resultDiv = document.getElementById('result');
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    let videoStream;
    let fingerCount1 = 0;
    let fingerCount2 = 0;
    let operation = 'add';

    startCameraButton.addEventListener('click', () => {
        startCamera();
    });

    captureFirstButton.addEventListener('click', () => {
        captureImage('image1', 'first');
    });

    captureSecondButton.addEventListener('click', () => {
        captureImage('image2', 'second');
    });

    processButton.addEventListener('click', () => {
        processImages();
    });

    function startCamera() {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                videoStream = stream;
                const video = document.createElement('video');
                video.srcObject = stream;
                video.autoplay = true;
                video.style.width = '100%';
                cameraDiv.innerHTML = ''; // Clear any previous video element
                cameraDiv.appendChild(video);

                // Setup canvas dimensions based on video
                video.addEventListener('loadeddata', () => {
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                });

                // Capture frames and process
                const captureFrame = () => {
                    context.drawImage(video, 0, 0, canvas.width, canvas.height);
                    requestAnimationFrame(captureFrame); // Continue capturing
                };

                requestAnimationFrame(captureFrame); // Start capturing
            })
            .catch((error) => {
                console.error('Error accessing the camera:', error);
            });
    }

    function captureImage(imageId, type) {
        const imageElement = document.getElementById(imageId);
        const dataUrl = canvas.toDataURL('image/png');
        imageElement.src = dataUrl;
        if (type === 'first') {
            fingerCount1 = getFingerCount(dataUrl); // Simulate finger count
        } else {
            fingerCount2 = getFingerCount(dataUrl); // Simulate finger count
        }
        resultDiv.textContent = `Captured ${type} image with ${type === 'first' ? fingerCount1 : fingerCount2} fingers`;
    }

    function getFingerCount(dataUrl) {
        // Placeholder function to simulate finger count
        // Implement actual finger counting or gesture recognition here
        // For demonstration, we'll just return a random number between 1 and 5
        return Math.floor(Math.random() * 5) + 1;
    }

    function processImages() {
        const operation = document.getElementById('operation').value;
        let result;
        if (operation === 'add') {
            result = fingerCount1 + fingerCount2;
        } else if (operation === 'subtract') {
            result = fingerCount1 - fingerCount2;
        }
        resultDiv.textContent = `Result: ${fingerCount1} ${operation === 'add' ? '+' : '-'} ${fingerCount2} = ${result}`;
    }
});