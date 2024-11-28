surflyExtension.runtime.onMessage.addListener((message, sender) => {
    if (message?.event_type === 'relocated_propagated') {
        console.log('content received relocated propagated message', message);
    }
});