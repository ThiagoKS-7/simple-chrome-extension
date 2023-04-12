const form = document.querySelector("form");
const input = document.querySelector("input");

const handleExt = (url) => {
    document.body.style.background = '#0b0741';
    const images = document.querySelectorAll('img');
    images.forEach(image =>image.src = url);
}


form.addEventListener('submit',async (evt) => {
    evt.preventDefault();
    const [tab] = await chrome.tabs.query({active:true, currentWindow: true});

    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: handleExt,
        args: [input.value]

    })
} )