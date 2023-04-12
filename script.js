const form = $("form");

const handleExt = (url) => {
    document.body.style.background = 'red';
}


form.submit(async (evt) => {
    evt.preventDefault();
    const [tab] = await chrome.tabs.query({active:true, currentWindow: true});

    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: handleExt,
        args: [input.value]

    })
} )