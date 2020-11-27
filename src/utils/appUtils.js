export const safeAnchorInNewTab = {
    target: '__blank',
    rel: 'noreferrer noopener'
}

const portalStyles = {
    width: '100vw',
    height: '100vh',
    'z-index': 10000,
    position: 'absolute',
    top: 0,
    left: 0,
    'background-color': 'rgba(0,0,0,.6)'
}

export const applyPortalStyles = (el) => {
    for (const style in portalStyles) {
        el.style[style] = portalStyles[style];
    }
}