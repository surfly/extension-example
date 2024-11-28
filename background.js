surflyExtension.surflySession.onMessage.addListener((message, sender) => {
    if (message?.event_type === 'relocated') {
        console.log('background received relocated message', message);

        surflyExtension.runtime.sendMessage({
            event_type: 'relocated_propagated',
            from: 'background',
        });

        surflyExtension.tabs.sendMessage(null, {
            event_type: 'relocated_propagated',
            from: 'background',
        });
    }
});